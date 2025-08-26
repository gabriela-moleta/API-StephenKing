import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold">Desenvolvimento de Sistemas- 2</h1>
      <h2 className="text-xl mt-2">Gabriela Moleta</h2>
      
      <Image 
        src="/avatar.png" 
        alt="Foto do aluno" 
        width={150} 
        height={150} 
        className="rounded-full mt-4"
      />

      <p className="mt-4 italic text-gray-700">
        "O sucesso é a soma de pequenos esforços repetidos dia após dia." – R. Collier
      </p>
    </main>
  );
}
