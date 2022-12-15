import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("Pruebas en GiftItem", () => {
  
  const url =
    "https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=a8630c87ofyabdttjelw7rkl0nyvg50yexkje34mrwau5wns&amp;rid=giphy.gif&amp;ct=g";
  const title = "Hola soy el titulo";

  test("Testing GifGrid: Snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la imagen con el URL y el alt especificado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    /* expect(screen.getByRole('img').src).toBe(url);
    expect(screen.getByRole('img').alt).toBe(title) */
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('Debe mostrar el titulo en el componente', () => { 
    render( <GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy();
   })
});
