"use client";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";

type Contribuicao = {
  _id: string;
  titulo: string;
  descricao: string;
  url: string;
  tipo: string;
  criadoEm?: string;
  autor: { nome: string };
};

export default function TimelinePage() {
  const [contribuicoes, setContribuicoes] = useState<Contribuicao[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/contribuicoes?sessao=timeline`)
      .then((res) => res.json())
      .then(setContribuicoes)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <Nav />
      <h1 className="text-2xl font-bold mb-4">🧭 Timeline Colaborativa</h1>
      <p className="mb-6 text-gray-700">
        Contribuições da comunidade para a construção da memória simbiótica viva de Sabinópolis.
      </p>

      {loading ? (
        <p>Carregando...</p>
      ) : contribuicoes.length === 0 ? (
        <p className="text-gray-600">Nenhuma contribuição ainda.</p>
      ) : (
        <div className="border-l-4 border-blue-600 pl-6 space-y-6">
          {contribuicoes.map((c) => (
            <div key={c._id} className="relative">
              <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-600 rounded-full" />
              <div className="ml-2">
                <p className="text-sm text-gray-500 mb-1">
                  {new Date(c.criadoEm || "").toLocaleString("pt-BR")}
                </p>
                <h2 className="font-semibold text-lg">{c.titulo}</h2>
                <p className="text-sm text-gray-700">{c.descricao}</p>
                <p className="text-sm text-gray-500">👤 {c.autor?.nome}</p>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    className="text-sm text-blue-500 underline mt-1 inline-block"
                  >
                    Ver mídia
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
