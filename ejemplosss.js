var peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
var altura = parseFloat(prompt("Ingrese su altura en metros:"));

var imc = peso / (altura * altura);

// Determinar la categoría según el IMC
var categoria;
if (imc < 18.5) {
    categoria = "Bajo peso";
} else if (imc < 25) {
    categoria = "Peso normal";
} else if (imc < 30) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidad";
}

// Mostrar el resultado en la consola
console.log("Tu Índice de Masa Corporal (IMC) es: " + imc.toFixed(2));
console.log("Estás en la categoría de: " + categoria);