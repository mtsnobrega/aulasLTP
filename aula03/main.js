let cor = prompt("Qual é a cor" );
// case sensitive é quando o codigo ira diferenciar letras maiusculas e minusculos
/*let cor = 'vermelhO';*/
cor = cor.toUpperCase()

//o toUpperCase transforma a string para maiuscula
//o tolowercase transforma a string para minuscula 

if(cor .toUpperCase() == 'VERMELHO'){
    alert(`Pare`);
} else if(cor=='VERDE'){
    alert(`Prossiga`);
} else if(cor=='AMARELO'){
    alert(`Atenção`);
} else(alert(`Espere o carro parar na faixa`));