// THIS -> objeto global

/* console.log(this)

function prueba() {
    console.log(this)
}

prueba() */

// THIS -> objeto

/* let o = {
    nonbre: 'Pepe',
    mostrar: function () {
        console.log(this)
    }
}

o.mostrar() */

// THIS -> el objeto creado

function cosaRara() {
    console.log(this)
}

//cosaRara()

new cosaRara()


// THIS -> es quien yo decida
// call() / apply()

//Pero en ES5 se inventaron bind, que le dice a una función que se va a llevar el this contigo, y siempre que alguien llame a this tu lo ejecutaras. Enlaza el valor de this a lo que nosotros le digamos ene ese momento.