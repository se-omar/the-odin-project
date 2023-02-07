import { capitalize, reverse, calculator, caesarCipher  } from "./index";

test("first char of string is capital", () => {
  let s = "test";
  expect(capitalize(s)).toBe("Test");
});

test("given string is reversed", () => {
  let s = "omar";
  expect(reverse(s)).toBe("ramo");
});

test("calculator", () => {
  let a = 10, b = 5;
  expect(calculator.add(a, b)).toBe(15);
  expect(calculator.sub(a, b)).toBe(5);
  expect(calculator.mul(a, b)).toBe(50);
  expect(calculator.divide(a, b)).toBe(2);
});

test("caesarCipher", () => {
  let s = "abcdefghijklmnopqrstuvwxyz"
  expect(caesarCipher(s)).toBe("bcdefghijklmnopqrstuvwxyza")
})
