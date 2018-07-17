let factura = {
    empresa: {
        nombre: 'Gran Papelería',
        calle: 'c/Madrid',
        telefono: '568 485 985',
        nif: 'Z-123546789',   
    },


    cliente: {
        nombre: 'Librería Leemucho',
        calle: 'c/ Tortuga',
        telefono: '789 456 123',
        nif: 'A-789456123',
    },
    elementos: [
        {descripcion: 'La Isla del Tesoro', 
        precio: 30, 
        cantidad: '10',},

        {descripcion: 'Drácula', 
        precio: 75, 
        cantidad: 5},
        
        {descripcion: 'El señor de los Anillkos', 
        precio: 50,
        cantidad: 24},

        
    ],
    importeTotal: 0,
    tipoIVA: 1.04, 
    formaPago: 'Transferencia',
}

factura.calculaImporteTotal = function () {
    //actualice el valor de la propiedad correspondiente
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => {
            this.importeTotal += 
            item.precio*item.cantidad*this.tipoIVA
        }
    )

}

factura.mostrar = function () {
    // Mostrar pontalla el importe total de la factura en un formato HTML adecuado
    this.calculaImporteTotal()
    console.log(this)
}

factura.mostrar()

let factura1 = {
    empresa: {
        nombre: 'Gran Papelería',
        calle: 'c/Madrid',
        telefono: '568 485 985',
        nif: 'Z-123546789',   
    },


    cliente: {
        nombre: 'Librería Leemucho',
        calle: 'c/ Tortuga',
        telefono: '789 456 123',
        nif: 'A-789456123',
    },
    elementos: [
        {descripcion: 'La Isla del Tesoro', 
        precio: 30, 
        cantidad: '10',},

        {descripcion: 'Drácula', 
        precio: 75, 
        cantidad: 5},
        
        {descripcion: 'El señor de los Anillkos', 
        precio: 50,
        cantidad: 24},

        
    ],
    importeTotal: 0,
    tipoIVA: 1.04, 
    formaPago: 'Transferencia',
}

factura1.calculaImporteTotal = function () {
    //actualice el valor de la propiedad correspondiente
    this.importeTotal = 0
    this.elementos.forEach(
        (item) => {
            this.importeTotal += 
            item.precio*item.cantidad*this.tipoIVA
        }
    )

}

factura1.mostrar = function () {
    // Mostrar pontalla el importe total de la factura en un formato HTML adecuado
    this.calculaImporteTotal()
    this.pintaDatos()
}

factura1.pintaDatos = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') {
                if (isNaN(key)) {  
                    console.log(`Propiedades de ${key}: `)  
                }
                this.pintaDatos(oDatos[key])
            } else {
                console.log(`${key}: ${oDatos[key]}`)
            }    
        }    
    }
}

factura1.mostrar()


/* Ejercicio (19b)
Objeto Facturas
: 
Definir la estructura de un objeto que almacena una factura. Las facturas 
están formadas por la información de la propia empresa (nombre de la 
empresa, dirección, teléfono, NIF), la información del cliente (similar a la 
de la empresa), una lista de elementos (cada uno de los cuales dispone de 
descripción, precio, cantidad) y otra información básica de la factura 
(importe total, tipo de IVA, forma de pago).
Una vez definidas las propiedades del objeto, añadir un 
método
que 
calcule el importe total de la factura y actualice el valor de la propiedad 
correspondiente. Por último, añadir otro método que muestre por 
pantalla el importe total de la factura en un formato HTML adecuado.
 */
