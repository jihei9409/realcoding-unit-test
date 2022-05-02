import Calculator from "../js/calculator/Calculator";

describe("사직연산 나눗셈 테스트.", () => {
  test("100을 5로 나누면 20이다.", () => {
    expect(Calculator.divide(100, 5)).toEqual(20);
  });
});