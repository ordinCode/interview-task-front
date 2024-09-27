import { atom } from "recoil";
import BaseBallGame from "../domain/BaseBallGame";

export const baseBallGameState = atom<BaseBallGame>({
  key: "baseBallGameState",
  default: new BaseBallGame(),
});
