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

// Push methods 
fruits.push ("Peras", "Cerezas"); // OJO! porque modifica el array. 
console.log(fruits); 

// Pop methods remueve el último elemento de unarray y retorna cual fue removido
const removedFruit = fruits.pop();
console.log('Fruits are', fruits);
console.log('Removed fruits is', removedFruit); 