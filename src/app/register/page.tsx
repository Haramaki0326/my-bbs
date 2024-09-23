import RegisterForm from "../../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ユーザー登録</h1>
      <RegisterForm />
    </div>
  );
}
