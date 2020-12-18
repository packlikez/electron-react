import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegin } from "./api";
import { ToastState } from "../components/Toast";

type answer = string;

interface AnswerStateProps {
  isLoading: boolean;
  toast: ToastState;
  answer: answer;

  [key: string]: any;
}

const defaultState: AnswerStateProps = {
  isLoading: false,
  toast: { isOpen: false, type: "error", message: "Error" },
  answer: "" as answer,
};

const answer = createSlice({
  name: "answer",
  initialState: defaultState,
  reducers: {
    answerRequested: (answer) => {
      answer.isLoading = true;
      answer.answer = defaultState.answer;
    },
    answerReceived: (answer, action) => {
      answer.isLoading = false;
      answer.answer = action.payload.answer;
    },
    answerRequestFailed: (answer, action) => {
      answer.isLoading = false;
      answer.toast = {
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
  answerRequested,
  answerReceived,
  answerRequestFailed,
  closeToast,
} = answer.actions;

export const fetchAnswerByQuestionId = (qId: number | string) =>
  apiCallBegin({
    url: `/answers/${qId}`,
    method: "get",
    onStart: answerRequested,
    onSuccess: answerReceived,
    onError: answerRequestFailed,
  });

export default answer.reducer;
