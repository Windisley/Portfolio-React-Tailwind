# Portfólio [15/11/2024]

## Componente Header

O componente Header é uma parte essencial do portfólio, responsável por exibir a navegação principal da aplicação de forma responsiva e interativa. Ele foi desenvolvido com **React** utilizando hooks como `useState`, `useRef` e `useEffect`, além de ícones das bibliotecas `react-icons`.

![Header](https://github.com/user-attachments/assets/f1b50e38-c06a-4304-86a6-18b6528a7545)

## Funcionalidades

1. **Navegação Responsiva:**
   - O menu se adapta ao tamanho da tela.
   - Em telas menores (largura ≤ 700px), o menu se transforma em um menu "hambúrguer" acessível.
  
     ![Header_respo](https://github.com/user-attachments/assets/396a76df-db46-4e60-b881-b44075f35006)

2. **Controle de Estado do Menu:**
   - Utiliza o hook `useState` para gerenciar o estado de visibilidade do menu.
   - O menu pode ser aberto ou fechado dinamicamente ao clicar no ícone do menu.

3. **Clique Fora para Fechar o Menu:**
   - Com `useRef`, o componente detecta cliques fora do menu para fechá-lo automaticamente, melhorando a usabilidade.

4. **Rolagem Suave:**
   - O logotipo na parte superior permite a rolagem suave para o início da página ao clicar.

5. **Animações:**
   - Animações e transições são implementadas para melhorar a experiência do usuário ao interagir com os elementos, como hover e transformações de escala.

## Tecnologias Utilizadas

- **React.js**: Framework JavaScript para construir a interface.
- **Tailwind CSS**: Estilização responsiva e utilitária.
- **React Icons**: Ícones para o menu interativo.

## Estrutura do Componente

### Navegação

A navegação é composta por links para seções do portfólio:

- **Início**: Link para a seção inicial do portfólio.
- **Sobre Mim**: Informações sobre o desenvolvedor.
- **Habilidades**: Tecnologias e habilidades destacadas.
- **Projetos**: Portfólio de projetos realizados.

### Código Responsivo

- **Telas Grandes**: O menu aparece em formato horizontal.
- **Telas Pequenas**: O menu é ocultado por padrão e acessado através do botão "hambúrguer".

### Hooks Utilizados

- `useState`: Gerencia a visibilidade do menu.
- `useRef`: Referência ao elemento de navegação para detectar cliques fora dele.
- `useEffect`: Adiciona e remove o evento de detecção de clique fora do menu.

## Exemplo de Uso

Este componente é utilizado no topo de cada página do portfólio e proporciona uma experiência intuitiva para o usuário navegar entre as seções.

## Visualização

### Estado Normal
- Menu exibido em telas grandes com links visíveis.

### Estado Responsivo
- Menu "hambúrguer" disponível em telas menores com animações suaves.

---

# Componente Home

O componente Home é a seção inicial do portfólio, projetada para apresentar o desenvolvedor de forma dinâmica e interativa. Ele combina elementos de design moderno com uma animação personalizada feita em **Canvas**.

![Home](https://github.com/user-attachments/assets/bc58a744-4b56-4345-8006-55d49ba5b5bc)

## Funcionalidades

1. **Apresentação do Desenvolvedor:**
   - Exibe o nome e a profissão do desenvolvedor em destaque.
   - Inclui links para redes sociais (LinkedIn, GitHub e WhatsApp) com ícones interativos.

2. **Currículo para Download:**
   - Oferece um botão para download direto do currículo no formato PDF.

3. **Canvas Interativo:**
   - Inclui animações criadas manualmente em um elemento `<canvas>`.
   - A animação apresenta:
     - Um sprite animado de uma pessoa caminhando.
     - Imagens de objetos (livro e computador) distribuídas pelo canvas.
     - Uma bolinha orbitando ao redor de um ponto fixo com movimento suave.

4. **Responsividade:**
   - Design adaptado para diferentes tamanhos de tela.
   - Layout ajustado automaticamente para dispositivos móveis e desktops.

5. **Suporte à Acessibilidade:**
   - Mensagem alternativa exibida caso o navegador do usuário não suporte o elemento `<canvas>`.

## Tecnologias Utilizadas

- **React.js**: Framework JavaScript para gerenciamento de componentes.
- **Tailwind CSS**: Estilização utilitária e responsiva.
- **React Icons**: Ícones das redes sociais.
- **Canvas API**: Criação e manipulação de gráficos no elemento `<canvas>`.

## Estrutura do Componente

### Apresentação

- **Título:** Nome e profissão do desenvolvedor.
- **Descrição:** Um convite para iniciar uma conversa com o desenvolvedor.
- **Links Sociais:** Ícones clicáveis que redirecionam para LinkedIn, GitHub e WhatsApp.

### Canvas

O elemento `<canvas>` é usado para criar animações customizadas que tornam a seção visualmente mais atraente:

- **Sprite Animado:** Uma pessoa caminhando pelo canvas.
- **Objetos Estáticos:** Um livro e um computador são renderizados em posições fixas.
- **Animação Orbitante:** Uma bolinha girando ao redor de um ponto fixo, criando um efeito dinâmico.

### Botão de Download

- Um botão permite que os visitantes baixem o currículo do desenvolvedor diretamente do portfólio.

## Hooks Utilizados

- `useRef`: Referências para elementos do DOM, como `<canvas>` e seu contêiner.
- `useEffect`: Configuração e limpeza de eventos, além de inicializar as animações.

## Animações e Lógica

- **Sprites:** Gerenciados com base em um contador que altera os frames do sprite.
- **Movimento:** A posição dos elementos no canvas é atualizada continuamente para criar animações fluidas.
- **Controle de Animação:** A função `requestAnimationFrame` garante animações suaves e sincronizadas.

## Responsividade

- **Layout Mobile:** Elementos alinhados verticalmente.
- **Layout Desktop:** Elementos organizados horizontalmente para melhor aproveitamento do espaço.

## Exemplo de Uso

Este componente serve como a introdução do portfólio, ajudando os visitantes a conhecerem o desenvolvedor e sua identidade profissional.

## Visualização

### Tela Desktop
- Apresentação do desenvolvedor à esquerda.
- Canvas animado à direita.

### Tela Mobile
- Apresentação centralizada.
- Canvas exibido abaixo da introdução.

---

# Componente About

O componente About é a seção do portfólio destinada a apresentar informações pessoais e profissionais sobre o desenvolvedor, destacando suas habilidades, visão e especialização.

![About](https://github.com/user-attachments/assets/0179ed3e-55ba-47d1-ac7b-3f8f2c010c7c)


## Funcionalidades

1. **Apresentação Visual:**
   - Inclui uma imagem do desenvolvedor em um contêiner estilizado e arredondado com bordas e sombras suaves.

2. **Descrição Pessoal e Profissional:**
   - Um texto bem estruturado que descreve o perfil do desenvolvedor, suas especializações e abordagem ao criar projetos.

3. **Design Responsivo:**
   - Layout adaptado para dispositivos móveis e desktops, garantindo uma experiência consistente em diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React.js**: Para gerenciar a estrutura do componente.
- **Tailwind CSS**: Para estilização flexível e responsiva.
- **Imagens Otimizadas**: Uso do atributo `loading="lazy"` para otimização de desempenho.

## Estrutura do Componente

### Imagem de Perfil

- A imagem do desenvolvedor é exibida dentro de um contêiner arredondado com bordas e sombra.
- **Estilização:** 
  - Bordas arredondadas para destacar a foto.
  - Sombras suaves para criar um efeito de profundidade.
  - Efeito de centralização precisa para garantir uma apresentação visual alinhada.

### Texto Descritivo

- **Título:** 
  - Um cabeçalho que apresenta o conteúdo da seção com o texto "Sobre mim".
- **Descrição:** 
  - Um parágrafo detalhando a experiência, especialização e abordagem profissional do desenvolvedor.
  - Uso de quebras de linha para melhorar a legibilidade.

### Layout Responsivo

- **Tela Desktop:** 
  - Imagem e texto alinhados lado a lado, aproveitando o espaço horizontal.
- **Tela Mobile:** 
  - Imagem e texto organizados verticalmente para melhor adaptação.

## Design Responsivo

- **Modo Mobile:**
  - Imagem e texto são empilhados verticalmente.
  - Espaçamento ajustado para evitar sobrecarga visual.
- **Modo Desktop:**
  - Layout em duas colunas, garantindo uma organização clara e profissional.

## Estilização

- **Contêiner da Imagem:**
  - Formato arredondado com borda personalizada.
  - Sombra para dar destaque à foto do desenvolvedor.
- **Texto:**
  - Fonte personalizada para destacar a mensagem.
  - Organização hierárquica clara com título e corpo do texto.

## Exemplo de Uso

O componente `About` serve como uma introdução detalhada do desenvolvedor, apresentando suas habilidades e visão profissional de forma clara e atraente.

## Visualização

### Tela Desktop
- Imagem do desenvolvedor à esquerda.
- Texto descritivo à direita, alinhado de forma consistente.

### Tela Mobile
- Imagem do desenvolvedor centralizada.
- Texto descritivo abaixo da imagem.

---

# Componente Techs

O componente Techs é a seção do portfólio dedicada a exibir as principais tecnologias e ferramentas com as quais o desenvolvedor trabalha. Ele utiliza um carrossel animado para destacar cada habilidade de maneira dinâmica e interativa.

![Techs](https://github.com/user-attachments/assets/3c4e983b-6130-4598-8a9d-c049165d2aaa)

## Funcionalidades

1. **Exibição das Habilidades:**
   - Ícones representando tecnologias como HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub, Figma e TypeScript.
   - Nome das tecnologias exibido abaixo de cada ícone.

2. **Carrossel Animado:**
   - Animação contínua que desliza horizontalmente para destacar as tecnologias.
   - Pausa na animação quando o usuário passa o mouse sobre o carrossel.

3. **Interatividade:**
   - Animação pausada ao passar o mouse (hover).
   - Reinício da animação ao retirar o mouse.

4. **Design Responsivo:**
   - Garantia de funcionalidade e estética em diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React.js:** Para estruturação e controle do estado do componente.
- **Tailwind CSS:** Para estilização responsiva e rápida.
- **React Icons:** Para exibir ícones representando cada tecnologia.

## Estrutura do Componente

### Carrossel de Tecnologias

- **Ícones e Nomes:**
  - Cada tecnologia é representada por um ícone grande e o nome abaixo.
  - Ícones fornecidos pela biblioteca `react-icons`.

- **Animação do Carrossel:**
  - O carrossel desliza automaticamente para a esquerda.
  - Utiliza a função `setInterval` para criar uma transição contínua.
  - Reorganização dos itens ao alcançar o final, garantindo que o carrossel seja infinito.

- **Eventos de Hover:**
  - `onMouseEnter`: Pausa a animação ao passar o mouse sobre o carrossel.
  - `onMouseLeave`: Retoma a animação ao remover o mouse.

### Controle do Estado

- **`animationshow`:**
  - Estado booleano que controla a execução da animação.
  - Pausa e retoma a animação conforme a interação do usuário.

- **Referência do Carrossel:**
  - Utiliza `useRef` para manipular diretamente o DOM do contêiner do carrossel.

## Design Responsivo

- **Adaptabilidade:**
  - O componente foi projetado para manter a usabilidade e clareza em diferentes dispositivos e tamanhos de tela.
  - Utilização de espaçamento e alinhamento adaptáveis.

## Estilização

- **Carrossel:**
  - Espaçamento entre os itens para evitar sobreposição.
  - Animação suave com transições de estilo `ease-out`.

- **Ícones:**
  - Ícones grandes com cores destacadas para maior visibilidade.
  - Cursor de "pointer" ao passar o mouse.

- **Texto:**
  - Nomes das tecnologias exibidos abaixo dos ícones, centralizados para consistência visual.

## Exemplo de Uso

O componente `Techs` pode ser utilizado como uma seção no portfólio para destacar o conjunto de habilidades do desenvolvedor de forma visualmente atraente e interativa.

## Visualização

### Tela Desktop
- Carrossel animado exibindo as tecnologias lado a lado.

### Tela Mobile
- Ícones organizados em uma lista que desliza horizontalmente.

---

# Projects Component

Este componente é responsável por exibir os projetos desenvolvidos, organizados em dois carrosséis. Cada projeto é representado por uma imagem, uma descrição e os ícones das tecnologias utilizadas. Além disso, cada projeto possui links para visualização prévia e repositório no GitHub. O carrossel permite a navegação entre os projetos, utilizando os ícones de setas para mover para o próximo ou anterior.

![Projects](https://github.com/user-attachments/assets/2b7950ab-0e8b-4d1f-b46b-ea99ee722a4e)

## Funcionalidades

- **Exibição de Projetos**: O componente renderiza uma lista de projetos, cada um com uma imagem, descrição detalhada, tecnologias utilizadas e links para visualização e repositório.
- **Carrosséis de Navegação**: Dois carrosséis são utilizados para exibir os projetos. O primeiro carrossel exibe os primeiros projetos e o segundo, os demais. O usuário pode navegar entre os projetos com os ícones de setas.
- **Links**:
  - **Visualização**: A cada projeto, há um botão "Prévia" que redireciona para uma versão ao vivo do projeto.
  - **Repositório**: Um botão "Repositório" leva ao repositório do projeto no GitHub.

## Tecnologias

- **React**: Para a construção do componente e gerenciamento de estado.
- **JavaScript**: Para a lógica de navegação do carrossel e interatividade.
- **CSS/Tailwind CSS**: Para o design responsivo e estilização do componente.
- **React Icons**: Para exibir os ícones das tecnologias e setas de navegação.

## Estrutura

O componente é dividido em duas partes principais:
1. **Primeiro Carrossel**: Exibe os primeiros projetos, com navegação por setas.
2. **Segundo Carrossel**: Exibe os projetos restantes, com a mesma funcionalidade de navegação.

### Projetos Exibidos

1. **ViaCEP**: Um projeto que utiliza a API do ViaCEP para buscar informações de endereço.
2. **To-Do List**: Uma lista de tarefas com funcionalidade de adicionar e remover tarefas, utilizando o localStorage.
3. **PokeAPI**: Integração com a PokeAPI para exibir informações detalhadas sobre Pokémon.
4. **Clone do Facebook**: Recriação da página de login do Facebook.
5. **Snake Game**: Jogo clássico da cobrinha, feito com JavaScript.
6. **E-commerce**: Plataforma de e-commerce fictícia para a venda de relógios.
7. **Cronômetro**: Um cronômetro simples desenvolvido com React.
8. **Calculadora**: Calculadora interativa desenvolvida com React.


2. **Navegação**:
   - Use as setas para navegar entre os projetos nos carrosséis.
   - Clique nos botões "Prévia" ou "Repositório" para acessar os links correspondentes.
  
----

# Footer Component

O componente Footer exibe informações de copyright e links para redes sociais. Ele inclui ícones para o LinkedIn, GitHub e WhatsApp, permitindo que os usuários entrem em contato ou acessem os perfis sociais. O ano de copyright é gerado dinamicamente.

![Footer](https://github.com/user-attachments/assets/f0290398-2d80-4e0c-8c3f-8908efb45a0d)

## Funcionalidades

- **Copyright**: Exibe a informação de copyright com o nome do autor e o ano atual.
- **Redes Sociais**: Links para os perfis do LinkedIn, GitHub e WhatsApp, com ícones interativos.
  - **LinkedIn**: Conecta ao perfil profissional.
  - **GitHub**: Acessa o repositório do GitHub.
  - **WhatsApp**: Link direto para iniciar uma conversa no WhatsApp.

## Tecnologias

- **React**: Para o desenvolvimento do componente.
- **React Icons**: Para os ícones das redes sociais.
- **CSS/Tailwind CSS**: Para estilização e responsividade.

----
