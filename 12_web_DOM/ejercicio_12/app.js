class App {
    constructor () {
        this.titulo = document.querySelector('h1')
        // this.titulo.style='color: brown; background-color: bisque'
        this.btnMas = document.querySelector('.mas')
        this.textoMas = document.querySelector('.hide')

        this.btnMas.addEventListener('click', this.mostrar.bind(this))
    }

    mostrar(){
    this.textoMas.classList.toggle('hide')
    }
}

document.addEventListener('DOMContentLoaded',
    () => { new App()})