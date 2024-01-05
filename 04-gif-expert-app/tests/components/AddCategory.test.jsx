import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Testing addCategory component", () => {
  const inputValue = "Peaky";

  test("Debe de cambiar el valor de la caja de texto", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test("Debe llamar onNewCategory si el input tiene un valor", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe llamarse onNewCategory si el inputValue está vacío", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled()
  });
});
