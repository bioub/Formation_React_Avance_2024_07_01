import { expect, test } from "vitest";
import { hello } from "./hello";

test('hello function returns Hello followed by name',( ) => {
  expect(hello('Romain')).toBe('Hello Romain !');
});
