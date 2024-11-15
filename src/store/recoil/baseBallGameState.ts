import { atom } from "recoil";
import BaseBallGame from "../../domain/BaseBallGame";

export const baseBallGameRecoilState = atom<BaseBallGame>({
  key: "baseBallGameState",
  default: new BaseBallGame(),
});
