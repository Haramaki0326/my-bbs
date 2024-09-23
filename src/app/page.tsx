import Link from "next/link";
import ThreadList from "../components/ThreadList";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">スレッド一覧</h1>
        <Link
          href="/create"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          新規スレッドを作成
        </Link>
      </div>
      <ThreadList />
    </main>
  );
}
