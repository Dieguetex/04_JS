/* VARIABLES GLOBALES */

var global = 12 

function calcular(pDato) {
    //global = 10 -> esto es una variable global tmbn. Si se inicializa una variable SIN DECLARAR dentro de una función (sin var o let) se crea como variable global.
    global = global + pDato
    //global += pDato
    return global;
}

console.log(calcular(10)) //22
console.log(global)


/* VARIABLES LOCALES CON ÁMBITO DE BLOQUE */

function disminuir() {
    if (true) {
        
    var local = 2 
    let tambienlocal = 3
    const LOCAL = 4
    }
    console.log(local) //var aunque este dentro de un bloque, define variables con respecto a la función. // 2
    console.log(tambienlocal) // es local al bloque de código donde ha sido declarada. Super Local!! // undefined
    console.log(LOCAL) // lo mismo que LET, Super Local. // undefined
}
disminuir()
//console.log(local)  //undefined
//console.log(tambienlocal)  //undefined
//console.log(LOCAL)   //undefined