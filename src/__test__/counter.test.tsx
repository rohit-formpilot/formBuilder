import Counter from "../components/counter/counter";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Counter", () => {
  test("Renders correctly", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /decrement/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /increment/i })).toBeInTheDocument();
  });

  test("increments and decrements the counter on button click", async () => {
    render(<Counter />);
    const user = userEvent.setup();

    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });

    await user.click(incrementBtn);
    expect(screen.getByText("1")).toBeInTheDocument();
    await user.click(decrementBtn);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("hover effect applies correct class on + and - buttons", async () => {
    render(<Counter />);
    const user = userEvent.setup();

    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });


    await user.hover(incrementBtn);
    expect(incrementBtn.className).toMatch(/buttonActive/);
    await user.unhover(incrementBtn);
    expect(incrementBtn.className).not.toMatch(/buttonActive/);

    await user.hover(decrementBtn);
    expect(decrementBtn.className).toMatch(/buttonActive/);
    await user.unhover(decrementBtn);
    expect(decrementBtn.className).not.toMatch(/buttonActive/);
  });

  test("element are focus in the right order", async () =>{
    const user = userEvent.setup();
    render(<Counter/>)
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });

    await user.tab()
    expect(decrementBtn).toHaveFocus();
    
    await user.tab()
    expect(incrementBtn).toHaveFocus();



  })
});