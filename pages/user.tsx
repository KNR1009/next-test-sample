import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

// 取得するブログ記事の型
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const UserPage: NextPage = () => {
  // 取得したブログデータを格納するstate
  const [user, setUser] = useState<User>();
  // 外部APIからブログデータを取得
  const getUser = async (): Promise<User> => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    // 必要な情報だけ抽出する

    return {
      id: response.data.id,
      name: response.data.name,
      username: response.data.username,
      email: response.data.email,
    };
  };
  // レンダリング時にAPIコール関数を実行し取得したデータでstateを更新
  useEffect(() => {
    try {
      const getUserDate = async () => {
        const result = await getUser();
        setUser(result);
      };
      getUserDate();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {/* {!postDate ? (
        <p>ローディング中</p>
      ) : (
        <p>
          記事ID{postDate.id}:{postDate.title}
        </p>
      )} */}
    </div>
  );
};

export default UserPage;
