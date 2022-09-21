let peso = document.getElementById("ipeso")
let altura = document.getElementById("ialtura")
let txtresultado = document.getElementById("resultado")

function calcular(){
    let resultado = Number(peso.value) / (Number(altura.value) ** 2)

    if (resultado < 19){
        classificacao = "Abaixo do peso ideal"
    } else if (resultado < 24) {
        classificacao = "Peso ideal"
    } else if (resultado < 29) {
        classificacao = "Sobrepeso"
    } else if (resultado < 34) {
        classificacao = "Obesidade Grau 1"
    } else if (resultado <= 39) {
        classificacao = "Obesidade Grau 2"
    } else if (resultado > 40) {
        classificacao = "Obesidade Grau 3"
    }
    

    if (Number(peso.value) != 0 && Number(altura.value) != 0)
    {
    txtresultado.innerHTML = `Seu IMC é: ${resultado.toFixed(2)}, logo sua classificação é: ${classificacao}` 
    } else {
        window.alert("Digite um valor válido!")
    }
}