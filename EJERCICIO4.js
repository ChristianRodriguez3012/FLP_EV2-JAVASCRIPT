const F_Iterativo = function (n) {
if (n === 0) {
    return 1;
}
let fact = 1;
for (i = 1; i <= n; i++) {
    fact *= i;
}
return fact;
};
//Implementando Recursivo
const F_Recursivo = function (n) {
if (n === 0) {
    return 1;
} else {
    return n * F_Recursivo(n - 1);
}
};
//output Iterativo y Recursivo
console.log("MOSTRANDO FACTORIALES (I): ");
console.log(F_Iterativo(30));
console.log(F_Iterativo(12));
console.log(F_Iterativo(22));
console.log("MOSTRANDO FACTORIALES (R): ");
console.log(F_Recursivo(11));
console.log(F_Recursivo(1));
console.log(F_Recursivo(21));