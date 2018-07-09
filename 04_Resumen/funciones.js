// Declaración 



/**
 * // Calcular area de diversas figuras
 * 
 * @param nombre de la figura : STRING
 * @param datos de la figura : OBJETO
 *      si es triangulo es h y b
 *      si es cuadrado es l y l
 *      si es círculo r
 * @return area de la figura : 
 */

function calcularArea(figura, datos){
    let resultado = 1

    switch (figura.toLowerCase()) {
        case 'triangulo':
        case 'triángulo':

            for (const key in datos) {
                resultado *= datos[key]
                console.log(datos[key])
            }

            resultado /= 2
            break;
        case 'cuadrado' :
            resultado = datos.l * datos.l
            break;
        case 'circulo' :
        case 'círculo' :
            resultado = datos.r * datos.r * Math.PI
            break;
        default:
            break;
    }

    return resultado.toFixed(2)
}

// Uso o invocación
function probar() {
    let sfigura = 'trianguLO'
    let oDatos = {h:12, b:10}
    console.log(calcularArea(sfigura, oDatos))
    sfigura= 'Cuadrado'
    oDatos = {l: 10}
    console.log(calcularArea(sfigura, oDatos))
    sfigura = 'Circulo'
    oDatos = {r: 10}
    console.log(calcularArea(sfigura, oDatos)) 
}

probar()

/* 

let user = {name: 'Pepe'}

user.name
user['name']

let x = 'name'
user[x] // -> user['name']

*/