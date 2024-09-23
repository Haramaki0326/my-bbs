"use client";

import { useEffect, useState } from "react";
import { Post } from "@prisma/client"; // Prismaが生成した型をインポート
import { fetchPosts } from "../app/api/api"; // APIの関数をインポート

export default function PostList({ threadId }: { threadId: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        setIsLoading(true);
        const fetchedPosts = await fetchPosts(threadId);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("投稿の取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, [threadId]);

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="border p-4 rounded-lg">
          {/* <p className="font-semibold">{post.user.username}</p> */}
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
}
