/* 
    Tipos de datos
    -ELEMENTALES
        -number
        -string
        -boolean
    -REFERENCIADOS
        -object
    -undefined
*/

// TIPOS ELEMENTALES
// SON INMUTABLES
// SE UTILIZAN POR VALOR

function aumentar(pIndice) {
    pIndice += 1
    return pIndice
}

let indice = 1
indice = 2

aumentar(indice)
console.log(indice) // 2

//OPERACIONES CON ELEMENTALES

let a = 5
let b = a
a += 5
console.log(a) // 10
console.log(b) // 5


//TIPOS REFERECIADOS
//SON MUTABLES 
//SE UTILIZAN POR REFERENCIA

/* object -> */
let oLibro = {
    titulo: 'LOTR',
    indice: 1,
    loTengo: true,
    autor: {
        nombre: 'John R.R.',
        apellido: 'Tolkien',
        isVivo: true,
    }
}

/* forma de manipular las propiedades del objeto */
oLibro.autor.isVivo = false

oLibro.editorial = 'Minotauro'

oLibro2 = oLibro
oLibro.indice = 2
console.clear()
console.log(oLibro)
console.log(oLibro2)

function aumentarObjeto(pLibro) {
    pLibro.indice += 1
    return pLibro.indice
}

aumentarObjeto(oLibro)
console.log(oLibro) //3