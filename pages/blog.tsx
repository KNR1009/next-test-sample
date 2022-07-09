import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

// 取得するブログ記事の型
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BlogPage: NextPage = () => {
  // 取得したブログデータを格納するstate
  const [postDates, setPostDates] = useState<Post[]>([]);
  // 外部APIからブログデータを取得
  const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };
  // レンダリング時にAPIコール関数を実行し取得したデータでstateを更新
  useEffect(() => {
    try {
      const getPostDates = async () => {
        const result = await getPosts();
        setPostDates(result);
      };
      getPostDates();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {postDates.length === 0 ? (
        <p>ローディング中</p>
      ) : (
        <>
          {postDates.map((i) => (
            <p key={i.id}>
              {i.id}: {i.body}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default BlogPage;
