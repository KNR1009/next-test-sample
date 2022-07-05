import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "../components/SearchForm";

describe("input form onChange event", () => {
  it("should trigger output function", () => {
    // propsで受け渡す用のモック関数をテスト用に作成
    const onSubmit = jest.fn();
    render(<SearchForm onSubmit={onSubmit} />);
    const inputValue = screen.getByRole("textbox");
    userEvent.type(inputValue, "test");
    userEvent.click(screen.getByRole("button"));
    expect(onSubmit).toBeCalled;
  });
});
