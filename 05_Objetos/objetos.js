// let oDatos = {}

// let oDatos = {
//     edad: 22
// }
// let oDatos2 = new Object{}
// oDatos.nombre = 'Pepe'
// oDatos['apellido'] = 'Perez'



let oDatos = {
    nombre: 'Pepe',
    apellidos: 'Pérez',
    edad: 22
}

oDatos.profesion = 'Programador'

console.log(oDatos)


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
        ciudad: '',    
    },
    mostrar: function() {
        console.log('soy un vuelo')
    }

}

oFlight.arrival.ciudad = 'Los Angeles'

// esto de aquí abajo es lo mismo que la propiedad ewscrita dentro del objeto de arriba
oFlight.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                console.log(`Las propiedades de ${key} son: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }    
        }    
    }
}

console.log(oFlight)

// key es el nombre de la variable, vale el nombre de cada una de las propiedades. el objeto que vemos arriba tiene 4 propiedades, por lo que daría 4 vueltas. En la primera vuelta valdría "airline"

function leeObjeto (oDatos) {
    for (const key in oDatos) {
        if (typeof oDatos[key] === 'object') {
            console.log(`Las propiedades de ${key} son: `)
            leeObjeto(oDatos[key])
        } else {
            console.log(`La propiedad ${key} vale ${oDatos[key]}`)
        }
    }  
}

// leeObjeto(oFlight)
console.clear()
oFlight.mostrar()
