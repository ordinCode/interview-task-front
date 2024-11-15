import React from "react";
import styled from "@emotion/styled";
import { useStoreBaseballGame } from "../../hooks/useStoreBaseballGame";

const Container = styled.div``;

interface Props {}

const GameRetryMessage = ({}: Props) => {
  const { baseballGameState, restart } = useStoreBaseballGame();

  if (!baseballGameState.isEnd()) return;

  return (
    <Container>
      <div>🎉 축하합니다! 정답을 맞추셨습니다! 🎉</div>
      <div>게임을 다시 시작하시겠습니까?</div>
      <button onClick={restart}>다시 시작</button>
    </Container>
  );
};

export default GameRetryMessage;
