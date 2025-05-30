// 1. Crea un array que almacene cinco animales

// 2. Añade dos más. Uno al principio y otro al final

// 3. Elimina el que se encuentra en tercera posición

// 4. Crea un set que almacene cinco libros

// 5. Añade dos más. Uno de ellos repedito

// 6. Elimina uno concreto a tu elección

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

// SOLUCIONES

// 1. Crea un array que almacene cinco animales

let arrayAnimales = ["Perro", "Gato", "Tortuga", "Serpiente", "Pájaro"];
console.log(arrayAnimales);

// 2. Añade dos más. Uno al principio y otro al final

arrayAnimales.unshift("Pez"); // añado al principio del array
arrayAnimales.push("Cabra"); // añado al final del array
console.log(arrayAnimales);

// 3. Elimina el que se encuentra en tercera posición

arrayAnimales.splice(2, 1);
console.log(arrayAnimales);

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"]);
console.log(mySet);

// 5. Añade dos más. Uno de ellos repedito

mySet.add("LibroAñadido", "Libro2");
console.log(mySet);

// 6. Elimina uno concreto a tu elección

mySet.delete("Libro3");
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
  ["01", "Enero"],
  ["02", "Febrero"],
  ["03", "Marzo"],
  ["04", "Abril"],
  ["05", "Mayo"],
  ["06", "Junio"],
  ["07", "Julio"],
  ["08", "Agosto"],
  ["09", "Septiembre"],
  ["10", "Octubre"],
  ["11", "Noviembre"],
  ["12", "Diciembre"],
]);

console.log(myMap.get("05"));

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.get("05"));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let myArray = ["Junio", "Julio", "Agosto"];

myMap.set("13", myArray);

console.log(myMap.get("13"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = ["Pablo", "Elisa", "Tina"];

mySet2 = new Set(myArray2);

console.log(mySet2);

let myMap2 = new Map([["01", mySet2]]);

console.log(myMap2);
