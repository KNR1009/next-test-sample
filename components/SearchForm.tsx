import React, { useState } from "react";

type SearchFormProps = {
  onSubmit: (value: string) => void;
};

export const SearchForm: React.VFC<SearchFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>();
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (value) {
      onSubmit(value);
    } else {
      console.log("入力フォームが空です");
    }
  };
  return (
    <div>
      <input type="text" onChange={onchange} value={value} />
      <button onClick={onClick}>検索</button>
    </div>
  );
};
