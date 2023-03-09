const numberElements = document.getElementsByClassName('calc_number');
const signElements = document.getElementsByClassName('calc_sign');
const result = document.getElementById('result');
const resultList = document.getElementById('result_list');
let firstInput = true;

// for(let i=0 ; i < numberElements.length ; i++) {
//     numberElements[i].addEventListener('click', () => {})
//}

// Array.from(numberElements).forEach(element => {
//     element.addEventListener()
// });

for(const numberElement of numberElements) {
    numberElement.addEventListener('click', () => {
        buttonListener(numberElement);
    })
}

for(const signElement of signElements) {
    signElement.addEventListener('click', () => {
        buttonListener(signElement);
    })
}

const buttonListener = (button) => {
    if(button.innerText == '=') {
        calculate()
    } else {
        display(button.innerText);
    }
}

const clearResult = () => {
    result.innerText = '';
}

const display = (value) => {
    if(firstInput) {
        clearResult();
        firstInput = false;
    }
    result.innerText += value;
}

const calculate = () => {
    let res = eval(result.innerText); //ANVÄND EJ EVAL!!!
    display('=' + res);
    firstInput = true;
    displayResult(result.innerText);
}

const displayResult = (value) => {
    const listItem = document.createElement('li');
    listItem.innerText = value;
    resultList.appendChild(listItem);
}

