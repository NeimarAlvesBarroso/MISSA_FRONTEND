"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mb-6 flex flex-wrap gap-4 justify-center text-sm text-blue-800 dark:text-blue-300">
      <Link href="/" className="hover:underline">🏠 Início</Link>
      <Link href="/acervos" className="hover:underline">📂 Acervos</Link>
      <Link href="/usuarios" className="hover:underline">👥 Usuários</Link>
      <Link href="/midias" className="hover:underline">🎞️ Mídias</Link>
      <Link href="/relacoes" className="hover:underline">🔗 Relações</Link>
      <Link href="/vetor" className="hover:underline">🧭 Vetor</Link>
      <Link href="/contribuir" className="hover:underline">📤 Contribuir</Link>
    </nav>
  );
}
