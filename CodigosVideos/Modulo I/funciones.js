// Funciones 

// empieza con la palabra function
// le damos nombre a la función 
// () establece que es una función 
// {} dentro está el código de la función 

function sayHello(){
    console.log("Hello World");
}

sayHello(); 

// Las funciones se pueden categorizar en funciones parametrizadas y funciones no parametrizadas.
// No parametrizadas 
function addNP(){
    const a = 3; 
    const b = 4;
    return a + b;
}

document.getElementById("functiondata1").innerText = addNP(); 

// Parametrizadas incluye inputs (argumentos) 
function addP(a,b){

    return a + b;
    
}

document.getElementById("functiondata2").innerText = addP(3,4); 

// Parametros son variables definidas en la declaración dentro de la función
// Arguments: son los valores que le pasamos

// Dos maneras diferentes de escribir funciones: function declaration (tradicional) y function expression 


// Types of functions
// Named functions

const add = function(a,b){
    console.log(a+b);
}

add(2, 3);

// IIFE: definidas y ejecutadas inmediatamente 
(function sayHelloWorld(){
    console.log("Hello")
})();

// Arrow function
const square = (x) => x*x; 

// Anonymous function

// ----------------------------------
// ECMA
// Arrow function
// (a,b) son los parametros
// a*b el cuerpo de la función
const multiply = (a,b) => a*b;

// Se pueden clasificar en funciones parametrizadas y funciones no parametrizadas
// Parametrizadas
const addArrow = (a,b) => a+b;
console.log(addArrow(3,4));

// No parametrizadas 
const greet = () => {
    console.log("Hello, World!")
};

greet(); 

// Return statemente es aquello que indicamos que sea devuelto por la función. 
const addReturn = function(a,b){
    return a+b;
}

const resultado = addReturn(2, 3);

// El return especifica cual es el ouput de la función. 
document.getElementById("functiondata3").innerText = addReturn(3,10);

// Function closure: restricción de acceso a las variables, crea variables privadas
// implementa data oculta. 

function outerFunction(){

    const outerVar = "I am from the outer function";
    function innerFunction(){
        console.log(outerVar);
    }
    
    return innerFunction;
}

const closure = outerFunction();
closure()

// Beneficios crea ambientes privados, permite el mantenimiento y previene la interferencia o modificación
// Oculta datos y mejora la seguridad. 

function greetPerson(name){
    const greeting = "Hello, ";
    function sayHello(){
        console.log(greeting + name)
    }

    return sayHello; 
}

const greetJohn = greetPerson("John");
const greetAlice = greetPerson("Alice");

greetJohn();
greetAlice();

// Function hosting (primero se llama a la función y después se declara)
sayHelloPerson();

function sayHelloPerson(){
    console.log("Hello Apps!");
}