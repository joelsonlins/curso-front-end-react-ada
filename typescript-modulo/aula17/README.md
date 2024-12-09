# Configuração do TypeScript

1. Inicializar um projeto Node.js
2. Instalar o TypeScript
  2.1. Instalação global: `npm install -g typescript`
  2.2. Instalação local (dentro do projeto) `npm install typescript -D`
3. Utilizar o TypeScript instalado para transpilar o nosso código (converter nosso código TS
para JS)
  3.1. `npx tsc index.ts` 
  3.2. `npx tsc index.ts --watch` (sempre estará observando as atualizações e atualizando automaticamente)
  3.3. `npx tsc --init`