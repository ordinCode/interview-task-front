import { BallResult } from "./types/BallResult";

export default class Numbers {
  numbers: number[];

  constructor(balls: string) {
    const numbers = balls.split("").map((ball) => {
      const num = parseInt(ball);
      if (isNaN(num)) {
        throw new Error("모든 값은 숫자여야 합니다.");
      }
      if (num < 1 || num > 9) {
        throw new Error("1부터 9까지의 숫자만 입력해주세요.");
      }
      return num;
    });
    if (new Set(numbers).size != 3) {
      throw new Error("중복되지 않는 세자리 숫자를 입력해주세요.");
    }
    this.numbers = numbers;
  }

  displayNumbers(): string {
    return this.numbers.join("");
  }

  isEqual(target: Numbers): boolean {
    return this.numbers.every(
      (number, index) => number === target.numbers[index],
    );
  }

  compare(answer: number[]): BallResult[] {
    const result: BallResult[] = [];
    this.numbers.forEach((ball, index) => {
      if (ball === answer[index]) {
        result.push("STRIKE");
      } else if (answer.includes(ball)) {
        result.push("BALL");
      }
    });
    return result;
  }
}
