import isValidPurchase from "./mocking";

describe("purchase module tests", () => {
  test("purchase only within business time 9-5", () => {
    const date1 = new Date(2000, 1, 1, 10);
    const date2 = new Date(2000, 1, 1, 19);
    expect(isValidPurchase(date1)).toEqual({ message: "Success" });
    expect(isValidPurchase(date2)).toEqual({ message: "Error" });
  });
});
