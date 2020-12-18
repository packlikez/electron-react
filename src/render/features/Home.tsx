import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { closeToast, fetchQuestion } from "../store/question";
import Toast from "../components/Toast";
import Progress from "../components/Progress";
import { Button } from "@material-ui/core";
import NewWindowButton from "../components/NewWindowButton";

const questions = [
  {
    text: 'Which animals as known as "Ship of the Desert"',
    answer: "Camel",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);

  useEffect(() => {
    dispatch(fetchQuestion());
  }, []);

  return (
    <div>
      <Progress isLoading={question.isLoading} />
      <Toast
        isOpen={question.toast.isOpen}
        message={question.toast.message}
        type={question.toast.type}
        onClose={() => dispatch(closeToast())}
      />

      {question.list.map((q, index) => {
        return (
          <Question key={q.question + index}>
            <QuestionNo>No. {index + 1}</QuestionNo>
            <QuestionText>{q.question}</QuestionText>
            <NewWindowButton url={"http://localhost:3000/answer/" + q.id}>
              Answer
            </NewWindowButton>
          </Question>
        );
      })}
    </div>
  );
};

const Question = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
`;

const QuestionNo = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const QuestionText = styled.span``;

export default Home;
