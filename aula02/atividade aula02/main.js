let nome = prompt('Qual é seu nome');
let aniv = prompt('você ja fez aniversário?')
let idade =parseInt(prompt('Qual é a sua idade'));
let ano =parseInt(prompt('Em que ano estamos?'));
//um igual (=) significa que está guardando algo
//dois iguais (==) significa que está comparando os caracteres 
//três iguais (===) significa que estou comparando caracteres e tipo de dados
var result = ano - idade;
if (aniv == "sim"){
    alert(`Você nasceu em ${result}`);
} else {
    var result1 = result - 1;
    alert(`Você nasceu em ${result1}`);
}
