let length;
let width;

function calculateArea() {

    length = parseFloat(document.getElementById("width").value);
    width = parseFloat(document.getElementById("length").value);

    let area = length * width;

    // El return especifica cual es el ouput de la función. 
    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;

}

let grocery1;
let grocery2;
let grocery3;

function calculateGrocery() {
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);

    let totalAmount = grocery1 + grocery2 + grocery3;

    document.getElementById("resultAmount").innerText = `The total amount is: $ ${totalAmount}`;

}

let count = 0;

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {

    if (count === 10) {
        alert("10 followers")

    } else if (count === 20) {
        alert("20 followers")

    }

}

function resetCount() {

    count = 0;
    alert("Fue reseteado tus followers.");
    displayCount();
}