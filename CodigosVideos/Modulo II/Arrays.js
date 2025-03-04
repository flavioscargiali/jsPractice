// Arrays: data structure para almacenar y organizar valores (numbers, strings, objects, arrays)
// Order and indexing: el primer elemento es 0, el segundo es el 1. 

const myArray = [];
const fruits = ["apple","banana", "cherry"];

// Index
const firsFruite = fruits[0];
const secondFruit = fruits[1];
console.log(fruits)

// Length 
const numFruits = fruits.length;

// Mutability 
// Se puede cambiar, agregar o remover elementos
fruits[2] = "strawbeery";
console.log(fruits)

// Array method: push, pop, shift, unshift, splice, concat, slice, indexOf, reverse, sort, length, map, filter, etc.
// Methods sirven para manipular y trabajar con arrays. 
console.log(fruits.push("orange"));
console.log(fruits); 
console.log(fruits.pop());
console.log(fruits);

// Nested arrays: complex data structure 
const matrix = [[1,2,3],[4,5,6],[7,8,9]]; 
console.log(matrix); 

// Push methods: agregar un nuevo elemento al array
fruits.push ("Peras", "Cerezas"); // OJO! porque modifica el array. 
console.log(fruits); 

// Pop methods: remueve el último elemento de unarray y retorna cual fue removido
const removedFruit = fruits.pop();
console.log('Fruits are', fruits);
console.log('Removed fruits is', removedFruit); 

// Shift methods: es la inversa de pop. Guarda y remueve el primero elemento del array
const removedFruitPrimero = fruits.shift();
console.log(`Remove fruit is ${removedFruitPrimero}`); 

// Unshift methods agrega elementos al comienzo y devuelve la length.
fruits.unshift("Frutillas", "manzanas");
console.log(fruits);

// Splice methods: remueve, reemplaza y agrega elementos.
fruits.splice(1,1, "Uva"); // Reemplaza el elemento con Uva.
console.log(fruits); 

// Concat method: combina dos o más arrays. 
const additionalFruits = ["naranjas", "sandias"];
const combinedFruits = fruits.concat(additionalFruits);
console.log(`combinedFruits are`, combinedFruits);

// slice method: devuelve una copia de una porción de un array
const slicedFruits = fruits.slice(0,3);
console.log("slicedFruits are", slicedFruits); 

// IndexOf method devuelve el indice de un elemento especifico
const index = fruits.indexOf("Uva");
console.log("Index of Uva is", index);

// Reverse method: invierte el orden de los elementos en un array 
// No es un orden alfabetico
fruits.reverse();
console.log(fruits); 

// Sort: ordenar alfabeticamente
const numbers = [10, 3, 11, 1, 4];
numbers.sort(); // Ordena como String. 
console.log(numbers);
numbers.sort((a,b) => a-b); // Función para ordenar numericamente
console.log(numbers);

// Lenth: devuelve la cantidad de elementos de un array pero también se puede setear la cantidad de elementos.
// Pueden agregarse undefined elements,

const nFruits = fruits.length;
console.log(nFruits);
fruits.length = 10;  // Agrega elementos undefined
console.log(fruits);
fruits.length = 5;  // Trunca la cantidad de elementos
console.log(fruits);

// Array iteration: Loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
};


// Array methods: forEach, Map, Filter, Reduce, Find
// forEach itera sobre el array y aplica la función a cada elemento
function sendWelcomeEmail(email){

    console.log(`Welcome email sent to ${email}`);

}

const users = [
    {name : 'Alice', email: 'alice@example.com'},
    {name : 'Maca', email: 'Maca@example.com'},
    {name : 'Pepe', email: 'Pepe@example.com'},
];

console.log(users)

users.forEach((user) => {
    sendWelcomeEmail(user.email);
});


// Map methods: crea un nuevo array y aplica una función a cada elemento
// Sirve para transformar datos sin modificar el array original

const products = [
    {name: 'Laptop', price:1000},
    {name: 'SmartPhone', price:500},
    {name: 'Tablet', price:300},
    {name: 'Monitor', price:250},
    {name: 'Keyboard', price:50}
];

products.map((product) => {

    console.log(`The price of ${product.name} is $ ${product.price}`);
});

// Filter methods: crea un array nuevo que contiene elementos que cumplen con cierta condición 
function filterProductsByPriceRange(products, minPrice, maxPrice){

    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice)

};

const minPrice = 100; 
const maxPrice = 500; 

const filterdProducts = filterProductsByPriceRange(products,minPrice,maxPrice);

filterdProducts.forEach((product) =>{
    console.log(`${product.name} is of $ ${product.price}`); 
});

// Reduce method: reduce el array a un solo valor y se usa para agregar datos
// El 0 se asigna a total
const orderPrice = [50,30,25,40,15]
const totalOrderValue = orderPrice.reduce((total,price) => total + price, 0);
console.log(`The total value of the order is ${totalOrderValue}`);

// Find method: devuelve el primer elemento que cumple con la condicion
// Uso del \n para aplicar un salto de linea en el console.log
const employees = [
    {id: 1, name: "Alice", Eid: "EMP001"},
    {id: 2, name: "Maca", Eid: "EMP002"},
    {id: 3, name: "Pepe", Eid: "EMP003"}
]

