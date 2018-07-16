//                          los que mas se usan son map, forEach y filter





let aNombres = [ 'Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan', 'Rosa' ]

/* for (let i = 0; i < aNombres.length; i++) {
    const item = aNombres[i]
    console.log(`El usuario ${i+1} se llama ${item}`)
} */

/* aNombres.forEach(
    function(item, i) { console.log(`El usuario ${i+1} se llama ${item}`)}
) 
 */

 //el forEach se usa normalmente para ver algo por pantalla, ya que no devuelve nada, es :void
aNombres.forEach(
    (item, i) => console.log(`El usuario ${i+1} se llama ${item}`)
) 

let aNumbers = [2,5,7,8,9]
aNumbers.forEach(
    item => {
        let cuadrado = item*item
        console.log(`El cuadrado de ${item} es ${cuadrado}`)
    }
)

//mapear es coger un array y obtener otro con lo que yo quiera. map transforma, guardo lo que devuelve la función
let aCuadrados = aNumbers.map(
    (item) => {return item*item}
)
console.log(aCuadrados)


let aNumbersClon = aNumbers.map(item => item)
aNumbersClon.pop()
console.log(aNumbersClon)
console.log(aNumbers)


// Filter no transforma nada, solo filtra. la funcion me dice si es verdad o no que pasa el filtro
let aPares = aNumbers.filter(item => !(item %2))
console.log(aPares)



/* let aPares = aNumbers.filter(
    (item) => {
        if (item % 2 == 0) {
            return true 
        } else {
            return false
        }
    }
) */

let aImpares = aNumbers.filter(item => !!(item %2))
console.log(aImpares)

//¿Son todos pares?
let sonTodosPares = aNumbers.every(
    item => !(item%2)
)
console.log(sonTodosPares)

// ¿Hay algun par?
let hayAlgunPar = aNumbers.some(
    item => !(item%2)
)
console.log(hayAlgunPar)



let valorFinal = aNumbers.reduce((a,b) => a+b)
console.log(valorFinal)
valorFinal = aNumbers.reduceRight((a,b) => a+b)
console.log(valorFinal)
