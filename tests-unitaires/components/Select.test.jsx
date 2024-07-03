
import { render, screen, fireEvent, act } from "@testing-library/react";
import { expect, test, vi, vitest } from "vitest";
import Select from "./Select";
import { createRef } from "react";

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


test('Select menu closes when we click on window', () => {
  render(<Select items={['Toto', 'Titi', 'Tata']} value="Titi" />);
  fireEvent.click(screen.getByText("Titi"));

  fireEvent.click(window);

  expect(screen.queryByText("Toto")).toBe(null);
  expect(screen.queryByText("Tata")).toBe(null);
})


test('Select opens menu when we call openMenu on a ref', async () => {
  const ref = createRef();
  render(<Select items={['Toto', 'Titi', 'Tata']} value="Titi" ref={ref} />);

  ref.current.openMenu();

  expect(await screen.findByText("Toto")).toBeInTheDocument();
  expect(await screen.findByText("Tata")).toBeInTheDocument();
});
