const buttons = document.querySelectorAll("button");
const display = document.querySelector("input")
let value = '';

// Add Event Listener on each button

Array.from(buttons).forEach(function(button){
    button.addEventListener('click',function(e){
    value+=button.textContent;
    display.value=value;
    if(button.textContent=="C"){
        value="";
        display.value="";
    }
    if(button.textContent=="="){
        // calculate(value);
        display.value=calculate(value);
        console.log(display.value);
        value="";

    }
    })
})

// Calculate the value 

function calculate(value){
    let equation = value.substring(0,value.length-1);
    let result = eval(equation);
    // console.log(result);
    return result;

}


