const { add, divide } = require("../app");

// ✅ Unit Tests
describe("Math Functions - Unit Tests", () => {
  test("adds two positive numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative and positive numbers", () => {
    expect(add(-2, 4)).toBe(2);
  });
});

// ✅ Integration Tests (simulate combined behavior)
describe("Math Functions - Integration Tests", () => {
  test("divides two numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
