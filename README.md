# Creative Vibe Editor

Um editor visual imersivo para criação de aplicativos, com feedback sonoro e visual.

## Configuração Inicial

### 1. Arquivos de Som
Para que os efeitos sonoros funcionem corretamente:

1. Crie uma pasta `sounds` dentro do diretório `public` se ela ainda não existir:
```bash
mkdir -p public/sounds
```

2. Adicione um arquivo de som chamado `select.mp3` na pasta `public/sounds`. Este arquivo será usado para feedback sonoro quando o usuário fizer seleções na interface.

> **Nota**: Você pode usar qualquer efeito sonoro curto (0.5-1s) no formato MP3. Recomendamos sons sutis e agradáveis para não cansar o usuário.

### 2. Dependências
O projeto utiliza a biblioteca `use-sound` para gerenciar efeitos sonoros. Esta dependência já está configurada no `package.json`, mas você precisa instalar as dependências do projeto:

```bash
npm install
# ou
yarn
# ou
bun install
```

## Funcionalidades

### Temas e Cores
- O sistema suporta três temas: Modern, Minimal e Neon
- Esquemas de cores disponíveis: Claro, Escuro e Neon
- As mudanças de tema e cor afetam todo o ambiente visual da aplicação

### Feedback Sonoro
- Efeitos sonoros são reproduzidos ao selecionar temas e cores
- O volume padrão está configurado para 50% (0.5)

### Animações
- Transições suaves entre estados usando Framer Motion
- Feedback visual ao passar o mouse sobre elementos interativos
- Mudanças graduais de background ao alterar temas

## Estrutura do Projeto

```
public/
  └── sounds/
      └── select.mp3    # Efeito sonoro para seleções
src/
  ├── components/       # Componentes reutilizáveis
  ├── pages/           # Páginas da aplicação
  └── hooks/           # Hooks personalizados
```

## Próximos Passos

1. Adicione mais variações de efeitos sonoros para diferentes tipos de interação
2. Expanda os temas disponíveis
3. Adicione mais opções de personalização

## Troubleshooting

### Problemas Comuns

1. **Som não funciona**: 
   - Verifique se o arquivo `select.mp3` está presente em `public/sounds/`
   - Confirme se o volume do sistema está ativado
   - Verifique se não há erros no console do navegador

2. **Animações lentas**: 
   - Reduza a quantidade de elementos animados simultaneamente
   - Verifique o desempenho do dispositivo

3. **Temas não mudam instantaneamente**:
   - Isso é esperado devido à transição suave (1000ms)
   - Aguarde a conclusão da animação

## Contribuindo

Sinta-se à vontade para contribuir com o projeto através de pull requests ou reportando issues.