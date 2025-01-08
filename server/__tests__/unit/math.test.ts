// tests/unit/math.test.ts
import { test, expect } from "@jest/globals";

function add(a: number, b: number): number {
  return a + b;
}


test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});
