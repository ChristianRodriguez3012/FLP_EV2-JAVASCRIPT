const input = prompt("FIBONACCI - INGRESE EL NÚMERO A CALCULAR:");
alert(`Calculando el fibonacci de ${input}`);
    function CREARFibonacci(number){
    var fibonacci = [];
//fibonacci de 0 y 1
    fibonacci[0] = 0;
    fibonacci[1] = 1;
//fibonacci
for (var i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }
    //output
    var f = CREARFibonacci(input);
    console.log(f);
