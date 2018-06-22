/*
Dos tipos de funciones
    -Funciones puras, sin "side effects" -> retornan datos
    -Funciones con efectos
    -funcion main

En muy buena práctica no mezclamos los dos tipos de funciones.
*/

//PURA
function suma(a,b) {
    let resultado = a+b
    return resultado
}

//CON EFECTOS
function mostrar(pDato) {
    console.log(pDato)
}

function main() {
    mostrar (suma(2,5))
    mostrar (suma(45,172354))
}

main ()