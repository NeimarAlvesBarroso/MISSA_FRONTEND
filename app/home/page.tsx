"use client";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-800">
      <Nav />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">MIS SABINÓPOLIS</h1>
        <h1 className="text-4xl font-bold mb-4">🎥 Museu da Imagem e do Som</h1>
        <p className="text-lg text-gray-600 mb-10">
          Espaço comunitário digital destinado a preservar, conectar e celebrar a memória cultural do povo de Sabinópolis.
        </p>

        {/* 🔲 Navegação principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Link href="/acervos" className="bg-blue-100 hover:bg-blue-200 p-6 rounded shadow transition">
            <h2 className="text-xl font-semibold">📂 Acervos</h2>
            <p className="text-sm">Fotos, vídeos e documentos históricos.</p>
          </Link>

          <Link href="/usuarios" className="bg-green-100 hover:bg-green-200 p-6 rounded shadow transition">
            <h2 className="text-xl font-semibold">👥 Usuários</h2>
            <p className="text-sm">Participantes e papéis no projeto.</p>
          </Link>

                 <Link href="/relacoes" className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded shadow transition">
            <h2 className="text-xl font-semibold">🔗 Relações Vetorialéticas</h2>
            <p className="text-sm">Conexões simbióticas entre elementos culturais.</p>
          </Link>

               <Link href="/contribuir" className="bg-pink-100 hover:bg-pink-200 p-6 rounded shadow transition">
            <h2 className="text-xl font-semibold">📤 Contribuir</h2>
            <p className="text-sm">Envie sua mídia e participe da memória viva.</p>
          </Link>
        </div>

        {/* 🌐 Portais externos (rodapé) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t mt-10">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/mis.sabinopolis/"
            target="_blank"
            className="flex items-center bg-blue-100 hover:bg-blue-200 border rounded-xl p-4 shadow transition space-x-4"
          >
            <img
              src="/facebook-mis.png"
              alt="Facebook MIS Sabinópolis"
              className="w-14 h-14 rounded-full object-cover border"
            />
            <div className="text-left">
              <h2 className="text-xl font-semibold text-blue-900">📘 Facebook</h2>
              <p className="text-sm text-gray-700">Repositório vivo de fotos e histórias locais.</p>
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UC52gEsTAwkLZGjL0Ce-RTnQ"
            target="_blank"
            className="flex items-center bg-red-100 hover:bg-red-200 border rounded-xl p-4 shadow transition space-x-4"
          >
            <img
              src="/youtube-mis.png"
              alt="YouTube MIS Sabinópolis"
              className="w-14 h-14 rounded-full object-cover border"
            />
            <div className="text-left">
              <h2 className="text-xl font-semibold text-red-900">📺 YouTube</h2>
              <p className="text-sm text-gray-700">Vídeos, depoimentos e eventos históricos.</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
