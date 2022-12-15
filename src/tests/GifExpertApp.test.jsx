import { render, screen, fireEvent } from "@testing-library/react";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  test("Debe coincidir con el snapshot", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("Debe cambiar el valor del input", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });

  test("Debe mostrar la categoria agregada", () => {
    const inputValue = "One Punch";

    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.getByText(inputValue));
  });

  test("No deberia agregarse una categoria mas de una vez", () => {
    const inputValue = "One Punch";

    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.getAllByText(inputValue).length).toBe(1);
  });
});
