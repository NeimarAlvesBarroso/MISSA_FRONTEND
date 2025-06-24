"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function EntradaPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      <motion.div
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Título vetorial com MIS estilizado */}
        <div className="mb-6">
          <h1 className="text-5xl font-extrabold tracking-tight leading-none">
            <span className="text-blue-600">M</span>
            <span className="text-green-600">I</span>
            <span className="text-red-600">S</span>
          </h1>
          <div className="text-4xl font-bold text-gray-900">SABINÓPOLIS</div>
        </div>

        <h2 className="text-2xl md:text-3xl mb-6">🎥 Museu da Imagem e do Som</h2>

        <p className="text-lg text-gray-600 mb-10">
          Espaço comunitário digital destinado a preservar, conectar e celebrar a memória cultural do povo de Sabinópolis.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/home")}
          className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-800 transition"
        >
          🏠 Entrar
        </motion.button>
      </motion.div>
    </main>
  );
}
