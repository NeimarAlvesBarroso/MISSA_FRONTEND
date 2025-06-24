"use client";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";

type Usuario = {
  _id: string;
  nome: string;
  papel: string;
  projeto: string;
};

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/usuarios`);
        const data = await res.json();
        setUsuarios(data);
      } catch (erro) {
        console.error("Erro ao buscar usuários:", erro);
      } finally {
        setCarregando(false);
      }
    }

    carregarUsuarios();
  }, []);

  return (
    <main className="p-6">
      <Nav />
      <h1 className="text-2xl font-bold mb-4">Usuários do Projeto MISSA</h1>
      {carregando ? (
        <p>Carregando...</p>
      ) : usuarios.length === 0 ? (
        <p className="text-gray-600">Nenhum usuário encontrado.</p>
      ) : (
        <ul className="space-y-2">
          {usuarios.map((user) => (
            <li key={user._id} className="border p-4 rounded shadow">
              <strong>{user.nome}</strong> – {user.papel}
              <br />
              <span className="text-sm text-gray-500">
                Projeto: {user.projeto}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
