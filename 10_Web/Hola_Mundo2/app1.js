//en este caso la variable es local a la función, por lo que amigo no lo va a encontrar.

function main() {
    let amigo = 'Pepe'
    document.querySelector('#btnSaludar') //esto es un nodo
    .addEventListener('click',saludar) //asociando los eventos a los nodos

    document.querySelector('#btnDespedir')
    .addEventListener('click',despedir) 
    
    // saludar() -> ejecuta saludar sin click

    function saludar() {
        console.log(`Hola ${amigo}`)
    }
    function despedir() {
        console.log(`Adios ${amigo}`)
    }   
}

//  En la práctica es lo mismo que : 
// document.addEventListener('DOMContentLoaded', app)

(function() {
    document.addEventListener('DOMContentLoaded',main)
})()



