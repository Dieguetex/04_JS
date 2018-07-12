let oDatos = {}
// oDatos = new Object()

let aDatos = [1,2]
// aDatos = new Array()

/* console.log(aDatos.length)
aDatos[10] = 4
console.log(aDatos)
console.log(typeof aDatos[7])
aDatos[7] = 'Pepe'
aDatos[5] = {} */

console.log(aDatos + [3,4])
console.log(aDatos.concat([3,4]))



//      OPERACIONES CON ARRAYS

// CLONAR (MAL) Y ORDENAR ALFABÉTICAMENTE
let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
aNombresOriginal = aNombres.join('|').split('|')
console.log('La cadena original es: '+aNombresOriginal)
console.log('La cadena resultante ordenada es: '+aNombres.sort())


console.log(' ' 
)
console.log(' '
)


// SLICE
aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
let aNombresCorto = aNombres.slice(1,4)
console.log('El slice original es: '+aNombres)
console.log('El slice resultante es: '+aNombresCorto)


console.log(' ' 
)
console.log(' '
)


// CLONAR (BIEN)
aClon = aNombres.slice(0,aNombres.length)
aClon.push('Juan')
console.log('Esto es un clon de aNombres con Juan: '+aClon)



console.log(' ' 
)
console.log(' '
)


// SPLICE
let aElegidos = aNombres.splice(1,2,'Carlos','Juan')
console.log('La cadena original es: '+aNombres)
console.log('El splice resultante es: '+aElegidos)

console.log(' ' 
)
console.log(' '
)


aClon2 = aNombres.slice(0,aNombres.length)
aClon2.push('Juan','Rosa')
console.log('Esto es un clon de aNombres con Juan y Rosa: '+aClon)