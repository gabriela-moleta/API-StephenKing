# Projeto Next.js API

Este projeto é uma aplicação Next.js que consome uma API pública e exibe informações de forma organizada e estilizada utilizando Tailwind CSS.

## Estrutura do Projeto

```
nextjs-api-project
├── src
│   ├── app
│   │   ├── page.jsx          # Página inicial do aplicativo
│   │   ├── layout.jsx        # Layout global do aplicativo
│   │   ├── not-found.jsx     # Página de erro para rotas não encontradas
│   │   ├── apiinfo
│   │   │   └── page.jsx      # Informações sobre a API escolhida
│   │   └── characters
│   │       ├── page.jsx      # Listagem de personagens
│   │       └── [id]
│   │           └── page.jsx  # Detalhes de um personagem específico
│   ├── components
│   │   ├── Card.jsx          # Componente para renderizar um card
│   │   ├── Header.jsx        # Componente para o cabeçalho
│   │   └── Footer.jsx        # Componente para o rodapé
│   ├── services
│   │   └── api.js            # Configuração para consumo da API
│   └── utils
│       └── constants.js      # Constantes utilizadas no projeto
├── tailwind.config.js        # Configuração do Tailwind CSS
├── jsconfig.json             # Configuração do JavaScript
├── package.json              # Dependências e scripts do projeto
└── README.md                 # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd nextjs-api-project
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Uso

- A página inicial exibe informações sobre a turma, escola e aluno, além de uma frase inspiradora.
- A página de listagem de personagens permite visualizar e acessar detalhes de cada personagem.
- A página de informações da API fornece detalhes sobre a API utilizada no projeto.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie um pull request com suas alterações.