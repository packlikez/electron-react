import React, { FC } from "react";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

interface ProgressProps {
  isLoading?: boolean;
}

const Progress: FC<ProgressProps> = (props) => {
  if (!props.isLoading) return null;

  return (
    <Wrapper>
      <LinearProgress />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  top: 0;
  left:0;
  position: absolute;
  z-index: 10000;
`;

export default Progress;
