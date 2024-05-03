
const display = document.getElementById("display");

function appendtoDisplay(input){
    display.value += input;
}



function clearDisplay(){
    display.value = " ";
}

function calculate(){
    try{
        display.value = eval(display.value);/*fonction qui sert a calculer */
    }
    catch(error){
        display.value = error;
    }
}