"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Thread = {
  id: string;
  title: string;
  _count: {
    posts: number;
  };
};

export default function ThreadList() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const fetchThreads = async () => {
      const response = await fetch("/api/threads");
      if (response.ok) {
        const data = await response.json();
        setThreads(data);
      }
    };

    fetchThreads();
  }, []);

  return (
    <ul className="space-y-4">
      {threads.map((thread) => (
        <li key={thread.id} className="border p-4 rounded-lg">
          <Link
            href={`/threads/${thread.id}`}
            className="text-blue-600 hover:underline"
          >
            {thread.title}
          </Link>
          <span className="ml-2 text-gray-500">
            ({thread._count.posts}件の投稿)
          </span>
        </li>
      ))}
    </ul>
  );
}
