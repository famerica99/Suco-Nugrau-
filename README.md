# Suco Nugrau

Landing page do Suco Nugrau - Produção sob demanda de suco natural para lanchonetes, mercadinhos e eventos.

## Sobre o Projeto

O Suco Nugrau oferece sucos naturais personalizados para revenda, permitindo que empresas vendam suco com a identidade do seu negócio. Sem conservantes, com fruta de verdade.

## Tecnologias Utilizadas

Este projeto foi construído com:

- **Vite** - Build tool e dev server
- **React** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI
- **React Router** - Roteamento para React

## Como Executar Localmente

### Pré-requisitos

- Node.js (recomendado usar nvm para instalação)
- npm ou yarn

### Instalação

1. Clone o repositório:
```sh
git clone <URL_DO_REPOSITORIO>
cd Nugrau-page
```

2. Instale as dependências:
```sh
npm install
```

3. Inicie o servidor de desenvolvimento:
```sh
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou outra porta, conforme indicado no terminal).

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run build:dev` - Cria a build de desenvolvimento
- `npm run preview` - Pré-visualiza a build de produção
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes React
│   └── ui/         # Componentes de UI (shadcn/ui)
├── hooks/          # Custom hooks
├── lib/            # Utilitários e helpers
├── pages/          # Páginas da aplicação
└── main.tsx        # Ponto de entrada
```

## Licença

© 2025 Suco Nugrau. Todos os direitos reservados.
