"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Nav from "@/components/Nav";

export default function MidiaUploadPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const sessaoParam = params?.sessao as string;

  const [file, setFile] = useState<File | null>(null);
  const [legenda, setLegenda] = useState("");
  const [tipo, setTipo] = useState("foto");
  const [sessao, setSessao] = useState(sessaoParam || "familia");
  const [autor, setAutor] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    if (sessaoParam) setSessao(sessaoParam);
  }, [sessaoParam]);

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) {
      setMensagem("❌ Escolha um arquivo antes de enviar.");
      return;
    }

    const formData = new FormData();
    formData.append("midia", file);
    formData.append("legenda", legenda);
    formData.append("tipo", tipo);
    formData.append("autor", autor);
    formData.append("sessao", sessao);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uploads/${id}`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMensagem("✅ Mídia enviada com sucesso!");
        setFile(null);
        setLegenda("");
        setAutor("");
        setTipo("foto");
        router.push(`/acervos/${sessao}/${id}`);
      } else {
        setMensagem(`❌ Erro: ${data.erro}`);
      }
    } catch (err) {
      console.error(err);
      setMensagem("❌ Erro na conexão com o servidor.");
    }
  }

  async function removerArquivo() {
    setFile(null);
    setLegenda("");
    setMensagem("🗑️ Arquivo removido.");
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <Nav />
      <h1 className="text-2xl font-bold mb-4">📤 Adicionar Mídia ao Álbum</h1>

      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
          className="w-full border p-2 rounded"
        />

        {file && (
          <button
            type="button"
            onClick={removerArquivo}
            className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
          >
            Remover arquivo selecionado
          </button>
        )}

        <input
          placeholder="Legenda"
          value={legenda}
          onChange={(e) => setLegenda(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="foto">📷 Foto</option>
          <option value="vídeo">🎥 Vídeo</option>
        </select>

        <select
          value={sessao}
          onChange={(e) => setSessao(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="familia">📷 Álbuns de Família</option>
          <option value="institucional">🏛️ Acervo Institucional</option>
          <option value="fotos-antigas">🖼️ Fotos Antigas</option>
        </select>

        <input
          placeholder="Seu nome (opcional)"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>

        {mensagem && <p className="mt-4 font-medium text-green-700">{mensagem}</p>}
      </form>
    </main>
  );
}
