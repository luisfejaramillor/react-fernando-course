import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components";
describe("Testing GifCard component", () => {
  const title = "Test title";
  const img = "https://one-punch.com/saitama.jpg";
  test("Testing sobre el snapshot", () => {
    const { container } = render(<GifCard title={title} img={img} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el url y alt indicado", () => {
    render(<GifCard title={title} img={img} />);
    const { alt, src } = screen.getByRole("img");
    expect(alt).toBe(title);
    expect(src).toBe(img);
  });

  test("should show title in the component", () => {
    render(<GifCard title={title} img={img} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
