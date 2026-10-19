/*
==================================
SISTEMA DE APROVAÇAO DE ALUNOS
==================================

ETAPAS DO PROGRAMA:

1. Obter valores do usuario
2. Validar os valores
3. Calcular a média
4. Validação de aprovação
5. Atualizar Interface
6. Limpar campos

*/

// Funções Auxiliares

const obterElemento = (id) => document.getElementById(id);

const calcularMedia = (valor1, valor2, valor3) => {
    const media = (valor1 + valor2 + valor3) / 3;
    return media;
}

// Obter Elementos do Usuario

const obterAluno = () => { 
    obterElemento("nome").value;
}

const obterNota1 = () => {
    parseFloat(obterElemento("nota1").value.replace(",", "."));
}

const obterNota2 = () => {
    parseFloat(obterElemento("not2").value.replace(",", "."));
}

const obterNota3 = () => {
    parseFloat(obterElemento("nota3").value.replace(",", "."));
}

const obterFrequencia = () => {
    parseFloat(obterElemento("frequencia").value.replace(",", "."));  
}

