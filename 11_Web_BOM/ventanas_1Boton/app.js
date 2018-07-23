class App {
    constructor() {
        this.oVentana = null
        this.btnAbrir = document.querySelector('#btnAbrir')
        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this) )
        this.img = null
        this.prepararImg()

    }

    prepararImg() {
        this.img = new Image()
        this.img.src = './assets/komodo.jpg'
        this.img.addEventListener('load', 
        () => {
            console.log(this.img.width)
            console.log(this.img.height)
        })
        
    }

    abrirVentana() {
        //this.oVentana = window.open()
        // centrada y de 300px
        let x = this.img.width
        let y = this.img.height

        if (!this.oVentana) {
            this.oVentana = window.open('./assets/komodo.jpg', '', 
                        `toolbar=yes, 
                        scrollbars=no, 
                        resizable=no, 
                        top=${y}, 
                        left=${x}, 
                        width=${this.img.width}, 
                        height=${this.img.height}`)
            this.oVentana.document.write('<img src="./assets/komodo.jpg" alt="Dragon de Komodo">')      
            this.btnAbrir.innerHTML = 'Cerrar Ventana'
        } else {
            this.oVentana.close()
            this.oVentana = null
            this.btnAbrir.innerHTML = 'Abrir Ventana'
        }
    }
}

document.addEventListener('DOMContentLoaded', 
    () => {new App()})

