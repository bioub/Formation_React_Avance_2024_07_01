import { expect, test } from "vitest";
import { pairs } from "./pairs";

test('pairs function returns even values', () => {
  expect(pairs([1, 2, 3, 4])).toStrictEqual([2, 4]);
});
