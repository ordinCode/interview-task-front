import React, { useState } from "react";
import styled from "@emotion/styled";
import { useStoreBaseballGame } from "../../hooks/useStoreBaseballGame";

const Container = styled.div``;

interface Props {}

const TryBallInput = ({}: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { baseballGameState, addTry } = useStoreBaseballGame();

  const isEnd = baseballGameState.isEnd();

  function submit() {
    try {
      addTry(inputValue);
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
