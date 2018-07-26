/**
     * Define el comportamiento de un boton incluido en un contenedor
     * @param {string} boton 
     * @param {string} container 
     */

    export function addBoton(boton, container) {
        // Nodo para seleccionar el boton aceptar
        let btnAceptar = document.querySelector(boton)
        // Función manejadora de eventos. Al hacer click debe de crear la variable nodo, irse al padre y eliminar al hijo (boton)
        btnAceptar.addEventListener('click', () => {
            let nodo = document.querySelector(container)
            nodo.parentNode.removeChild(nodo)
        })
    }
    