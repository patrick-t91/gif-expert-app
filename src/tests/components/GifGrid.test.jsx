import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el componente Gifgrid", () => {
  const category = "One Punch";

  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar los items cuando se cargan las imagenes mediante el useFetchGifs", () => {
    const gifs = [
      { id: "ABC", title: "Saitama", url: "http://localhost/saitama.jpg" },
      {
        id: "123",
        title: "Dragon Ball",
        url: "http://localhost/dragonball.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
