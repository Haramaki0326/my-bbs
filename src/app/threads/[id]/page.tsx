import PostList from "../../../components/PostList";
import PostForm from "../../../components/PostForm";

export default function ThreadPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">スレッド: {params.id}</h1>
      <PostList threadId={params.id} />
      <PostForm threadId={params.id} userId={1} />
    </div>
  );
}
