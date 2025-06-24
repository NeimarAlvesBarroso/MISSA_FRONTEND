"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type Midia = {
  url: string;
  tipo: string;
  legenda: string;
  data?: string;
};

type Album = {
  _id: string;
  titulo: string;
  descricao: string;
  autor: { nome: string };
  midias: Midia[];
};

export default function AlbumPage() {
  const { id } = useParams() as { id: string };
  const [album, setAlbum] = useState<Album | null>(null);

  async function carregar() {
    try {
      const res = await fetch(`${BASE_URL}/albunsfamilia/${id}`);
      const data = await res.json();
      setAlbum(data);
    } catch (err) {
      console.error("Erro ao carregar álbum:", err);
    }
  }

  useEffect(() => {
    if (id) carregar();
  }, [id]);

  if (!album) return <p className="p-6">Carregando álbum...</p>;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Nav />
      <h1 className="text-2xl font-bold mb-1">{album.titulo}</h1>
      <p className="text-gray-700 mb-1">{album.descricao}</p>
      <p className="text-sm text-gray-500 mb-6">👤 {album.autor?.nome}</p>

      <Link
        href={`/acervos/familia/${id}/upload`}
        className="inline-block mb-6 bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded transition"
      >
        ➕ Adicionar nova mídia
      </Link>

      <div className="space-y-6 border-t pt-6">
        {album.midias?.map((m, i) => {
          const urlCompleta = m.url.startsWith("http") ? m.url : `${BASE_URL}${m.url}`;
          return (
            <div key={i} className="border p-4 rounded shadow bg-white">
              {m.url && m.tipo === "foto" && (
                <img src={urlCompleta} alt={m.legenda} className="w-full rounded mb-2" />
              )}
              {m.url && m.tipo === "vídeo" && (
                <video controls className="w-full rounded mb-2">
                  <source src={urlCompleta} />
                </video>
              )}
              {!m.url && (
                <p className="text-sm text-red-500">⚠️ Mídia sem URL válida.</p>
              )}
              <p className="text-sm text-gray-700">{m.legenda}</p>
              <p className="text-xs text-gray-500">
                {m.data ? new Date(m.data).toLocaleDateString() : ""}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
