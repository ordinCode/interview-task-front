import React from "react";
import styled from "@emotion/styled";
import DisplayBallResultUtil from "../../utils/DisplayBallResultUtil";
import GameRetryMessage from "./GameRetryMessage";
import { useStoreBaseballGame } from "../../hooks/useStoreBaseballGame";

const Container = styled.div``;

interface Props {}

const TryHistory = ({}: Props) => {
  const { baseballGameState } = useStoreBaseballGame();
  console.log(baseballGameState.answer);

  return (
    <Container>
      {baseballGameState.findHistory().map((v) => (
        <div key={v.number}>
          {v.number} : {DisplayBallResultUtil.displayBallResult(v.result)}
        </div>
      ))}
      {baseballGameState.isEnd() && <GameRetryMessage />}
    </Container>
  );
};

export default TryHistory;
