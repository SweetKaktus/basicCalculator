/* * 
   *  Améliorations à prévoir :
   *  Lorsque je clique sur "=" à l'infinie, je ne maîtrise pas le calcule qui est opéré et ce qui est affiché
   *  Mettre en place un système qui reconnaisse les inputs pour la calculette
   *  Prendre en charge les calculs décimaux
   *
   *   */



// Le texte des boutons est inscrit dans l'attribut HTML textContent

let dispCalcul = document.getElementById("displayScreen")

let listBtns = document.querySelectorAll("button")
let reNumber = /^\d$/
let reOperation = /^[+\-/\*]$/

let resetDispScreen = false


let firstNumber = 0
let secondNumber = 0
let operator = ""
let result = 0

for (let i = 0 ; i < listBtns.length ; i++) {
    listBtns[i].addEventListener("click", () => {
        console.log(listBtns[i].innerText)
        if (reNumber.test(listBtns[i].innerText)) {
            if (resetDispScreen) {
                dispCalcul.innerText = "0"
                resetDispScreen = false
            }
            if (dispCalcul.innerText === "0") {
                dispCalcul.innerText = listBtns[i].innerText
            } else {
                dispCalcul.innerText += listBtns[i].innerText
            }
        }
        if (reOperation.test(listBtns[i].innerText)) {
            if (firstNumber === 0) {
                firstNumber = parseInt(dispCalcul.innerText)
                operator = listBtns[i].innerText
                resetDispScreen = true
            } else if (secondNumber === 0) {
                secondNumber = parseInt(dispCalcul.innerText)
                firstNumber = operation(operator, firstNumber, secondNumber)
                operator = listBtns[i].innerText
                secondNumber = 0
                resetDispScreen = true
            }
        }
        if (listBtns[i].innerText === "=") {
            secondNumber = parseInt(dispCalcul.innerText)
            result = operation(operator, firstNumber, secondNumber)
            dispCalcul.innerText = result.toString()
            resetDispScreen = true
        }
        if (listBtns[i].innerText === "AC") {
            dispCalcul.innerText = "0"
            firstNumber = 0
            secondNumber = 0
            result = 0
        }
    })
}



function operation(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
        default:
        return 0
    }
}