import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el componente AddCategory", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    // screen.debug();

    // 1) Guardamos el elemento input en una variable
    const input = screen.getByRole("textbox"); // textbox = input

    // 2) Disparamos un evento de input sobre ese elemento, dandole un valor
    fireEvent.input(input, { target: { value: "Saitama" } });

    // 3) evaluamos si ese valor efectivamente fue receptado
    expect(input.value).toBe("Saitama");
  });

  test("Debe llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn(); // Funcion ficticia

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1); // para corroborar que la funcion se llame X cantidad de veces
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe llamar onNewCategory si el input esta vacio', () => { 
    const onNewCategory = jest.fn(); 
    render(<AddCategory onNewCategory={onNewCategory} />);

    const inputValue = "";
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    screen.debug()
    //expect(onNewCategory).toHaveBeenCalledTimes(0); 
    expect(onNewCategory).not.toHaveBeenCalled(); 
   })
});
