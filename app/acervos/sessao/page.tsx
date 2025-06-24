"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Nav from "@/components/Nav";

type Contribuicao = {
  _id: string;
  titulo: string;
  descricao: string;
  url: string;
  tipo: string;
  autor: { nome: string };
  ano: number;
  local: string;
};

export default function SessaoPage() {
  const { sessao } = useParams();
  const [contribuicoes, setContribuicoes] = useState<Contribuicao[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contribuicoes?sessao=${sessao}`);
        const data = await res.json();
        setContribuicoes(data);
      } catch (err) {
        console.error("Erro ao buscar contribuições:", err);
      } finally {
        setLoading(false);
      }
    }

    if (sessao) carregar();
  }, [sessao]);

  const nomeSessao = {
    "institucional": "🏛️ Acervos Institucionais",
    "fotos-antigas": "🖼️ Fotos Antigas",
    "familia": "📷 Álbuns de Família",
    "timeline": "🧭 Timeline Colaborativa"
  }[sessao as string] || "Acervo";

  return (
    <main className="max-w-4xl mx-auto p-6">
      <Nav />
      <h1 className="text-2xl font-bold mb-6">{nomeSessao}</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : contribuicoes.length === 0 ? (
        <p className="text-gray-500">Nenhuma contribuição encontrada nesta sessão.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {contribuicoes.map((c) => (
            <div key={c._id} className="border rounded p-4 shadow bg-white">
              <h2 className="text-lg font-semibold">{c.titulo}</h2>
              <p className="text-sm text-gray-600">{c.descricao}</p>
              <p className="text-sm mt-2 text-blue-700">📍 {c.local} – {c.ano}</p>
              <p className="text-sm text-gray-500">👤 {c.autor?.nome}</p>
              {c.url && (
                <a href={c.url} target="_blank" className="text-sm text-blue-500 underline mt-2 inline-block">
                  Ver mídia
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
