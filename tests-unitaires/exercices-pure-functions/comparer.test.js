import { expect, test } from "vitest";
import { comparer } from "./comparer";

test('comparer return Trop petit', () => {
  expect(comparer(1, 2)).toBe('Trop petit');
})
