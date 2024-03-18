// Considerando a figura anexada "referencia_exercicio_4", escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

var valor1 = 0
var valor2 = 0
var valor3 = 0
var z = 0

for (var z = 0; z < 7; z++) {
    var forma = prompt("Qual forma você quer calcular a área?")
    if (forma == "retangulo") {
        valor1 = parseInt(prompt("Informe um valor para base"))
        valor2 = parseInt(prompt("Informe um valor para altura"))
        var area_retangulo = valor1 * valor2 
        alert("a área dessa forma é " + area_retangulo)
    }else if (forma == "quadrado") {
        valor1 = parseInt(prompt("Informe um valor para lado"))
        var area_quadrado = valor1 * valor1
        alert("a área dessa forma é " + area_quadrado)
    } else if (forma == "losango") {
        valor1 = parseInt(prompt("Informe um valor para diagonal maior"))
        valor2 = parseInt(prompt("Informe um valor para diagonal menor"))
        var area_losango = (valor1 * valor2) /2
        alert("a área dessa forma é " + area_losango)
    } else if (forma == "trapezio") {
        valor1 = parseInt(prompt("Informe um valor para base maior"))
        valor2 = parseInt(prompt("Informe um valor para base menor"))
        valor3 = parseInt(prompt("Informe um valor para altura"))
        var area_trapezio = ((valor1 + valor2) * valor3) /2
        alert("a área dessa forma é " + area_trapezio)
    } else if (forma == "paralelogramo") {
        valor1 = parseInt(prompt("Informe um valor para base"))
        valor2 = parseInt(prompt("Informe um valor para altura"))
        var area_paralelogramo = valor1 * valor2
        alert("a área dessa forma é " + area_paralelogramo)
    } else if (forma == "triangulo") {
        valor1 = parseInt(prompt("Informe um valor para base"))
        valor2 = parseInt(prompt("Informe um valor para altura"))
        var area_triangulo = (valor1 * valor2) / 2
        alert("a área dessa forma é " + area_triangulo)
    } else if (forma == "circulo") {
        valor1 = parseInt(prompt("Informe um valor para raio"))
        var area_circulo = (valor1 * valor1) * 3.14
        alert("a área dessa forma é " + area_circulo)
    } else
        alert("Não temos como calcular essa forma")
}