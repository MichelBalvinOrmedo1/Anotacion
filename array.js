let lstFrutas = [];

lstFrutas[0] = "Manzana"
lstFrutas[1] = "pera";

//Recorrer un array
console.log("-------------------------------")
lstFrutas.forEach(element => (console.log(element)));

lstFrutas.forEach(element => {
    console.log(element);
});
console.log("-------------------------------")

//Saber cantidad de elementos de un array
console.log(lstFrutas.length)
console.log("-------------------------------")

//Añadir un Elemento al Final de un array
let nuevaLongitud = lstFrutas.push('naranja');
console.log(nuevaLongitud)
console.log("-------------------------------")

//Eliminar el ultimo Elemento de n Array
console.log(lstFrutas)
let ultimo = lstFrutas.pop();
console.log(lstFrutas);

console.log("-------------------------------")
//El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
let array1 = [1,2,3];
console.log(array1)
let nuevosEle = array1.unshift(4,5,6);
console.log(array1)
console.log("-------------------------------")

//El método shift() elimina y devuelve el primer elemento de un arreglo.
let array2 = ['mono','Platano','coco'];
console.log(array2);
let elimin = array2.shift();
console.log(array2)

console.log("-------------------------------")

/*
El método slice() devuelve una copia de una parte del array 
dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
    
*/
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 2);
console.log(masculinos)

console.log("-------------------------------")
// Determina si todos los elementos en el array satisfacen una condición.

//Si hay mayores de edad;
const array3 = [18,19,20,25];

console.log(array3.every(element => element >= 18));
/// SI hay un menor de edad
console.log(array3.every(element => element < 18));

