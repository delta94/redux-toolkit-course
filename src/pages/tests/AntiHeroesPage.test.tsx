import { render, screen } from "test-utils/testing-library-utils";
import AntiHeroesPage from "../AntiHeroesPage";

describe("Anti Heroes Page", () => {
  test("AntiHeroesPage's title is visible", () => {
    render(<AntiHeroesPage />);

    const title = screen.getByRole("heading", { name: "Anti HeroesPage" });

    expect(title).toBeInTheDocument();
  });

  test("Anti heroes loading", async () => {
    render(<AntiHeroesPage />);

    const loading = screen.getByRole("heading", {
      name: "Loading.. Please wait..",
    });

    expect(loading).toHaveTextContent("Loading.. Please wait..");
  });

  test("Mark Buttons are visible", async () => {
    render(<AntiHeroesPage />);

    const markButtons = screen.getByRole("button", { name: "Save Character" });
    expect(markButtons).toBeInTheDocument();
  });
});
