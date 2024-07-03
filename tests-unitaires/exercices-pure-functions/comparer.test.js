import { expect, test } from "vitest";
import { comparer } from "./comparer";

test('comparer return Trop petit', () => {
  expect(comparer(1, 2)).toBe('Trop petit');
})

test('comparer return Trop grand', () => {
  expect(comparer(2, 1)).toBe('Trop grand');
})

test('comparer return Gagné', () => {
  expect(comparer(1, 1)).toBe('Gagné');
})
