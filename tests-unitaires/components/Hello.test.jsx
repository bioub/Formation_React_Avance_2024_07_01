// import { act } from "react";
// import { createRoot } from "react-dom/client";
// import { expect, test } from "vitest";
// import Hello from "./Hello";

// test("Hello renders", () => {
//   const rootEl = document.createElement("div");

//   act(() => {
//     createRoot(rootEl).render(<Hello name="Romain" />);
//   });

//   expect(rootEl.innerText).toContain("Hello Romain");
// });

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Hello from "./Hello";

test("Hello renders", () => {
  render(<Hello name="Romain" />);

  expect(screen.getByText("Hello Romain")).toBeInTheDocument();
});
