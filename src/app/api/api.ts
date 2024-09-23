import { Post } from "@prisma/client";

export async function fetchPosts(threadId: string): Promise<Post[]> {
  const response = await fetch(`/api/threads/${threadId}/posts`);
  if (!response.ok) {
    throw new Error("投稿の取得に失敗しました");
  }
  const data: Post[] = await response.json();
  return data;
}
