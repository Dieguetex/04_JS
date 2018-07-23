class Apps{
    constructor() {
        this.amigo = 'Pepe'
        this.oBtnSaludar = document.querySelector('#btnSaludar')
        this.oBtnDespedir = document.querySelector('#btnDespedir') 
        this.asignarHandlers()
    }

    asignarHandlers() {
        console.log(this)
        this.oBtnSaludar.addEventListener('click', this.saludar.bind(this))
        this.oBtnDespedir.addEventListener('click', this.despedir.bind(this)) 
    }

    saludar(oEvent) {
        console.log(oEvent.target)
        console.log(`Hola ${this.amigo}`)
    }
  
    despedir() {
        console.log(`Adios ${this.amigo}`)
    }
}


document.addEventListener('DOMContentLoaded', 
    () => new Apps()
)


// Seria lo mismo que 
// document.addEventListener('DOMContentLoaded', 
//        function () {new Apps()})


// Seria lo mismo que 
//  function main() {
//    new Apps()
//}
// document.addEventList ener('DOMContentLoaded', main)