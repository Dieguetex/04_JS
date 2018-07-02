// Iteraciones
    // for - MAS IMPORTANTE
    //while
    //do    

function iterar() {
    for (let i = 0; //por donde empiezo a contar
        i < 3; //hasta donde cuento
        i++){    //cuanto subo el contador en cada vuelta
        console.log(`Soy la vuelta ${i+1}`)
        
    }
}

function iteracionInversa() {
    for (let i = 3; //por donde empiezo a contar
        i > 0; //hasta donde cuento
        i--){    //cuanto subo el contador en cada vuelta
        console.log(`Soy la vuelta ${i}`)
    }
}
iterar()
iteracionInversa()
 

/** 
 * Función factorial ()
 * 
 * Producto de un número por todos los que le preceden
 * e.g. 5! = 5 * 4 * 3 * 2 * 1
 * e.g. 5! = 5 
 *      5! = 5! * 4 
 *      5! = 5! * 3
 *      5! = 5! * 2
 *      5! = 5! * 1
 * 
 * e.g. 5! = 1 * 2 * 3 * 4 * 5
 * 
 * @param num: number
 * @return factorial: number
 * 
 */

function factorial(num) {
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i 
    }
    return factorial 
}

console.log(factorial(5)) //120


//este segundo elemento es más eficaz mor microsegundos
function factorialInverso(num) {
    let factorial = 1
    for (let i = num; i > 0; i--) {
        factorial = factorial * i 
    }
    return factorial 
}
console.log(factorialInverso(5)) //120

function totalizar(aDatos) {
    let num = 0
    for (let i = 0; i < aDatos.length; i++) {
        num += aDatos[i];   
    }
    return num
}

aDatos = [2,3,5,7]
console.log(`El total es ${totalizar(aDatos)}`)


//no funciona!! copiar del profesor
function leerArray(aDatos) {
    let r = ''
    for (let i = 0; i < aDatos.length; i++) {
        r += `
        El usuario ${i+1} es ${aDatos[i]}`

    }
    return r
}

let aNombres = ['Pepe', 'Rosa', 'Luis', 'María']
console.log(leerArray[aNombres])