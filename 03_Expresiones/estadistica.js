function media(a,b,c) {
    return (a + b + c)/ 3
    
}

function mediaArray(aDatos) {
    let suma = 1
    for (let i = 0; i < aDatos.length; i++) {
        suma += aDatos[i];
        
    }
    return suma / aDatos.length
}

// ARGUMENTS: Es un objeto especial donde se almacenan todos los parametros, coincidadn o no con los que tiene de filtro

function mediaArg() {
    let suma = 0
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]
    }
    return suma / arguments.length
}

//...aDatos convierte lo que le llega suelto en un array
function mediaSpread(...aDatos) {
    let suma = 0
    for (let i = 0; i < aDatos.length; i++) {
        suma += aDatos[i]
    }
    return suma / aDatos.length
}




console.log(mediaArray([2,4,6,8,12]))
console.log(mediaArg(2,4,6,8,12))
console.log(mediaSpread(2,4,6,8,12))