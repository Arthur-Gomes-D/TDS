const num1 = document.getElementById('numero1')
const num2 = document.getElementById('numero2')
const result = document.getElementById('resultado')

document.getElementById("operacaoBTN").addEventListener('click', () => {
    result.innerHTML = Number(num1.value) / Number(num2.value)
})