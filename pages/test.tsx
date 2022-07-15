import type { NextPage } from "next";
import { useEffect } from "react";
// components

const Test: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log("3秒経過");
    }, 3000);

    return () => {
      console.log("アンマウントされました");
    };
  }, []);
  return <p>テスト</p>;
};

export default Test;
