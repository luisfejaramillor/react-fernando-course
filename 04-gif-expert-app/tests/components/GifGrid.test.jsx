import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas sobre el componente GifGrid", () => {
  const category = "Peaky";
  test("Debe mostrar el elemento loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test("Debe de mostrar items cuando se cargan las imagenes del hook useFetchGifs", () => {

    const gifs = [
        {
            id: 'abc',
            title: 'Peaky',
            img: 'https://test.com'
        },
        {
            id: 'ddd',
            title: 'Blinders',
            img: 'https://test-test.com'
        },
    ]

    useFetchGifs.mockReturnValue({
        gifs: gifs,
        isLoading: true,
      });
      render(<GifGrid category={category} />);

      expect(screen.getAllByRole('img').length).toBe(2)
  });
});
