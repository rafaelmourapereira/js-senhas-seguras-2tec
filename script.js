const numeroSenha = document.querySelector('.parametro-senha__texto');

let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        //tamanhoSenha = tamanhoSenha - 1
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha - 1
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

const campoSenha = document.querySelector('#camp-senha');
const checkbox = document.querySelectorAll('.checkbox');

for (i=o ; i< checkbox.length; i++){
    checkbox.[i].onclick = geraSenha;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';

geraSenha();

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
}