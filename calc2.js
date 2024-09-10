const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operation = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

        if (parseFloat(value) || value === '0' || value === '.') {
            currentInput += value;
            display.value = currentInput;
        }
        if (['+', '-', '*', '/'].includes(value)) {
            previousInput = currentInput;
            operation = value;
            currentInput = '';
        }
        if (value === '=') {
            let result = calculate(previousInput, currentInput, operation);
            display.value = result;
            currentInput = result;
        }

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operation = null;
            display.value = '';
        }
        if (value === '←') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        }
    });
});
function calculate(previous, current, operation) {
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    let result;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    return result;
}
