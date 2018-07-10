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

// Misma función de arriba hecha en while

function iterar_while() {
    let i = 0;
    while (i < 3) {
        console.log(`Soy la vuelta ${i+1}`)
        i++
    }
}



function iterar_do() {
    let i = 0;
    do {
        console.log(`Soy la vuelta ${i+1}`)
        i++
    } while (i < 3)
}


iterar_do()