let oFlight = {
    airline: 'Oceanic',
    number: '815',
    departure: {
        clave_IATA: 'SYD',
        time: '2004-09-22 14:55', 
        ciudad: 'Sydney',
    },
    arrival: {
        clave_IATA: 'LAX',
        time: '2004-09-23 10:42', 
        ciudad: 'Los Angeles',    
    },
    mostrar: function() {
        console.log('soy un vuelo')
    }

}

// esto de aquí abajo es lo mismo que la propiedad ewscrita dentro del objeto de arriba
oFlight.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                console.log(`Propiedades de ${key}: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`${key}: ${oDatos[key]}`)
            }    
        }    
    }
}


oFlight.mostrar()
console.log(typeof oFlight)
console.log(oFlight instanceof Object)

aDatos = []
console.log(typeof aDatos)
console.log(aDatos instanceof Array)

