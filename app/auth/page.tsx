import { Suspense } from "react";
import AuthClient from "./AuthClient";

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Загрузка…</div>}>
      <AuthClient />
    </Suspense>
  );
}