"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";

type Album = {
  _id: string;
  titulo: string;
  descricao: string;
  criadoEm: string;
  autor: { nome: string };
};

export default function AlbunsFamiliaPage() {
  const [albuns, setAlbuns] = useState<Album[]>([]);
  const [form, setForm] = useState({ titulo: "", descricao: "", autor: "" });
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/albunsfamilia`)
      .then((res) => res.json())
      .then(setAlbuns);
  }, []);

  async function criarAlbum(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/albunsfamilia`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        autor: { nome: form.autor },
      }),
    });

    const data = await res.json();
    if (res.ok) {
      setAlbuns([data, ...albuns]);
      setMensagem("✅ Álbum criado com sucesso!");
      setForm({ titulo: "", descricao: "", autor: "" });
    } else {
      setMensagem("❌ Erro ao criar álbum.");
    }
  }

  async function excluirAlbum(id: string) {
    if (!confirm("Tem certeza que deseja excluir este álbum?")) return;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/albunsfamilia/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setAlbuns(albuns.filter((a) => a._id !== id));
      setMensagem("🗑️ Álbum excluído com sucesso.");
    } else {
      setMensagem("❌ Erro ao excluir álbum.");
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Nav />
      <h1 className="text-2xl font-bold mb-4">📷 Álbuns de Família</h1>
      <p className="text-gray-600 mb-6">Crie e compartilhe memórias da sua família e ancestrais.</p>

      {/* Formulário */}
      <form onSubmit={criarAlbum} className="space-y-4 mb-10">
        <input
          placeholder="Título do álbum"
          value={form.titulo}
          onChange={(e) => setForm({ ...form, titulo: e.target.value })}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Descrição"
          value={form.descricao}
          onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          placeholder="Seu nome"
          value={form.autor}
          onChange={(e) => setForm({ ...form, autor: e.target.value })}
          required
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Criar álbum
        </button>
      </form>

      {mensagem && <p className="text-green-600 mb-4">{mensagem}</p>}

      {/* Lista de álbuns com ações */}
      <div className="space-y-4">
        {albuns.map((a) => (
          <div key={a._id} className="border p-4 rounded shadow bg-white">
            <h2 className="text-lg font-bold">{a.titulo}</h2>
            <p className="text-sm text-gray-700">{a.descricao}</p>
            <p className="text-xs text-gray-500 mb-2">
              👤 {a.autor?.nome} — {new Date(a.criadoEm).toLocaleDateString()}
            </p>

            <div className="flex flex-wrap gap-2">
              <Link
                href={`/acervos/familia/${a._id}/upload`}
                className="bg-green-100 hover:bg-green-200 text-green-800 text-sm px-4 py-2 rounded transition"
              >
                ➕ Adicionar Foto/Vídeo
              </Link>
              <Link
                href={`/acervos/familia/${a._id}`}
                className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded"
              >
                📂 Ver álbum completo
              </Link>
              <button
                onClick={() => excluirAlbum(a._id)}
                className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded"
              >
                🗑️ Excluir álbum
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
