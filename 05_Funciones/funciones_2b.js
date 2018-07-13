function verResultados(x, y, operacion) {
    let r
    if (typeof operacion === 'function') {
        r = operacion(x,y)
    }
    console.log('El resultado es ' + r);
} 

function sumaCuadrados (a,b) {
    return a*a+b*b
}

function sumaCubos(a,b) {
    return a*a*a+b*b*b
}

verResultados(2,3, sumaCuadrados)
verResultados(2,3, sumaCubos)

verResultados(2,3, function(a,b) {return a*a+b*b})
verResultados(2,3, function(a,b) {return a*a*a+b*b*b})

//Asincronía-->esta funcion tiene dos parametros... 1: lo que quieres que se ejecute y 2: cuando quieres que se ejecute. El proceso no se para y espera a que se ejecute la función, si no que sigue ejecutando el resto del código
setTimeout(
    function() {
        console.log("Han pasado 3 segundos")
    }, 3000
)

function saludar() {
    console.log('Hola');
    i++
    if (i > 10) {
        clearInterval(handler)
    }
}
let i = 0
let handler = setInterval(saludar, 1000)
