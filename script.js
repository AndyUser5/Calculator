//creating variables

let displayNumber = 0;
let firstNumber = "";
let operationSign;
let secondNumber = "";
let resultNumber = 0;
let opperationMode = "off";
let additionMode = "off";
let subtractionMode = "off";
let multiplicationMode = "off";
let divideMode = "off";
let resetMode = "on";


//updating the display

let display = document.querySelector("#display");

display.textContent = "0";
display.style.cssText = "font-size: 40px;"

let numButtons = document.querySelectorAll(".numbutton");

    numButtons.forEach(function(button) {
        button.addEventListener("click", () => {
            console.log(secondNumber.length)
            if ((firstNumber.length > 11 && opperationMode == "off") || secondNumber.length > 11) {
                return false;
            }
            
            if (resetMode == "on" && opperationMode == "off") {
                resetMode = "off";
                firstNumber = "";
                display.textContent = "";
            }            
            
            if (resetMode == "on") {
                resetMode = "off";
                display.textContent = "";
            }

            if (opperationMode == "off") {
                displayNumber = document.createElement("div");
                displayNumber.classList.add("displayNumbers");
                displayNumber.textContent = button.innerText;
                displayNumber.style.cssText = "font-size: 40px;"
                display.appendChild(displayNumber);
                firstNumber = firstNumber + "" + displayNumber.textContent;
            }
            else if (opperationMode == "on") {
                displayNumber = document.createElement("div");
                displayNumber.classList.add("displayNumbers");
                displayNumber.textContent = button.innerText;
                displayNumber.style.cssText = "font-size: 40px;"
                display.appendChild(displayNumber);
                secondNumber = secondNumber + "" + displayNumber.textContent;
            }
        })
    });

let addButton = document.querySelector("#addbutton");

addButton.addEventListener("click", () => {
    if (opperationMode == "on" && secondNumber != "") {
        equalButton.click();
    }

    if (additionMode != "on") {
        opperationMode = "on";
        additionMode = "on";
        subtractionMode = "off";
        multiplicationMode = "off";
        divideMode = "off";
        resetMode = "on";
        addButton.style.backgroundColor = "#C04000";
        subtractButton.style.backgroundColor = "";
        multiplyButton.style.backgroundColor = "";
        divisionButton.style.backgroundColor = "";
    }
    else {
        additionMode = "off";
        opperationMode = "off";
        addButton.style.backgroundColor = "";
    }
})

let subtractButton = document.querySelector("#subtractbutton");

subtractButton.addEventListener("click", () => {
    if (opperationMode == "on" && secondNumber != "") {
        equalButton.click();
    }

    if (subtractionMode != "on") {
        opperationMode = "on";
        additionMode = "off";
        subtractionMode = "on";
        multiplicationMode = "off";
        divideMode = "off";
        resetMode = "on";
        addButton.style.backgroundColor = "";
        subtractButton.style.backgroundColor = "#C04000";
        multiplyButton.style.backgroundColor = "";
        divisionButton.style.backgroundColor = "";
    }
    else {
        subtractionMode = "off";
        opperationMode = "off";
        subtractButton.style.backgroundColor = "";
    }
})

let multiplyButton = document.querySelector("#multiplybutton");

multiplyButton.addEventListener("click", () => {
    if (opperationMode == "on" && secondNumber != "") {
        equalButton.click();
    }

    if (multiplicationMode != "on") {
        opperationMode = "on";
        additionMode = "off";
        subtractionMode = "off";
        multiplicationMode = "on";
        divideMode = "off";
        resetMode = "on";
        addButton.style.backgroundColor = "#";
        subtractButton.style.backgroundColor = "";
        multiplyButton.style.backgroundColor = "#C04000";
        divisionButton.style.backgroundColor = "";
    }
    else {
        multiplicationMode = "off";
        opperationMode = "off";
        multiplyButton.style.backgroundColor = "";
    }
})

let divisionButton = document.querySelector("#divisionbutton");

divisionButton.addEventListener("click", () => {
    if (opperationMode == "on" && secondNumber != "") {
        equalButton.click();
    }

    if (divideMode != "on") {
        opperationMode = "on";
        additionMode = "off";
        subtractionMode = "off";
        multiplicationMode = "off";
        divideMode = "on";
        resetMode = "on";
        addButton.style.backgroundColor = "";
        subtractButton.style.backgroundColor = "";
        multiplyButton.style.backgroundColor = "";
        divisionButton.style.backgroundColor = "#C04000";
    }
    else {
        divideMode = "off";
        opperationMode = "off";
        divisionButton.style.backgroundColor = "";
    }
})

let equalButton = document.querySelector("#equals");

equalButton.addEventListener("click", () => {
    addButton.style.backgroundColor = "";
    subtractButton.style.backgroundColor = "";
    multiplyButton.style.backgroundColor = "";
    divisionButton.style.backgroundColor = "";
    if (additionMode == "on") {
        resultNumber = roundToElevenDigits(Number(firstNumber) + Number(secondNumber));
    }
    else if (subtractionMode == "on") {
        resultNumber = roundToElevenDigits(Number(firstNumber) - Number(secondNumber));
    }
    else if (multiplicationMode == "on") {
        resultNumber = roundToElevenDigits(Number(firstNumber) * Number(secondNumber));
    }
    else if (divideMode == "on") {
        resultNumber = roundToElevenDigits(Number(firstNumber) / Number(secondNumber));
    }

    //reconvert to string to check length
    console.log(resultNumber)
    resultNumber = resultNumber.toString();
    if (resultNumber.includes('e')) {
        window.alert("Number too big, answer was " + resultNumber)
        resultNumber = "999999999999"
    }
    else if (resultNumber.length > 11) {
        resultNumber = resultNumber.slice(0, 12);
    }
    resultNumber = Number(resultNumber);

    display.textContent = resultNumber;
    display.style.cssText = "font-size: 40px;"
    opperationMode = "off";
    firstNumber = resultNumber;
    secondNumber = "";
    resetMode = "on";
    additionMode = "off";
    subtractionMode = "off";
    multiplicationMode = "off";
    divideMode = "off";
})

let clearButton = document.querySelector("#clearbutton")

clearButton.addEventListener("click", () => {
    display.textContent = "0";
    display.style.cssText = "font-size: 40px;"
    firstNumber = "";
    secondNumber = "";
    additionMode = "off";
    subtractionMode = "off";
    multiplicationMode = "off";
    divideMode = "off";
    opperationMode = "off";
    resetMode = "on";
    addButton.style.backgroundColor = "";
    subtractButton.style.backgroundColor = "";
    multiplyButton.style.backgroundColor = "";
    divisionButton.style.backgroundColor = "";
})

function roundToElevenDigits(number) {
    return parseFloat(number.toFixed(11));
}
