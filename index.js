let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let totalSum = document.getElementById("sum-el")

function add() {
    totalSum.textContent = "Sum: "
    totalSum.textContent += num1 + num2
}


function subtract() {
    totalSum.textContent = "Sum: "
    totalSum.textContent += num1 - num2
}


function divide() {
    totalSum.textContent = "Sum: "
    totalSum.textContent += num1 / num2
}


function multiply() {
    totalSum.textContent = "Sum: "
    totalSum.textContent += num1 * num2
}