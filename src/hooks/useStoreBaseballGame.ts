import { useZustandBaseBall } from "../store/zustand";

export function useStoreBaseballGame() {
  const { state, update } = useZustandBaseBall();

  function addTry(inputValue: string) {
    update(state.addTryBall(inputValue));
  }

  function restart() {
    update(state.restartGame());
  }

  return {
    baseballGameState: state,
    addTry: addTry,
    restart: restart,
  };
}
