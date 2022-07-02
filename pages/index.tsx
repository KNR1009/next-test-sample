import type { NextPage } from "next";
// components
import { SearchForm } from "../components/SearchForm";

const Home: NextPage = () => {
  const onSubmit = (value: string) => {
    console.log(value);
  };
  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
    </div>
  );
};

export default Home;
