import Link from 'next/link';

// Página not-found com Tailwind, seguindo a mesma identidade visual (rosa/branco)
export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-white text-[#111] px-6 py-10 flex items-center">
      <div className="w-full max-w-xl mx-auto text-center">
        <span className="inline-block px-3 py-1 rounded-full border border-[#ffc2e2] bg-white text-[#ff2e92] text-[11px] font-extrabold tracking-wider uppercase shadow">
          erro 404
        </span>

        <div className="mt-4 rounded-2xl border-2 border-[#ff2e92] bg-white p-8 shadow-[0_6px_18px_-4px_rgba(0,0,0,0.15)]">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#ff2e92] to-[#ff6fb5] bg-clip-text text-transparent">Página não encontrada</span>
            <span> 😢</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#333]">
            O conteúdo que você procura não existe ou foi movido. Verifique o endereço ou volte para uma das páginas abaixo.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="px-5 py-3 rounded-lg bg-[#ff2e92] hover:bg-[#d60067] text-white font-semibold shadow transition-colors"
            >
              Voltar à Home
            </Link>
            <Link
              href="/books"
              className="px-5 py-3 rounded-lg border-2 border-[#ff2e92] text-[#ff2e92] hover:bg-[#ff2e92] hover:text-white font-semibold shadow-sm transition-colors"
            >
              Ver lista de livros
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
