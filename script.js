let result = 0;
let input = "";
let state = 0; // 0 for new state, 1 for active state
let pressedEqual = 0;

let screen = document.querySelector(".screen");
screen.innerText = result;

let nbrs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let ops = ['÷', 'x', '-', '+', '='] // op stands for operation

function divide(nbr) { return result / nbr }
function multiply(nbr) { return Math.round(result * nbr) }
function subtract(nbr) { return result - nbr }
function add(nbr) { return result + nbr }
function equal() { return result }

let myOps = [divide, multiply, subtract, add, equal]
let lastOp = equal;

document.querySelector(".calculator").addEventListener('click', function(event) {
    let clicked = event.target.innerText;
    if (clicked === 'C') {
        state = 0;
        input = "";
        result = 0;
        screen.innerText = 0;
    }
    else if (clicked === '←' && state === 1) {
        if (input.length !== 1)
            input = input.substring(0, input.length - 1);
        else
            input = "0";
        screen.innerText = input;
    }
    else if (nbrs.includes(clicked)) {
        if (pressedEqual === 1) {
            input = "";
            pressedEqual = 0;
        }
        input += clicked;
        screen.innerText = input;
        state = 1;
    }
    else if (ops.includes(clicked) && state === 1) {
        if (clicked === '=') {
            result = lastOp(parseInt(input))
            screen.innerText = result;
            input = result;
            result = 0;
            pressedEqual = 1;
        }
        else {
            screen.innerText = "0";
            if (result === 0)
                result = parseInt(input);
            else
                result = lastOp(parseInt(input))
            lastOp = myOps[ops.indexOf(clicked)]
            input = "";
        }
    }
});




