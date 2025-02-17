// Events
// click, mouseover, keydown, change

// Click event: trigger when the user clicks on the element

const button = document.getElementById("myButton");
const output = document.getElementById("output");
button.onclick = function () {

    if (output.textContent === "") {

        output.textContent = "Button clicked!";
    } else {
        output.textContent = "";
    }
}

// Mousseover event
const div = document.getElementById("myDiv");
const outputDiv = document.getElementById("outputDiv");

div.onmouseover = function(){

    outputDiv.textContent = "Mouse over the div";

}

// Keydown event
const inputKey = document.getElementById("myInput");
const outputInput = document.getElementById("outputInput");

inputKey.onkeydown = function(event){
    outputInput.textContent = `Key pressde: ${event.key}`;
}

// On change
const myInputChange = document.getElementById("myInputChange");
const outputChange = document.getElementById("outputChange");

myInputChange.onchange = function(){
    outputChange.textContent = `Cambio en el valor: ${myInputChange.value}`;
}

// Add event listener 
const miBoton = document.getElementById("miBoton"); 

// Add event listener for click event
miBoton.addEventListener('click', handleButtonClick);

// Function to handle button click
function handleButtonClick(){
    console.log('Button clicked!');
}