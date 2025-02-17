// ----------------------------------------------------------------------------------------------
// Operadores
// Aritméticos 
let x = 15;
let y = 3;
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y; //division
let remainder = x % y;

// Comparación de valores y variables 

let a = 5;
let b = 7;

let isEqual = a == b; // Igualdad (es coercitivo, castea los valores para que sean iguales)
let isNotEqual = a != b; // NoIgualdad 
let isStrictEqual = a === b; // Igualdad estricta (incluye el valor del tipo de datos)
let isStrictNotEqual = a !== b; // Igualdad no estricta
let isGreaterThan = a > b;
let isLessThan = a < b;
let isGreaterOrEqual = a >= b;
let isLessOrEqual = a <= b;

// Lógicos 
let hasPermission = true;
let isMember = false;
let canAccessResource = hasPermission && isMember; // And
let canViewPage = hasPermission || isMember; // Or
let isDenied = !hasPermission; // Not

// console.log(canAccessResource)
// console.log(canViewPage)
// console.log(isDenied)

// Asignación 
let asign = 10;
asign += 5;
// console.log(asign)

// Unario
let count = 5;

count++; // incrementa de a uno
count--; // Desincrementa de a uno 

// Tipo de...
let myVar = 42;
let varType = typeof myVar;

console.log(`La variable is de tipo ${varType}`)

// Estructura de condicional
let myValue = 'Hello World'
if (typeof myValue == "string") {

    console.log("myValue is a String");
} else {
    console.log("myValue is not a String");
}

let result = 10 / 2;
console.log(`The tyoe of the expression result is: ${typeof result}`);

// Tener en cuenta la diferencia entre '' y ``. Este último sirve para usar ${}
// typeof devuelve: undefined, object, boolean, number, string


// Expresiones: combinaciones de valores, variables y operadores. 
// Produce un solo valor. 
// Pueden ser simple o complejo

// Casos de expresiones

// Aritmeticas 
let sumA = 5 + 3;

// Expresiones
let xA = 10;
let resultA = x * 2;

// Funciones que llaman expresiones
function square(number) {

    return number * number;

}

let squaredValue = square(4);

// Expresiones condicionales (ternary)
// Ojo cómo se carga la información, si yo asigno después del canVote el condicional sigue siendo 20
let ageA = 20;
ageA = 10;
let canVote = ageA >= 18 ?
    "Yes" : "No";
// ----------------------------------------------------------------------------------------------
// Flujo de control y sentencias Condicionales
// Control flow: orden de la ejecución de las sentencias
// Conditional statements: administra con condicionales la ejecución de las sentencias


// Condiontal statement: if, else if, else, nested, switch, ternary

// if
let ageB = 25;

if (ageB >= 18) {

    console.log(`Sos adulto porque tu edad es ${ageB}`)

} else {

    console.log(`Nos sos adulto porque tu edad es ${ageB}`)
}

// else
let timeB = 12;

if (timeB < 12) {

    document.getElementById("timemessage").textContent = "Buenos días!";

}

else if (timeB < 18) {

    document.getElementById("timemessage").textContent = "Buenas Tardes";

} else {

    document.getElementById("timemessage").textContent = "Buenas noches";

}

// Nested 
const temperature = 30;
const isRaining = true;

if (temperature > 30) {
    if (isRaining) {
        console.log(`Está caluroso y lluve. La temperatura es ${temperature}`);
    } else {
        console.log(`No llueve pero está caluroso. La temperatura es ${temperature}`);
    }

} else {

    if (isRaining) {
        console.log(`No es tan calurose, pero llueve. la temperatura es ${temperature}`);
    } else {

        console.log(`No está caluroso y no llueve. La temperatura es ${temperature}`);

    }

}

// Switch (parecido al case when)
let day = "Monday";

switch(day){
    case "Monday":
        console.log("Comienzo de la semana");
        break; // Detiene la ejecución si es TRUE
    case "Friday": 
        console.log("Es casi el final de la semana");
        break; 
    default: 
        console.log("Es un día regular");
}

// Ternarios 
ageA = 10;
let canVoteA = ageA >= 18 ?
    "Yes" : "No";

// Looping and interaction 




