import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnswerByQuestionId } from "../store/answer";
import Progress from "../components/Progress";
import Toast from "../components/Toast";
import { closeToast } from "../store/answer";

interface paramsProps {
  qId: string;
}

const Answers = () => {
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.answer);
  const { qId } = useParams<paramsProps>();

  useEffect(() => {
    dispatch(fetchAnswerByQuestionId(qId));
  }, []);

  return (
    <div>
      <Progress isLoading={answer.isLoading} />
      <Toast
        isOpen={answer.toast.isOpen}
        message={answer.toast.message}
        type={answer.toast.type}
        onClose={() => dispatch(closeToast())}
      />
      {answer.answer}
    </div>
  );
};

export default Answers;
