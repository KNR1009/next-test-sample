import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import SearchForm from "../pages/index";

describe("input form onChange event", () => {
  it("入力テスト", () => {
    render(<SearchForm />);
    const inputValue = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.type(inputValue, "test");
    expect(inputValue.value).toBe("test");
  });

  it("ボタンクリック", () => {
    const outputConsole = jest.fn();
    render(<SearchForm outputConsole={outputConsole} />);
    const inputValue = screen.getByRole("buttons");
    userEvent.type(inputValue, "test");
  });
});
