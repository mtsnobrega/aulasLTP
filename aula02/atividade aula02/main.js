let nome = prompt('Qual é seu nome');
let aniv = prompt('você ja fez aniversário?')
let idade =parseInt(prompt('Qual é a sua idade'));
let ano =parseInt(prompt('Em que ano estamos?'));
//um igual (=) significa que está guardando algo
//dois iguais (==) significa que está comparando os caracteres 
//três iguais (===) significa que estou comparando caracteres e tipo de dados
var result = ano - idade;
if (aniv == "sim"){
    alert(`Você nasceu em ${result}`); // interpolação: é o nome que se da a uma variavel dentro de uma mensagem 
} else {
    var result1 = result - 1;
    alert(`Você nasceu em` + result1 + `e hj é dia X`); //concatenar: é unir elementos  
}

