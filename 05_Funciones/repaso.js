//las funciones actuan como objetos, por lo que todas estas opciones son posibles. Donde hay una funcion se puede sustituir como un objeto.               

function algo(x) {
}

let o = function () {
   let o1 = function () {}
}


algo(o)
algo({})


// FORMAS DE CREAR FUNCIONES

//declaración
function suma1(a,b) {
    return a+b
}//forma típica

//asignación
let suma2 = function(a,b) {
    return a+b
}//forma inevitable actuando como objeto.

let z = suma1(5,6)
console.log(z);
console.log(suma2(5,6));


//ES6 Funciones Arrow o Lambdas

let suma3 = (a,b) => {return a+b}
//Lo mismo arriba que abajo
let suma3b = (a,b) => a+b
//sirven para crear function anonimas y usarlas como callback

let cuadrado = a => a*a