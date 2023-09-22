let num1 = parseFloat(prompt('Digite um numero'));
let num2 = parseFloat(prompt('Digite outro numero'));
let oper = prompt('Qual operação vc quer realizar: Soma, Subtração, Multiplicação, Divisão ou Potencia');

oper = oper.toUpperCase()

if (oper === 'SOMA'){
    x = num1+num2;
    alert(`O resultado é ${x}`);

} else if (oper ==='SUBTRAÇÃO'){
    x = num1-num2;
    alert(`O resultado é ${x}`);

} else if (oper ===`MULTIPLICAÇÃO`){
    x = num1*num2;
    alert(`O resultado é ${x}`);

} else if (oper === 'DIVISÃO'){
    if (num2 == 0){
        alert('Não é possivel dividir por zero');
    } else {x = num1/num2;
        alert(`O resultado é ${x}`);
    }
} else if (oper === 'POTENCIA'){
    x = num1**num2;
    alert(`O resultado é ${x}`);

} else(alert(`Numero errado`));