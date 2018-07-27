class App {
    constructor () {
        this.parrafoBoton = document.querySelector('#borrador')  
        this.ClonBoton = this.parrafoBoton.cloneNode()
        this.ClonBoton.innerHTML = 'Ja, Ja'

        this.parrafoBorrar = document.querySelector('#siguiente')
        console.log(this.parrafoBoton.className)

        this.parrafoBoton.addEventListener('click', ()=> {
            if (this.parrafoBorrar){
                this.parrafoBorrar.parentNode.removeChild(this.parrafoBorrar)
                this.parrafoBoton.classList.remove('boton')
                this.parrafoBorrar = null
          }
        
      })

    }
}

document.addEventListener('DOMContentLoaded',
    () => { new App()})