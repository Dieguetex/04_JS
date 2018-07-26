import {addBoton} from './helpers.js'

class App {
    constructor() {
        setTimeout(this.addInfoEnMedio.bind(this), 2000)
    }

    addInfo() {
        let nodoElement = document.createElement('p')
        let nodoTexto = document.createTextNode('Este sitio utiliza cookies')
        // Añade un hijo. En este caso decimos a la variable nodoElement que añada nodotexto.
        nodoElement.appendChild(nodoTexto)
        // donde? EN BODY
        document.body.appendChild(nodoElement)
    }

    addInfoModerno() {
        // SI NO LE PONGO EL MAS SUSTITUYES EL BODY POR ESTO!!!!
        document.body.innerHTML += `<div class="aviso">
        <p>Este sitio utiliza cookies</p>
        <button type="button" id="btnAceptar">Aceptar</button>
        </div>`
        addBoton('#btnAceptar', '.aviso')
    }

    addInfoEnMedio() {
        // Incrustar un p en mitad del body. El outer replaza, el inner incrusta
        document.querySelector('#desaparecere').outerHTML = 
        `<div class="aviso">
        <p>Este sitio utiliza cookies</p>
        <button type="button" id="btnAceptar">Aceptar</button>
        </div>`

        // Llamar a la función addButton ya que si lo ponemos en el constructor aun no se habría creado el boton.
        addBoton('#btnAceptar', '.aviso')
    }

    
}

document.addEventListener('DOMContentLoaded', 
    () => { new App() }
)