function app() {

    // Defino los nodos del DOM que me interesan
    let oDomNombre = document.querySelector("#nombre")
    let oDomBtnSaludar = document.querySelector("#btnSaludar")
    let oDomBtnBorrar = document.querySelector("#btnBorrar")
    let oDomOutput = document.querySelector('#output')

    // Defino los manejadores de eventos de algunos nodos
    // Normalmente usamos click, input y change
    oDomNombre.addEventListener('input', leerDatos)
    /* oDomNombre.addEventListener('change', detectarChange) */
    oDomBtnSaludar.addEventListener('click', saludar)
    oDomBtnBorrar.addEventListener('click', borrar)

    //domNombre.value = "Pepe"
    function leerDatos() {
        console.log('Input detectado')
        console.log(oDomNombre.value)
        oDomOutput.innerHTML = `Hola, <strong>${oDomNombre.value}</strong>`
        
    }
    
    /* function detectarChange() {
        console.log('Change detectado')
        console.log(oDomNombre.value)
    } */

    function saludar() {
        console.log('Hola Amigo')
    }

    function borrar () {
        console.log('Aun no se borrar')
    }

}

document.addEventListener('DOMContentLoaded', app)
