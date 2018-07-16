function app() {

    oDomNombre = document.querySelector("#nombre")
    oDomBtnSaludar = document.querySelector("#btnSaludar")
    oDomBtnBorrar = document.querySelector("#btnBorrar")

    oDomNombre.addEventListener('input', leerDatos)
    oDomBtnSaludar.addEventListener('click', saludar)
    oDomBtnBorrar.addEventListener('click', borrar)

    //domNombre.value = "Pepe"
    function leerDatos() {
        console.log(oDomNombre.value)
    }

    function saludar() {
        console.log('Hola Amigo')
    }

    function borrar () {
        console.log('Aun no se borrar')
    }

}

document.addEventListener('DOMContentLoaded', app)
