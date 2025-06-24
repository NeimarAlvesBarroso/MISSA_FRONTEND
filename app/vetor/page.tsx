"use client";

import Link from "next/link";
import Nav from "@/components/Nav"; // ✅ Certifique-se de que o Nav.tsx está em app/components

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-800">
      <Nav /> {/* ✅ Navegação global visível em todas as páginas */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">MIS SABINÓPOLIS</h1>
        <h2 className="text-3xl font-semibold mb-4">🎥 Museu da Imagem e do Som</h2>
        <p className="text-lg text-gray-600 mb-10">
          Espaço comunitário digital destinado a preservar, conectar e celebrar a memória cultural do povo de Sabinópolis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/acervos"
            className="bg-blue-100 hover:bg-blue-200 p-6 rounded shadow transition"
          >
            <h2 className="text-xl font-semibold">📂 Acervos</h2>
            <p className="text-sm">Fotos, vídeos e documentos históricos.</p>
          </Link>

          <Link
            href="/usuarios"
            className="bg-green-100 hover:bg-green-200 p-6 rounded shadow transition"
          >
            <h2 className="text-xl font-semibold">👥 Usuários</h2>
            <p className="text-sm">Participantes e papéis no projeto.</p>
          </Link>

          <Link
            href="/midias"
            className="bg-purple-100 hover:bg-purple-200 p-6 rounded shadow transition"
          >
            <h2 className="text-xl font-semibold">🎞️ Mídias</h2>
            <p className="text-sm">Uploads e contribuições audiovisuais.</p>
          </Link>

          <Link
            href="/relacoes"
            className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded shadow transition"
          >
            <h2 className="text-xl font-semibold">🔗 Relações Vetorialéticas</h2>
            <p className="text-sm">Conexões simbióticas entre elementos culturais.</p>
          </Link>

          <Link
            href="/vetor"
            className="bg-rose-100 hover:bg-rose-200 p-6 rounded shadow transition"
          >
            <h2 className="text-xl font-semibold">🧬 Vetor</h2>
            <p className="text-sm">Representações vetoriais das dinâmicas simbióticas.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
