import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegin } from "./api";
import { ToastState } from "../components/Toast";

interface QuestionProps {
  id: number;
  question: string;
}

interface QuestionStateProps {
  isLoading: boolean;
  toast: ToastState;
  list: QuestionProps[];

  [key: string]: any;
}

const defaultState: QuestionStateProps = {
  isLoading: false,
  toast: { isOpen: false, type: "error", message: "Error" },
  list: [],
};

const question = createSlice({
  name: "question",
  initialState: defaultState,
  reducers: {
    questionRequested: (question) => {
      question.isLoading = true;
      question.list = defaultState.list;
    },
    questionReceived: (question, action) => {
      question.isLoading = false;
      console.log(action)
      question.list = action.payload;
    },
    questionRequestFailed: (question, action) => {
      question.isLoading = false;
      question.toast = {
        isOpen: true,
        type: "error",
        message: action.payload?.message || "Something went wrong",
      };
    },
    closeToast: (role) => {
      role.toast.isOpen = false;
    },
  },
});

export const {
  questionRequested,
  questionReceived,
  questionRequestFailed,
  closeToast,
} = question.actions;

export const fetchQuestion = () =>
  apiCallBegin({
    url: "/questions",
    method: "get",
    onStart: questionRequested,
    onSuccess: questionReceived,
    onError: questionRequestFailed,
  });

export default question.reducer;
