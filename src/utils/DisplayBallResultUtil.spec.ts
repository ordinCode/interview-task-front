import DisplayBallResultUtil from "./DisplayBallResultUtil";

describe("DisplayBallResultUtil", () => {
  it("2스트라이크 1볼", () => {
    const result = DisplayBallResultUtil.displayBallResult([
      "STRIKE",
      "BALL",
      "STRIKE",
    ]);

    expect(result).toEqual("2스트라이크 1볼");
  });

  it("낫싱", () => {
    const result = DisplayBallResultUtil.displayBallResult([]);
    expect(result).toEqual("낫싱");
  });

  it("1스트라이크", () => {
    const result = DisplayBallResultUtil.displayBallResult(["STRIKE"]);
    expect(result).toEqual("1스트라이크");
  });

  it("1볼", () => {
    const result = DisplayBallResultUtil.displayBallResult(["BALL"]);
    expect(result).toEqual("1볼");
  });
});
