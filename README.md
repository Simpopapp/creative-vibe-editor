# Creative Vibe Editor

Um editor visual imersivo para criação de aplicativos, com feedback sonoro e visual.

## Alterações Recentes

### Última atualização (TypeScript Fix)
- Corrigido o tipo do parâmetro `theme` no componente ThemeSwitcher
- Adicionado tipagem específica para os temas disponíveis
- Resolvido erro de build relacionado à tipagem do tema

## Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm, yarn ou bun

### Passo a Passo

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd creative-vibe-editor
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn
# ou
bun install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
bun dev
```

4. **Acesse o projeto**
- Abra seu navegador e acesse `http://localhost:5173`

### Comandos Úteis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente

## Estrutura do Projeto

```
src/
  ├── components/      # Componentes reutilizáveis
  ├── pages/          # Páginas da aplicação
  └── hooks/          # Hooks personalizados
```

## Temas Disponíveis
- Light (Claro)
- Dark (Escuro)
- Neon

## Troubleshooting

Se encontrar o erro "Theme type mismatch":
1. Verifique se está usando um dos temas disponíveis: "light", "dark" ou "neon"
2. Certifique-se de que o ThemeSwitcher está importando corretamente o tipo Theme