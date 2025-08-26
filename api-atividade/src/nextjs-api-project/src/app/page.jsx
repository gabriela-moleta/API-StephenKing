import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Nome da Turma</h1>
      <h2 className="text-2xl mb-2">Nome da Escola</h2>
      <h3 className="text-xl mb-4">Nome Completo do Aluno</h3>
      <Image
        src="/path/to/avatar.jpg" // Substitua pelo caminho da imagem do aluno
        alt="Avatar do Aluno"
        width={150}
        height={150}
        className="rounded-full mb-4"
      />
      <p className="text-lg italic text-center">
        "Uma frase inspiradora que ressoe com você."
      </p>
    </div>
  );
};

export default HomePage;