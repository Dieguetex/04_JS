class Apps{
    constructor() {
        this.amigo = 'Pepe'
        this.isSaludar = true
        this.oBtn = document.querySelector('#btnDual')
        this.oOutput = document.querySelector('#saludo')
        this.asignarHandlers()
    }

    asignarHandlers() {
        console.log(this)
        //this.oBtn.addEventListener('click', this.saludarOld.bind(this))
        this.oBtn.addEventListener('click', this.saludar.bind(this))
    }

    saludarOld(oEvent) {
        console.log(oEvent.target)

        if (this.isSaludar) {
            console.log(`Hola ${this.amigo}`)
            //oEvent.target.innerHTML = 'Adios'
            //this.isSaludar = false
        }else{
            console.log(`Adios ${this.amigo}`)
            //oEvent.target.innerHTML = 'Hola'
            //this.isSaludar = true
        }
        this.isSaludar = !this.isSaludar
        oEvent.target.innerHTML = this.isSaludar ? 'Hola' : 'Adios'
    }

    saludar(oEvent) {
        console.log(oEvent.target)
        let msj = `Adios ${this.amigo}`

        if (this.isSaludar) {
            msj = (`Hola ${this.amigo}`)
            //oEvent.target.innerHTML = 'Adios'
            //this.isSaludar = false
        }
    
        this.isSaludar = !this.isSaludar
        oEvent.target.innerHTML = this.isSaludar ? 'Hola' : 'Adios'
        this.oOutput.innerHTML = msj
    }
}


document.addEventListener('DOMContentLoaded', 
    () => new Apps()
)


// Seria lo mismo que 
// document.addEventListener('DOMContentLoaded', 
//        function () {new Apps()})


// Seia lo mismo que 
//function main() {
//    new Apps()
//}
// document.addEventListener('DOMContentLoaded', main)