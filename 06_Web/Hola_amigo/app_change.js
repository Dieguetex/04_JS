function app () {

    // Defino los nodos del DOM que me interesan
    let domNombre = document.querySelector("#nombre")
    let domBtnSaludar = document.querySelector("#btnSaludar")
    let domBtnBorrar = document.querySelector("#btnBorrar")
    let domOutput = document.querySelector('#output')

    // Defino los manejadores de eventos de algunos nodos
    domBtnSaludar.addEventListener('click', saludar)
    domBtnBorrar.addEventListener('click', borrar)

    function saludar() {
        let valorNombre = domNombre.value
        if (!!valorNombre) {
            domOutput.innerHTML = `Hola, <strong>${valorNombre}</strong>`
        }

        
    }

    function borrar () {
        domNombre.value = ''
        domOutput.innerHTML = ''
    }

}
document.addEventListener('DOMContentLoaded', app)