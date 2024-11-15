import RandomBallCreator from "./RandomBallCreator";
import Numbers from "./Numbers";
import { NumberHistory } from "./types/NumberHistory";

type GameState = "PROGRESS" | "END";

export default class BaseBallGame {
  gameState: GameState;
  answer: Numbers;
  tryBalls: Numbers[];

  constructor(
    gameState: GameState = "PROGRESS",
    answer: Numbers = new Numbers(
      RandomBallCreator.createRandomBalls().join(""),
    ),
    tryBalls: Numbers[] = [],
  ) {
    this.gameState = gameState;
    this.answer = answer;
    this.tryBalls = tryBalls;
  }

  checkNumber(numbers: Numbers) {
    if (this.answer.isEqual(numbers)) {
      this.gameState = "END";
    }
  }

  findHistory(): NumberHistory[] {
    return this.tryBalls.map((numbers) => ({
      number: numbers.displayNumbers(),
      result: numbers.compare(this.answer.numbers),
    }));
  }

  isEnd(): boolean {
    return this.gameState === "END";
  }

  restartGame(): BaseBallGame {
    return new BaseBallGame();
  }

  addTryBall(input: string): BaseBallGame {
    const numbers1 = new Numbers(input);
    const baseBallGame = new BaseBallGame(this.gameState, this.answer, [
      ...this.tryBalls,
      numbers1,
    ]);
    baseBallGame.checkNumber(numbers1);
    return baseBallGame;
  }
}
