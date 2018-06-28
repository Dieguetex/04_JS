/* let aDatos = {
    0: 'Pepe',
    1: 'Rosa',
    2: 'Maria',
} */
// El objeto de arriba y el ARRAY (subtipo de objeto) de abajo hacen lo mismo
let aDatos = ['Pepe', 'Rosa', 'Maria']
console.log(typeof aDatos, aDatos)


//para manipular arrays, entre corchetes el índice de la cosa a modificar:
aDatos [0] = 'Jose'
console.log(typeof aDatos, aDatos)


// Para añadir al ARRAY:
/* 
aDatos[33] = 'Luis'
console.log(typeof aDatos, aDatos) 
*/
aDatos[aDatos.length]='Luis'
aDatos.push('Elena')
/* Quitado para no ensuciar la pantalla / console.log(aDatos) */


//Para convertir esto en ARRAY:
/* 
let x = {nombre: 'Pepe', puesto: 'Profesor'}
let y = {nombre: 'Rosa', puesto: 'Profesora'}
let z = {nombre: 'Maria', puesto: 'Directora'} 
*/
let aDatosFull = [
    {nombre: 'Pepe', puesto: 'Profesor'},
    {nombre: 'Rosa', puesto: 'Profesora'},
    {nombre: 'Maria', puesto: 'Directora'},
]


//para incluir otra línea en el array
aDatosFull.push({nombre: 'Elena', puesto: 'Alumna'})
// Es igual que : 
/* let x = {nombre: 'Elena', puesto: 'Alumna'}
aDatosFull.push(x) */


//Para modificar un dato ya añadido:
aDatosFull[0].apellidos = 'Pérez'
aDatosFull[1].apellidos = 'López'
aDatosFull.push(12)
aDatosFull.push(true)

console.log(aDatosFull)



