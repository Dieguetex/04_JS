/* VARIABLES GLOBALES */

//no se usa

function calcular(pTotal, pIncremento) {
    //global = 10 -> esto es una variable global tmbn. Si se inicializa una variable SIN DECLARAR dentro de una función (sin var o let) se crea como variable global.
    pTotal = pTotal + pIncremento
    //pTotal += pIncremento
    return pTotal;
}

function main1() {
    let total = 12 
    let incremento = 10
    console.log(calcular(total, incremento)) //22
    console.log(total) //12
}
main1()



/* VARIABLES LOCALES CON ÁMBITO DE BLOQUE */

function disminuir1() {
    if (true) {
        
    let local = 2
    const LOCAL = 4
    local += 2
    console.log(local) // 2
    console.log(LOCAL) // 4
    }
     //var aunque este dentro de un bloque, define variables con respecto a la función. // 2
    //console.log(tambienlocal) // es local al bloque de código donde ha sido declarada. Super Local!! // undefined
    //console.log(LOCAL) // lo mismo que LET, Super Local. // undefined
}

//console.log(local)  //undefined
//console.log(tambienlocal)  //undefined
//console.log(LOCAL)   //undefined

/* operacion con constantes */
function disminuir2() {
    let local = 2
    const LOCAL = 4
    if (true) {    
    local -= LOCAL
    }
    console.log(local) // -2
    console.log(LOCAL) // 4
}

function disminuir3() {
    let local = 2
    const LOCAL = 4
    local -= LOCAL

    console.log(local) // -2
    console.log(LOCAL) // 4
}

disminuir1()
disminuir2()
disminuir3()