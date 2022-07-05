import { getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Cards } from "../components/Cards";
import { userInfo } from "os";

describe("cards component props pass test", () => {
  it("Testing for the presence of array elements", () => {
    // Cardsコンポーネントに渡すダミーデータ
    const dummyUserInfos = [
      { id: 1, name: "Tom" },
      {
        id: 2,
        name: "Mary",
      },
      {
        id: 3,
        name: "Bob",
      },
    ];
    render(<Cards userInfos={dummyUserInfos} />);
    const userInfos = screen
      .getAllByRole("listitem")
      .map((item) => item.textContent);
    const dummyItems = dummyUserInfos.map(
      (item) => `id:${item.id} name:${item.name}`
    );
    expect(userInfos).toEqual(dummyItems);
  });
});
