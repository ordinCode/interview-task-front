import React, { useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { baseBallGameState } from "../../state/baseBallGameState";

const Container = styled.div``;

interface Props {}

const TryBallInput = ({}: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [baseBallGame, setBaseBallGame] = useRecoilState(baseBallGameState);

  const isEnd = baseBallGame.isEnd();

  function submit() {
    try {
      const newBaseBallGame = baseBallGame.addTryBall(inputValue);
      setBaseBallGame(newBaseBallGame);
      setInputValue("");
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <Container>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            submit();
          }
        }}
        disabled={isEnd}
      />
      <button disabled={isEnd} onClick={submit}>
        확인
      </button>
    </Container>
  );
};

export default TryBallInput;
