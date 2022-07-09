import { getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Cards, User } from "../components/Cards";

describe("cards component props pass test", () => {
  it("Testing for the presence of array elements", () => {
    // ダミーデータを作成する
    const dummyUserInfos: User[] = [
      {
        id: 1,
        name: "Tom",
      },
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
    // li要素の値を全件取得
    const listItems = screen.getAllByRole("listitem");
    // li要素で表示されている文言を取得し配列に格納
    const userInfos = listItems.map((listItem) => listItem.textContent);
    // li要素で表示されている文言の形式にダミーデータの要素を書き換える
  });
});

// describe("cards component props pass test", () => {
//   it("Testing for the presence of array elements", () => {
//     // Cardsコンポーネントに渡すダミーデータ
//     const dummyUserInfos = [
//       { id: 1, name: "Tom" },
//       {
//         id: 2,
//         name: "Mary",
//       },
//       {
//         id: 3,
//         name: "Bob",
//       },
//     ];
//     render(<Cards userInfos={dummyUserInfos} />);
//     const userInfos = screen
//       .getAllByRole("listitem")
//       .map((item) => item.textContent);
//     const dummyItems = dummyUserInfos.map(
//       (item) => `id:${item.id} name:${item.name}`
//     );
//     expect(userInfos).toEqual(dummyItems);
//   });
// });
