// oDatos es una instancia de ... ¿?

let oDatos = {}
// oDatos = new Object()

//ESTO NO EXISTE
//ESTO NO EXISTE
//ESTO NO EXISTE
//ESTO NO EXISTE
//ESTO NO EXISTE
// let x = new Math()

Math.PI

/* console.log(Math.random()*100)
console.log(Math.random()*100)
console.log(Math.random()*100)
console.log(Math.random()*100)
console.log(Math.random()*100) */

function letraDNI(num) {
    if (isNaN(num *1) || num < 1 || num>99999999) {
        return 'Error'
    }
    const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    return num+' '+aLetras[num%23]
}  

function probar () {
    console.log(letraDNI('05017822'))
    console.log(letraDNI(50178228))
    console.log(letraDNI(50821728))
    console.log(letraDNI('Pepe'))
}

probar()