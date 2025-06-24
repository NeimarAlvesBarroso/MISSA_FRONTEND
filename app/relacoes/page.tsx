"use client";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";

type Relacao = {
  _id: string;
  usuarioId: string;
  midiaId: string;
  tipoRelacao: string;
};

export default function RelacoesPage() {
  const [relacoes, setRelacoes] = useState<Relacao[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/relacaovetorial`)
      .then((res) => res.json())
      .then(setRelacoes)
      .catch(console.error);
  }, []);

  return (
    <main className="p-6">
      <Nav />
      <h1 className="text-2xl font-bold mb-4">Relações Vetoriais</h1>
      <ul className="space-y-2">
        {relacoes.map((r) => (
          <li key={r._id} className="border p-4 rounded shadow">
            Usuário: {r.usuarioId} <br />
            Mídia: {r.midiaId} <br />
            Tipo: <strong>{r.tipoRelacao}</strong>
          </li>
        ))}
      </ul>
    </main>
  );
}
