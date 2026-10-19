# 🎓 Sistema de Aprovação de Alunos

## 📌 Sobre o projeto

O **Sistema de Aprovação de Alunos** é uma aplicação web desenvolvida com HTML, CSS e JavaScript, que tem como objetivo avaliar o desempenho escolar de um aluno com base em suas notas e frequência.

O projeto permite inserir o nome do aluno, três notas e o percentual de frequência, realizando automaticamente os cálculos necessários para determinar sua situação acadêmica.

Esta aplicação foi desenvolvida como parte dos meus estudos em **Desenvolvimento Full Stack**, com foco na prática de lógica de programação, estruturas condicionais, funções e manipulação do DOM utilizando JavaScript.

## 🚀 Funcionalidades

- Cadastro do nome do aluno.
- Entrada de três notas, com valores entre 0 e 10.
- Registro da frequência escolar em porcentagem.
- Validação dos valores informados.
- Cálculo automático da média aritmética.
- Identificação da maior e da menor nota.
- Classificação da situação acadêmica do aluno.
- Exibição dinâmica dos resultados na interface.
- Limpeza automática dos campos após o cálculo.
- Interface responsiva para diferentes tamanhos de tela.

## 📊 Regras de aprovação

O sistema utiliza os seguintes critérios para determinar a situação do aluno:

| Condição | Resultado |
|---|---|
| Frequência inferior a 75% | Reprovado por frequência |
| Média igual ou superior a 7,0 e frequência mínima de 75% | Aprovado |
| Média entre 5,0 e 6,99 e frequência mínima de 75% | Recuperação |
| Média inferior a 5,0 e frequência mínima de 75% | Reprovado por nota |

**Observação:** a frequência é considerada prioritária. Portanto, um aluno com frequência inferior a 75% será reprovado independentemente de sua média.

### Cálculo da média

A média final é calculada pela fórmula:

**Média = (Nota 1 + Nota 2 + Nota 3) / 3**

O resultado é apresentado com duas casas decimais.

## 🛠️ Tecnologias utilizadas

**HTML5**
- Estruturação semântica da página.
- Criação de formulários.
- Campos de entrada e atributos de validação.

**CSS3**
- Estilização da interface.
- Layout responsivo.
- Flexbox e CSS Grid.
- Efeitos visuais e interações.

**JavaScript**
- Manipulação do DOM.
- Declaração de variáveis e constantes.
- Funções tradicionais e arrow functions.
- Estruturas condicionais `if`, `else if` e `else`.
- Operadores aritméticos, relacionais e lógicos.
- Conversão e validação de dados.
- Manipulação de strings.
- Atualização dinâmica da interface.

## 📂 Estrutura do projeto

```text
sistemaAprovacao/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### Descrição dos arquivos

- `index.html`: estrutura da página e formulário de entrada de dados.
- `style.css`: responsável pela aparência visual e responsividade.
- `script.js`: contém as funções, cálculos e regras de aprovação.
- `README.md`: documentação do projeto.

## 💻 Como executar

1. Faça o download ou clone o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server.
4. Preencha o nome, as três notas e a frequência do aluno.
5. Clique no botão **Calcular**.
6. Visualize o resultado da avaliação.

Não é necessário instalar dependências ou configurar um servidor para executar o projeto.

## 🧠 Conhecimentos praticados

Durante o desenvolvimento desta aplicação, pratiquei conceitos fundamentais de programação:

- Organização e reutilização de código por meio de funções.
- Separação de responsabilidades entre HTML, CSS e JavaScript.
- Captura de valores de formulários.
- Conversão de strings para números utilizando `parseFloat()`.
- Validação numérica utilizando `Number.isFinite()`.
- Estruturas condicionais para tomada de decisões.
- Operadores lógicos `&&` e `||`.
- Manipulação de elementos HTML utilizando `getElementById()`.
- Atualização de conteúdos utilizando `textContent`.
- Formatação de números com `toFixed()`.
- Limpeza dos campos após a execução.

## 🔮 Melhorias futuras

Algumas funcionalidades que poderão ser implementadas em versões futuras:

- Cadastro de vários alunos.
- Armazenamento dos dados utilizando LocalStorage.
- Histórico de avaliações realizadas.
- Possibilidade de editar ou excluir registros.
- Exibição de estatísticas da turma.
- Exportação de resultados.
- Integração com banco de dados.

## 👨‍💻 Autor

**Rafael Junior**

Estudante de Desenvolvimento Full Stack.

Projeto desenvolvido para fins educacionais, com o objetivo de fortalecer os conhecimentos em HTML, CSS, JavaScript e lógica de programação.
