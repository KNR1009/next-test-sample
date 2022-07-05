import type { NextPage } from "next";
// components
import { Cards } from "../components/Cards";

const userInfos = [
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

const Home: NextPage = () => {
  return <Cards userInfos={userInfos} />;
};

export default Home;
