const ApiInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Informações da API</h1>
      <p className="mb-2"><strong>Nome da API:</strong> Rick and Morty API</p>
      <p className="mb-2">
        <strong>Documentação:</strong> 
        <a href="https://rickandmortyapi.com/documentation" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Rick and Morty API Docs
        </a>
      </p>
      <p className="mb-2"><strong>URL base:</strong> https://rickandmortyapi.com/api</p>
      <p className="mb-2"><strong>Endpoint:</strong> /character</p>
      <p className="mb-2"><strong>Atributos recebidos:</strong> id, name, status, species, gender, image</p>
      <p>
        <strong>Descrição:</strong> Esta API fornece informações sobre os personagens, episódios e locais do universo de Rick and Morty.
      </p>
    </div>
  );
};

export default ApiInfo;