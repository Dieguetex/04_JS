let cadena = 'Pepe'
let frase = 'Un anillo para todos'
console.log(cadena.length)
// Los dos siguientes es lo mismo, pero nadie usa el 1
console.log(cadena.concat(' Peréz'));
console.log(cadena + ' Peréz');

// El splito convierte el string en un array, usando como separador lo que tu le pases entre paréntesis
/* aCadena = cadena.split('')
console.log(aCadena)
aFrase = frase.split(' ')
console.log(aFrase)
console.log(aFrase.join('')) */

console.log(frase.split(' ').join('').toUpperCase())
console.log('Pérez'.toLowerCase())

console.log('ciudades'.slice(2,5))
console.log('ciudades'.substring(2,5))
console.log('ciudades'.substr(2,3))



// función que capitaliza la primera letra de cada palabra
function capitalizar(cadena) {
    let aTexto = cadena.split(' ')

    for (let i = 0; i < aTexto.length; i++) {
        let palabra = aTexto[i]
        let aLetras = palabra.split('') 
        aLetras[0] = aLetras[0].toUpperCase()
        palabra = aLetras.join('')
        aTexto[i] = palabra  
    }
    let stringCap = aTexto.join(' ')
    return stringCap
}

console.log(capitalizar('Un anillo para todos'))


// La misma de arriba pero condensada
function capitalizar2(cadena) {
    let aTexto = cadena.split(' ')
    for (let i = 0; i < aTexto.length; i++) {
        let aLetras = aTexto[i].split('')
        aLetras[0] = aLetras[0].toUpperCase()
        aTexto[i] = aLetras.join('')
    }
     
    return aTexto.join(' ')
}

console.log(capitalizar2('Un anillo para todos'));

console.log(String.fromCharCode(65))



