'use client';

import Logo from "@/components/Logo";
import { useUserStore } from "@/stores/userStrore";

export default function Footer() {

  const { users } = useUserStore();

  return (
    <footer className="bg-gray-900 text-white py-6 px-4 flex flex-col items-end gap-2">

      <Logo />

      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} - Todos os direitos reservados
      </p>

      <p className="text-sm text-gray-300">
        Quantidade de usuários: {users.length}
      </p>

    </footer>
  );
}