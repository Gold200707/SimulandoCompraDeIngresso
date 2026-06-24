# e-Ticket - Sistema de Compra de Ingressos 🎫

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![Alura](https://img.shields.io/badge/Alura-Challenge-051933?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 🎯 Sobre o Projeto
O **e-Ticket** é uma aplicação front-end que simula um sistema de bilheteria online. Projetado para oferecer uma experiência imersiva e ágil, o sistema permite que o usuário selecione a modalidade do ingresso desejado (Cadeira Superior, Cadeira Inferior ou Pista) e a quantidade. A aplicação verifica em tempo real a disponibilidade de lugares e atualiza o saldo na interface dinamicamente, garantindo uma validação precisa do estoque antes de confirmar a compra.

## ✨ Funcionalidades Principais
- **Seleção Dinâmica de Setores:** Dropdown (`select`) intuitivo para a escolha do tipo de ingresso, roteando a lógica de compra para o setor correto.
- **Validação Estrita de Formulário:** Bloqueio inteligente de entradas inválidas, garantindo que a quantidade solicitada não seja um valor nulo, não numérico (`NaN`), zero ou negativo.
- **Controle de Estoque em Tempo Real:** Verificação lógica do saldo disponível para o setor escolhido antes de autorizar e processar a transação.
- **Atualização Dinâmica do DOM:** Decremento automático da quantidade de ingressos disponíveis exibida na tela, sem a necessidade de recarregar a página.
- **Feedback ao Usuário:** Emissão de alertas nativos e diretos informando o sucesso da compra ou a indisponibilidade de ingressos na modalidade solicitada.

## 🛠️ Tecnologias Utilizadas
O projeto foi desenvolvido inteiramente com tecnologias web fundamentais (Vanilla), sem o uso de frameworks externos, focando em alta performance e execução direta no navegador:
- **HTML5:** Estruturação semântica da página, organização de contêineres principais e construção de formulários interativos com restrições numéricas.
- **CSS3:** Estilização avançada utilizando Flexbox. A arquitetura de estilos inclui um arquivo dedicado (`_reset.css`) para padronização cross-browser, manipulação de pseudo-classes e controle rigoroso de `box-sizing` e layouts absolutos/relativos.
- **JavaScript (ES6+):** Lógica de negócios isolada e focada na manipulação dinâmica do DOM, validações de integridade de dados e processamento de eventos de clique.

## 🚀 Como Executar o Projeto
Por se tratar de uma aplicação client-side estática, a execução é extremamente direta e não requer a instalação de gerenciadores de pacotes ou ambientes complexos de execução.

1. Clone o repositório em sua máquina local utilizando o terminal:
```bash
   git clone https://github.com/Gold200707/SimulandoCompraDeIngresso.git

```

2. Navegue até o diretório raiz do projeto:

```bash
   cd SimulandoCompraDeIngresso

```

3. Abra o arquivo `index.html` diretamente em qualquer navegador moderno.

> **Dica de Desenvolvimento:** Para uma experiência otimizada, você pode abrir a pasta do projeto no Visual Studio Code e utilizar a extensão **Live Server**. Basta clicar com o botão direito no arquivo `index.html` e selecionar "Open with Live Server" para que o navegador reflita as alterações em tempo real.

## 🎨 Interface e Design System

A interface do e-Ticket foi construída com um visual moderno, noturno e de forte inspiração tech. O Design System é estruturado sobre os seguintes pilares visuais:

* **Tipografia Estratégica:** Uso da família `Chakra Petch` para os títulos, trazendo um aspecto futurista e impactante, em contraste com a fonte `Inter` para o corpo do texto e inputs, garantindo fluidez e clareza na leitura.
* **Paleta de Cores e Gradientes:**
* **Background Imersivo:** Um gradiente vertical sombrio que transita entre variações de azul profundo (`rgba(1, 8, 14, 1)` e `rgba(4, 24, 50, 1)`).
* **Ciano Neon (`#00F4BF`):** Aplicado estrategicamente em bordas, grafismos SVG e textos em itálico de destaque, criando uma identidade visual incisiva e guiando a atenção.
* **Call to Action (CTA):** O botão primário utiliza um tom de Azul Royal (`#1875E8`) com uma emissão de brilho configurada via `box-shadow`, tornando-se o elemento de maior interatividade e peso visual da interface.



## 📚 Aprendizados (Alura)

O desenvolvimento deste sistema serviu como base para a consolidação de conceitos críticos de programação imperativa com JavaScript no lado do cliente:

* **Manipulação de Árvore DOM:** Domínio na seleção e extração de elementos visuais através de `document.getElementById()`.
* **Extração e Injeção de Dados:** Uso de `.value` para recuperar estados de entradas de usuário e `.textContent` para sobrescrever valores de nós de texto em tempo real.
* **Conversão e Tipagem Segura:** Utilização extensiva de `parseInt()` para converter retornos de string dos elementos HTML em números inteiros, habilitando operações aritméticas exatas.
* **Estruturas de Fluxo e Validação:** Implementação de árvores de decisão (`if`, `else if`, `else`) para isolar regras de negócio específicas de cada setor (Pista, Superior, Inferior) e uso de funções globais como `isNaN()` para proteção do estado da aplicação contra inputs inesperados.

```

```
