# Creative Vibe Editor

Um editor visual imersivo para criação de aplicativos, com feedback sonoro e visual.

## Alterações Recentes

### Última atualização (Suporte Mobile)
- Adicionado suporte para desenvolvimento mobile com Capacitor
- Configurado build para Android e iOS
- Corrigido problema de configuração do Capacitor

## Como Rodar o Projeto

### Web (Desenvolvimento)
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

### Mobile (Android/iOS)

1. **Instale o Capacitor globalmente**
```bash
npm install -g @capacitor/cli
```

2. **Instale as dependências do Capacitor**
```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android @capacitor/ios
```

3. **Faça o build do projeto**
```bash
npm run build
```

4. **Adicione as plataformas**
```bash
npx cap add android
npx cap add ios
```

5. **Sincronize o build com as plataformas nativas**
```bash
npx cap sync
```

6. **Abra no Android Studio**
```bash
npx cap open android
```

7. **Abra no Xcode (macOS apenas)**
```bash
npx cap open ios
```

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

### Problemas Comuns

1. **Erro de configuração do Capacitor**
   - Certifique-se de que o arquivo `capacitor.config.json` está na raiz do projeto
   - Execute `npx cap sync` após qualquer alteração na configuração

2. **Build não atualiza**
   - Execute `npm run build` antes de `npx cap sync`
   - Limpe o cache do navegador se estiver testando a versão web

3. **Android Studio não reconhece o projeto**
   - Execute `npx cap sync` novamente
   - Verifique se o Android Studio e o SDK estão atualizados

### Requisitos do Sistema

- Node.js (versão 16 ou superior)
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS - apenas macOS)
- JDK 11 ou superior (para Android)