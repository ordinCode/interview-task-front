import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { baseBallGameState } from "../../state/baseBallGameState";
import DisplayBallResultUtil from "../../utils/DisplayBallResultUtil";
import GameRetryMessage from "./GameRetryMessage";

const Container = styled.div``;

interface Props {}

const TryHistory = ({}: Props) => {
  const baseBallGame = useRecoilValue(baseBallGameState);
  console.log(baseBallGame.answer);

  return (
    <Container>
      {baseBallGame.findHistory().map((v) => (
        <div>
          {v.number} : {DisplayBallResultUtil.displayBallResult(v.result)}
        </div>
      ))}
      {baseBallGame.isEnd() && <GameRetryMessage />}
    </Container>
  );
};

export default TryHistory;
