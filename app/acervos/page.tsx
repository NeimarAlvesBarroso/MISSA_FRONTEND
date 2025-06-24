"use client";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function AcervosPage() {
  return (
    <main className="p-6">
      <Nav />
      <h1 className="text-2xl font-bold mb-6">📂 Acervo Cultural Vetorial</h1>

      {/* Sessões simbióticas vetoriais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <Link href="/acervos/institucional" className="block border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
          <h2 className="text-xl font-semibold mb-1">🏛️ Acervos Institucionais</h2>
          <p className="text-sm text-gray-600">Documentos e registros formais da história local.</p>
        </Link>
        <Link href="/acervos/fotos-antigas" className="block border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
          <h2 className="text-xl font-semibold mb-1">🖼️ Fotos Antigas</h2>
          <p className="text-sm text-gray-600">Imagens raras de famílias, eventos e paisagens.</p>
        </Link>
        <Link href="/acervos/familia" className="block border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
          <h2 className="text-xl font-semibold mb-1">📷 Álbuns de Família</h2>
          <p className="text-sm text-gray-600">Contribuições pessoais que formam a memória viva.</p>
        </Link>
        <Link href="/acervos/timeline" className="block border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
          <h2 className="text-xl font-semibold mb-1">🧭 Timeline Colaborativa</h2>
          <p className="text-sm text-gray-600">Linha do tempo construída pela comunidade.</p>
        </Link>
      </div>

      {/* Botão para registros oficiais */}
      <div className="text-center mt-10">
        <Link
          href="/acervos/registros"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-800 transition"
        >
          📜 Acervo Neimar Alves Barroso
        </Link>
      </div>
    </main>
  );
}
