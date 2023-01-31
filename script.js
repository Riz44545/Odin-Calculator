const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const operators = document.querySelectorAll('.op');
const err = document.querySelector('.placetoSee');

let opClicks = 0;

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}


Array.from(operators).forEach((x) => {
    x.addEventListener('click', () => {
        opClicks += 1;
        if(opClicks >= 1) {
            screen.value = roundToTwo(Number(eval(screen.value)));
            opClicks = 0;
        }
    })
})


Array.from(buttons).forEach((x) => {
    x.addEventListener('click', () => {
        screen.value += x.textContent;
    })
})

equalBtn.addEventListener('click', () => {
    try {
        screen.value = roundToTwo(Number(eval(screen.value)));
    } catch (error) {
        let text = screen.value;
        let newText = Array.from(new Set(text.split(''))).join("")
        screen.value = roundToTwo(Number(eval(newText)));
    }
    
})

clearBtn.addEventListener('click', () => {
    screen.value = '';
})