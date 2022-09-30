//Determinar si número es primo en JavaScript
const VerSiEsPrimo = numero => {
	// Casos excepcionales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// SI NO SE LOGRA DIVIDIR ANTERIORMENTE, SE CONCLUYE QUE SÍ ES PRIMO
	return true;
}
// SE DETERMINA EL LISTADO DE NÚMEROS A EVALUAR
const ListadoDeNumeros = [30, 4, 1, 42, 151, 500, 179, 13, 15, 12 ,20, 11, 301242];
// output
ListadoDeNumeros.forEach(numero => {
	console.log("Determinando si el número es primo:", numero, VerSiEsPrimo(numero));
});