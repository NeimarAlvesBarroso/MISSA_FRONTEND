// app/acervos/page.tsx

export default async function AcervosPage() {
  const res = await fetch('http://localhost:3000/acervos', { cache: 'no-store' });
  const acervos = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Acervo Cultural</h1>
      {acervos.length === 0 ? (
        <p className="text-gray-600">Nenhum item no acervo.</p>
      ) : (
        <ul className="space-y-2">
          {acervos.map((item: any) => (
            <li key={item._id} className="border p-4 rounded shadow">
              <strong>{item.titulo}</strong> ({item.tipo})<br />
              <span className="text-sm text-gray-500">
                Local: {item.localidade} — {new Date(item.data).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
