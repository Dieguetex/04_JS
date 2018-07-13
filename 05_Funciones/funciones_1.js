function basica(x) {}
let y
basica(y)



function miFuncion(...z) {
    console.log('hola ' + z[0])
    console.log('hola ' + arguments[0])
}

let x = 21 
miFuncion(x)
miFuncion(x,54)
miFuncion(x,54,89)


// EN OTROS LENGUAJES existe la sobrecarga de funciones(metodos):
function miFuncion(z){
    //un codigo
}
function miFuncion(z,x) {
    //otro codigo
}
miFuncion(x) // Se ejecuta la de arriba, por los parametros dados 
miFuncion(x,y) // Se ejecuta la de abajo, por los parametros dados 