const employee = employees.find((e) => e.id === 2); 
console.log(`\nName:', ${employee.name} \nId: ${employee.Eid}`);

// Matrices bidemensionales (organizados en columnas y filas)
const grid = [

    [1,2,3],
    [4,5,6],
    [7,8,9]
];


for (let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length;j++){
        console.log(`Element at (${i}, ${j}): ${grid[i][j]}`);
    }
}

// Clases  y Objetos en JS
// Class template para crear objetos en JS. Encapsula propiedades, funciton, metodos y datos. 
// Una clase que se llama persona puede tener como propiedad (name, age) y como method (syaHello)


// Objetc es una instancia especifica de una clase. Representa
// entidad con valores unicos. Encapsula estados y compartamiento en una 
// unidad simple. 
// Se puede crear un objeto persona con person1 y las propiedades (name y age), otra persona 2 
// con las misma propiedades. 

// Classes 
class Persona{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Persona("John","Doe");
console.log(person1.getFullName());

// Objetcs in JS
class Car{

    constructor(make, model, year){

        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine(){
        console.log(`The ${this.model}'s engine is running make in ${this.make}.`)
    }
}

const myCar = new Car("Toyota", "Camry", 2022);
myCar.startEngine(); 

// Object literals
const person = {
    firstName: 'Alice',
    lastName: 'Johnson',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.getFullName());

// Con las clases yo puedo cambiar, en cambio con los objetos literales
// se imprime lo definido dentro de la const. 


// Acceso a las propiedades de los objetos
// . and // notation

const personN = {
    firstName: 'John',
    lastName: 'Doe',
    age:30
};

console.log(personN.firstName);
console.log(personN["firstName"]);

// Array of objects
const students = [
    {name: 'Alice', age:25},
    {name: 'Bob', age:22},
    {name: 'Charlie', age:28}
]

console.log(students[0].name);
console.log(students[2].age)


//Modifying elements
students[1].name = 'Robert';

// Loop
for (let i = 0; i < students.length; i++){
    console.log(students[i].name);
};

students.forEach(function(student){
    console.log(student.name);
});

// Push mehod: para agregar nuevo elemento al array
students.push({name: 'Macarena', age: 30});
console.log(students);

// Pop method: remueve el último elemnento
const removedStudent = students.pop();
console.log(students);

// Filter (filtra un array) and map (genera un nuevo array a partir de una propiedad de otro array)
const adults = students.filter(student => student.age >= 23);
const studentNames = students.map(student => student.name);

console.log(adults);
console.log(studentNames); 

// con + se puede concatenar STRING
const firsNameStr = "Peter";
const greeting = "Hello, " + firsNameStr + '!';
console.log(greeting);
const stringLen = greeting.length;

// Acceso a los caracteres 
const firstStr = firsNameStr[0];
console.log(firstStr);

// Methods
const sentence = "The quick brown fox jumps over the lazy dog.";
const hasFox = sentence.includes("fox");
const indexOfFox = sentence.indexOf("fox");

// substring 
const text = "Hello, World";
const subText1 = text.substring(0,5); // Hello
const subText2 = text.slice(7); // World!
const subText3 = text.substring(7,5); // world!

// Replace
const updatedText = text.replace("World", "Universe"); 
console.log(updatedText);

// Spliting: separar por caracteres 
const csvData = "Alice, 25, NY, Bob, 30, Los Angeles;Charlie, 28, Chicago";
const peopleArray = csvData.split(';');
console.log(peopleArray); 

// Trim: Limpiar espacios 
const textTrim = "Trim me!    ";
const timmedText = textTrim.trim(); 
console.log(textTrim + " " + timmedText); 

// Introducción a las matematicas
// Basic math operations
// Rounding numbers (Ojo que Math no existe)
const numbersMaths = 3.6; 
const rounded = Math.round(numbersMaths);
const ceil = Math.ceil(numbersMaths); 
const floor = Math.floor(numbersMaths);

console.log(rounded);
console.log(ceil);
console.log(floor);

// Exponential and Log
const base = 2; 
const exponent = 3; 

const power = Math.pow(base, exponent); // Exponencial
const squareRoot = Math.sqrt(base); // Raiz cuadrada
const naturalLog = Math.log(base); // Log natural

// Random 
const random = Math.random();

// Date Object 
// Creating 
const currentDate = new Date(); // Currente date
const specificDate = new Date(2023, 0, 15) // 15 de enero


const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // (del 0 al 11)
const day = currentDate.getDate(); // se puede hours(0-23), minutes (0 -59), seconds;
console.log(year + '-' + month + ' '+ day);

// Formatting dates 
// Para ajustar la fecha a la configuración local
const formattedDate = currentDate.toLocaleDateString(); 
const formattedTime =  currentDate.toLocaleTimeString(); 

// Timing Function 
// setTimeout: demora la ejecución unos milesegundo
setTimeout(function(){
    console.log("dos segundos");
}, 2000);

// setInterval




