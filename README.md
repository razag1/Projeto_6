# efood — Parte 3 de 4

Terceira entrega do projeto final efood da EBAC. Esta versão é uma evolução direta da Parte 2 e deve ser aplicada no **mesmo repositório**.

## Escopo desta parte

- mantém o layout, as rotas, a API e o modal da Parte 2;
- adiciona Redux Toolkit e React Redux;
- cria um carrinho lateral seguindo o layout do Figma;
- adiciona produtos pelo botão do modal;
- permite adicionar o mesmo produto mais de uma vez;
- mostra a quantidade real de itens no cabeçalho;
- permite remover cada item individualmente;
- calcula o valor total pela soma dos preços;
- fecha o carrinho pelo fundo escuro ou pela tecla Escape;
- mantém o botão “Continuar com a entrega” sem avançar para checkout, porque essa funcionalidade pertence à Parte 4.

## Tecnologias

- React
- TypeScript
- Vite
- Styled Components
- React Router
- Redux Toolkit
- React Redux
- Bootstrap Icons
- Fetch API

## Instalação

```bash
npm install
npm run dev
```

## Validar a compilação

```bash
npm run build
npm run preview
```

## Fluxo implementado

```txt
Home
→ Perfil do restaurante
→ Abrir modal do produto
→ Adicionar ao carrinho
→ Carrinho lateral
→ Remover itens
→ Total recalculado automaticamente
```

## Atualizar o mesmo repositório

```bash
git add .
git commit -m "feat: implementa carrinho com Redux"
git push
```

Se o repositório já estiver conectado à Vercel, o push normalmente cria uma nova implantação automaticamente.

## O que ainda não entra

A Parte 3 não inclui:

- formulário de entrega;
- pagamento;
- confirmação do pedido;
- integração de checkout.

Essas funcionalidades ficam reservadas para a Parte 4.
