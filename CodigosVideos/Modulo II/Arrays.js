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




