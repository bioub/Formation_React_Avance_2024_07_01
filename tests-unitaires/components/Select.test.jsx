
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi, vitest } from "vitest";
import Select from "./Select";

test("Select renders", () => {
  render(<Select items={['Toto', 'Titi', 'Tata']} value="Titi" />);

  expect(screen.getByText("Titi")).toBeInTheDocument();
});


test("Select opens menu", () => {
  render(<Select items={['Toto', 'Titi', 'Tata']} value="Titi" />);

  fireEvent.click(screen.getByText("Titi"))

  expect(screen.getByText("Toto")).toBeInTheDocument();
  expect(screen.getByText("Tata")).toBeInTheDocument();
});


test("Select calls onValueChange", () => {
  // let calls = 0;
  // function handleValueChange(value) {
  //   calls++
  // }

  const handleValueChange = vi.fn();

  render(<Select items={['Toto', 'Titi', 'Tata']} value="Titi" onValueChange={handleValueChange} />);

  fireEvent.click(screen.getByText("Titi"))

  expect(screen.getByText("Toto")).toBeInTheDocument();
  expect(screen.getByText("Tata")).toBeInTheDocument();
  // expect(calls).toBe(1);

  fireEvent.click(screen.getByText("Toto"))

  expect(handleValueChange).toHaveBeenCalledOnce();
});
