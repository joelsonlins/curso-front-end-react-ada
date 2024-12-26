import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter > Unit tests", () => {
  it("should render Counter component correctly", () => {
    render(<Counter />);

    const counterValueElement = screen.getByRole("heading", { level: 1 }); // <h1>0</h1>
    const increaseButtonElement = screen.getByRole("button", {
      name: "Aumentar",
    });
    const decreaseButtonElement = screen.getByRole("button", {
      name: "Diminuir",
    });

    expect(counterValueElement).toHaveTextContent("0");
    expect(increaseButtonElement).toBeInTheDocument();
    expect(decreaseButtonElement).toBeInTheDocument();
  });
  it("should decrease counter value when increase button is clicked", () => {
    // renderizamos o componente Counter
    render(<Counter />);

    // Clicar no botão "Diminuir" para aumentar o valor do contador
    const decreaseButton = screen.getByRole("Button", { name: "Diminuir" });
    userEvent.click(decreaseButton);

    const counterValueElement = screen.getByAltText("-1", { exact: true });

    // Espero que o valor do contador seja 1
    expect(counterValueElement).toBeInTheDocument();
  });

  it("should increase counter value when increase button is clicked", () => {
    // renderizamos o componente Counter
    render(<Counter />);

    // Clicar no botão "Aumentar" para aumentar o valor do contador
    const increaseButton = screen.getByRole("Button", { name: "Aumentar" });
    userEvent.click(increaseButton);

    const counterValueElement = screen.getByAltText("1", { exact: true });

    // Espero que o valor do contador seja 1
    expect(counterValueElement).toBeInTheDocument();
  });
});
