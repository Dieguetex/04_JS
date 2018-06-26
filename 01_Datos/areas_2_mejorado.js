function calcularCirculo(radio) {
    return Math.PI*radio*radio
}
//este no hace nada, está de ejemplo desarrollado
function mostrar(circulo) {
    let mensaje = 'El resultado es'
    console.log(mensaje, circulo)    
}

//concatenación con el símbolo '+' 
function mostrarCirculo(radio, circulo) {
    /* let mensaje = ' '
    mensaje +=  radio
    mensaje += ' es '
    mensaje += circulo */
    let mensaje = 
    `El área del círculo de radio ${radio} es ${circulo}`
    console.log(mensaje)
}


//CIRCUNFERENCIA DEL CÍRCULO
function calcularCircunf(radio) {
    return Math.PI*2*radio.toFixed(2)
}

function mostrarCircunf(radio, circunf) {
    let mensaje = 
    `Circunferencia del círculo de radio ${radio} es ${circunf}`
    console.log(mensaje)
}

function main()/* : void */ {
    let radio = 3
    mostrarCirculo(radio, calcularCirculo(radio))
    radio = 7
    mostrarCirculo(radio, calcularCirculo(radio))

    mostrarCircunf(radio, calcularCircunf(radio))
}

main()