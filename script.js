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
    return obterElemento("nome").value;
}

const obterNota1 = () => {
    return parseFloat(obterElemento("nota1").value.replace(",", "."));
}

const obterNota2 = () => {
    return parseFloat(obterElemento("nota2").value.replace(",", "."));
}

const obterNota3 = () => {
    return parseFloat(obterElemento("nota3").value.replace(",", "."));
}

const obterFrequencia = () => {
    return parseFloat(obterElemento("frequencia").value.replace(",", "."));  
}

// Validar Valores

const validarValores = (nota1, nota2, nota3, frequencia) => {

    if( ((nota1 < 0) || (nota1 > 10)) || !Number.isFinite(nota1) ||
        ((nota2 < 0) || (nota2 > 10)) || !Number.isFinite(nota2) ||
        ((nota3 < 0) || (nota3 > 10)) || !Number.isFinite(nota3) ||
        ((frequencia < 0) || (frequencia > 100)) || !Number.isFinite(frequencia)) {
        
        return false;

    }

    return true;
}

// Atualizar Interface

const atualizarInterface = (nome, media, maiorNota, menorNota) => {
    obterElemento("nomeAluno").textContent = `Nome: ${nome}`;    
    obterElemento("media").textContent = `Média: ${media.toFixed(2).replace(".", ",")}`;
    obterElemento("maiorNota").textContent = `Maior Nota: ${maiorNota.toFixed(2).replace(".", ",")}`;
    obterElemento("menorNota").textContent = `Menor Nota: ${menorNota.toFixed(2).replace(".", ",")}`;
}

// Limpar Campos

const limpaCampo = () => {
    obterElemento("nome").value = "";
    obterElemento("nota1").value = "";
    obterElemento("nota2").value = "";
    obterElemento("nota3").value = "";
    obterElemento("frequencia").value = "";
}

// Função principal Calcular

function calcularAprovacao() {
    
    const nomeAluno = obterAluno();
    const nota1 = obterNota1();
    const nota2 = obterNota2();
    const nota3 = obterNota3();
    const frequencia = obterFrequencia();

    if(!validarValores(nota1, nota2, nota3, frequencia)) {
        alert("Valor inválido! Por favor, digite um numero válido.");
        return;
    }

    // Verifica Maior Nota
    let maiorNota = nota1;

    if (nota2 > maiorNota) {
        maiorNota = nota2;
    }
    if (nota3 > maiorNota) {
        maiorNota = nota3;
    }

    // Verifica Menor Nota
    let menorNota = nota1;

    if (nota2 < menorNota) {
        menorNota = nota2;
    }
    if (nota3 < menorNota) {
        menorNota = nota3;
    }

    const media = calcularMedia(nota1, nota2, nota3);

    if(frequencia < 75) {
        obterElemento("situacao").textContent = `Situação: Reprovado por frequência.`;
    }
    else if((media >= 7) && (frequencia >= 75)) {
        obterElemento("situacao").textContent = `Situação: Aprovado!`;        
    }
    else if((media >= 5 && media < 7) && (frequencia >= 75)) {
        obterElemento("situacao").textContent = `Situação: Recuperação.`;        
    }
    else if(media < 5){
        obterElemento("situacao").textContent = `Situação: Reprovado por nota.`;
    }

    atualizarInterface(nomeAluno, media, maiorNota, menorNota);

    limpaCampo();

    return;
}

