"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type PostFormProps = {
  threadId: string;
  userId: number;
};

export default function PostForm({ threadId, userId }: PostFormProps) {
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/threads/${threadId}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, userId }),
      });

      if (response.ok) {
        setContent("");
        window.location.reload();
      } else {
        console.error("投稿の保存に失敗しました");
      }
    } catch (error) {
      console.error("エラー:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded-lg"
        rows={4}
        placeholder="投稿内容を入力してください"
        required
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        投稿する
      </button>
    </form>
  );
}
