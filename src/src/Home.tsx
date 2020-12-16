import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const electron = window.require("electron");

const questions = [
  {
    text: 'Which animals as known as "Ship of the Desert"',
    answer: "Camel",
  },
];

const Home = () => {
  const create = (ans: string) => () =>
    electron.ipcRenderer.invoke("newWindow", {
      url: "http://localhost:3000/answer/" + ans,
    });

  return (
    <div>
      {questions.map((q, index) => {
        return (
          <Question>
            <QuestionNo>No. {index + 1}</QuestionNo>
            <QuestionText>{q.text}</QuestionText>
            <Button variant="contained" onClick={create(q.answer)}>
              Answer
            </Button>
          </Question>
        );
      })}
    </div>
  );
};

const Question = styled.div`
  display: flex;
  flex-direction: column;
  padding:8px;
  gap:8px;
`;

const QuestionNo = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const QuestionText = styled.span``;

export default Home;
