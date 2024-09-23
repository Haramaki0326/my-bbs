import CreateThreadForm from "../../components/CreateThreadForm";

export default function CreateThreadPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">新しいスレッドを作成</h1>
      <CreateThreadForm />
    </div>
  );
}
