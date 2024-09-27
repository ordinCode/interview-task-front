import { BallResult } from "../domain/types/BallResult";

export default class DisplayBallResultUtil {
  static displayBallResult(ballResult: BallResult[]): string {
    const strikeCount = ballResult.filter((v) => v == "STRIKE").length;
    const ballCount = ballResult.filter((v) => v == "BALL").length;
    if (strikeCount === 0 && ballCount === 0) {
      return "낫싱";
    }

    const displayStrike = strikeCount > 0 ? `${strikeCount}스트라이크` : "";
    const displayBall = ballCount > 0 ? `${ballCount}볼` : "";
    return [displayStrike, displayBall].filter((v) => !!v).join(" ");
  }
}
