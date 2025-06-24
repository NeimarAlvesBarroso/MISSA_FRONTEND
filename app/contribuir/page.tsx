"use client";
import { useState } from "react";
import Nav from "@/components/Nav"; // ✅ import do menu de navegação

export default function ContribuirPage() {
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const body = {
      titulo: formData.get("titulo"),
      descricao: formData.get("descricao"),
      tipo: formData.get("tipo"),
      url: formData.get("url"),
      tags: (formData.get("tags") as string).split(",").map(tag => tag.trim()),
      ano: Number(formData.get("ano")),
      local: formData.get("local"),
      sessao: formData.get("sessao"),
      vetor: {
        camada: formData.get("camada"),
        intencao: formData.get("intencao"),
        reverberacao: formData.get("reverberacao"),
      },
      autor: {
        nome: formData.get("autorNome"),
        email: formData.get("autorEmail"),
        papel: formData.get("autorPapel"),
      }
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contribuicoes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    if (res.ok) {
      setMensagem("✅ Contribuição enviada com sucesso!");
    } else {
      setMensagem(`❌ Erro: ${data.erro}`);
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <Nav /> {/* ✅ Navegação vetorialética no topo */}

      <h1 className="text-2xl font-bold mb-4">🌟 Contribuir com a Memória Viva</h1>
      <p className="mb-6 text-gray-700">Preencha os campos abaixo para enviar uma mídia simbólica ao MIS Sabinópolis.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="titulo" placeholder="Título da mídia" required className="w-full border p-2 rounded" />
        <textarea name="descricao" placeholder="Descrição" required className="w-full border p-2 rounded" />

        <select name="tipo" required className="w-full border p-2 rounded">
          <option value="">Tipo de mídia</option>
          <option value="foto">Foto</option>
          <option value="vídeo">Vídeo</option>
          <option value="áudio">Áudio</option>
        </select>

        <input name="url" placeholder="URL da mídia (ex: YouTube, Drive, etc)" required className="w-full border p-2 rounded" />
        <input name="tags" placeholder="Tags separadas por vírgula" className="w-full border p-2 rounded" />
        <input name="ano" placeholder="Ano (ex: 2005)" type="number" className="w-full border p-2 rounded" />
        <input name="local" placeholder="Local" className="w-full border p-2 rounded" />

        {/* ✅ Sessão do acervo */}
        <div className="border-t pt-4">
          <p className="font-semibold mb-2">🗂️ Sessão do Acervo</p>
          <select name="sessao" required className="w-full border p-2 rounded">
            <option value="">Escolha uma sessão</option>
            <option value="institucional">🏛️ Acervos Institucionais</option>
            <option value="fotos-antigas">🖼️ Fotos Antigas</option>
            <option value="familia">📷 Álbuns de Família</option>
            <option value="timeline">🧭 Time Line Colaborativa</option>
          </select>
        </div>

        {/* Vetor simbiótico */}
        <div className="border-t pt-4">
          <p className="font-semibold mb-2">🧬 Vetor simbiótico</p>
          <input name="camada" placeholder="Camada (ex: acervo-imaterial)" className="w-full border p-2 rounded" />
          <input name="intencao" placeholder="Intenção (ex: homenagem, denúncia)" className="w-full border p-2 rounded" />
          <input name="reverberacao" placeholder="Reverberação (ex: identidade local)" className="w-full border p-2 rounded" />
        </div>

        {/* Autor */}
        <div className="border-t pt-4">
          <p className="font-semibold mb-2">🧍 Autor da contribuição</p>
          <input name="autorNome" placeholder="Seu nome" required className="w-full border p-2 rounded" />
          <input name="autorEmail" placeholder="Seu email" className="w-full border p-2 rounded" />
          <input name="autorPapel" placeholder="Seu papel (ex: morador, professor)" className="w-full border p-2 rounded" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Enviar contribuição
        </button>
      </form>

      {mensagem && <p className="mt-4 font-semibold text-green-700">{mensagem}</p>}
    </main>
  );
}
