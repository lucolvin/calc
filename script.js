const display = document.getElementById("display");

function appendToDisplay(input) {
    // Lets user input override the error message to provide a seamless user experience
    if (display.value === 'Error') {
        display.value = '';
        display.value += input;
    }
    else if (display.value === 'undefined') {
        display.value = '';
        display.value += input;
    }
    else if (display.value === 'NaN') {
        display.value = '';
        display.value += input;
    }
    else if (display.value === 'function Error() {    [native code]}') {
        display.value = 'Error';
        // display.value += input;
    }
    else if (display.value === 'Infinity') {
        display.value = '';
        display.value += input;
    }
    else if (display.value != 'Error') {
        display.value += input;
    }
    // display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try{
        display.value = eval(display.value);
        if (display.value === 'Infinity') {
            display.value = 'Error';
        }
        else if (display.value === 'undefined') {
            display.value = 'Error';
        }
        else if (display.value === 'NaN') {
            display.value = 'Error';
        }
        else if (display.value === 'function Error() {    [native code]}') {
            display.value = 'Error';
        }
    }
    catch(error){
        display.value = 'Error';
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}