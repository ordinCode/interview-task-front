import Numbers from "./Numbers";

describe("Numbers", () => {
  it("생성자로 받은 문자열을 숫자 배열로 변환한다.", () => {
    const tryBall = new Numbers("123");

    expect(tryBall.numbers).toEqual([1, 2, 3]);
  });

  it("[예외] TryBall 초기화시 balls는 세자리숫자여야한다", () => {
    expect(() => new Numbers("12")).toThrow();
    expect(() => new Numbers("1234")).toThrow();
  });

  it("[예외] 중복된 값이 오면 예외 발생한다", () => {
    expect(() => new Numbers("112")).toThrow();
  });

  it("[예외] 숫자가 아닌 값이 들어오면 예외 발생한다", () => {
    expect(() => new Numbers("1a2")).toThrow();
  });
});
