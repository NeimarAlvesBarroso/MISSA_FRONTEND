"use client";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function RedesPage() {
  return (
    <main className="p-6">
      <Nav />
      <h1 className="text-2xl font-bold mb-4">🌐 Repositórios Ressonantes</h1>

      <p className="mb-6 text-gray-700 max-w-xl">
        Nossas redes sociais são os repositórios vivos e primordiais de memória do Museu da Imagem e do Som de Sabinópolis. 
        Elas funcionam como campos vetoriais contínuos onde circulam imagens, vídeos e histórias da comunidade.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {/* MIS SABINÓPOLIS - Facebook */}
        <a
          href="https://www.facebook.com/mis.sabinopolis?locale=pt_BR"
          target="_blank"
          className="flex items-center border rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 bg-white space-x-4"
        >
          <img
            src="/facebook-mis.png"
            alt="MIS Sabinópolis no Facebook"
            className="w-16 h-16 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-xl font-semibold mb-1">📘 Facebook – MIS Sabinópolis</h2>
            <p className="text-sm text-gray-600">
              Álbum vivo de fotografias comunitárias, registros de eventos e paisagens da memória sabinopolina.
            </p>
          </div>
        </a>

        {/* MIS SABINÓPOLIS - YouTube */}
        <a
          href="https://www.youtube.com/channel/UC52gEsTAwkLZGjL0Ce-RTnQ"
          target="_blank"
          className="flex items-center border rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 bg-white space-x-4"
        >
          <img
            src="/youtube-mis.png"
            alt="MIS Sabinópolis no YouTube"
            className="w-16 h-16 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-xl font-semibold mb-1">📺 YouTube – MIS Sabinópolis</h2>
            <p className="text-sm text-gray-600">
              Repositório audiovisual com depoimentos, festas, entrevistas e vídeos históricos do território.
            </p>
          </div>
        </a>
      </div>

      {/* ✅ Botão para contribuição simbólica */}
      <div className="text-center">
        <Link
          href="/contribuir"
          className="inline-block bg-pink-100 hover:bg-pink-200 text-pink-800 font-semibold px-6 py-3 rounded-full shadow transition"
        >
          📤 Contribuir com nova mídia para o acervo
        </Link>
      </div>
    </main>
  );
}
