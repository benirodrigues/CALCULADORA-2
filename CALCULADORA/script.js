let stack = []; // Pilha para processar os números e operações
let currentInput = "0";

function updateDisplay(value) {
    document.getElementById("display").textContent = value;
}

function pressKey(key) {
    if (!isNaN(key) || key === ".") {
        // Adicionando números ou ponto
        currentInput = currentInput === "0" ? key : currentInput + key;
    } else {
        // Adicionando operador na pilha
        stack.push(currentInput);
        stack.push(key);
        currentInput = "0";
    }
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = "0";
    stack = [];
    updateDisplay("0");
}

function calculateResult() {
    stack.push(currentInput); // Último número na pilha

    let result = parseFloat(stack[0]);
    for (let i = 1; i < stack.length; i += 2) {
        const operator = stack[i];
        const nextNumber = parseFloat(stack[i + 1]);

        if (operator === "+") result += nextNumber;
        if (operator === "-") result -= nextNumber;
        if (operator === "*") result *= nextNumber;
        if (operator === "/") result /= nextNumber;
    }

    stack = [];
    currentInput = result.toString();
    updateDisplay(currentInput);
}
