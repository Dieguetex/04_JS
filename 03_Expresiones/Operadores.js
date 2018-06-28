function incrementos () {
    // Añadir o quitar valor pre-Incrementos / post-Incrementos - Dependiendo de si se usa con pregijo o sufujo
    let x = 23
    let y
    y = x++ // Se incrementa despues de realizar la operación / y = 23 / x = 24 /
    y = ++x // Se incrementa antes de realizar la operación / x = 24 / y = 24
    console.log(x, y)

    // Decrementos
    y = x-- // Se resta despues de realizar la operación
    y = --x // Se resta antes de realizar la operación
}

function asignaciones () {
    let x = 2
    x += 1 // x = x + 1
    x = 2
    x -= 1
    x = 2
    x *= 3
    x = 2
    x %= 2 //el resto de una división
}

// incrementos()
asignaciones()

// Función para ver si un nupero es par o impar

function esPar (num) {
    let isPar = true
    // compruebo si NO eres par
    // if (num % 2 != 0) {
        /* Por qué no es necesario el !=0 MAS ABAJO */
    if (num % 2) {
        isPar = false
    } 
    return isPar
}

function esPar2 (num) {
    let isPar = false
    // compruebo si SI eres par
    if (num % 2 == 0) {
        isPar = true
    } 
    return isPar
} 
//console.log('22 es par?', esPar(22))
//console.log('25 es par?', esPar(25))


// Castings a booleans
console.log(Boolean(22))


// Valores falsy:
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

// Valores truly:
console.log(Boolean(true))
console.log(Boolean(/* todos los numeros menos 0 son true */109))
console.log(Boolean(/* Cualquier cosa entre comillas */'Pepe'))





 