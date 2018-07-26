class App {
    constructor() {
        // Acceder rápida y directamente

        let nodo1 = document.querySelector('div p')
        console.dir(nodo1)
        let nodo2 = document.querySelector('.importante')
        console.dir(nodo2)
        let nodo3 = document.querySelector('#p1')
        console.dir(nodo3)
        let aNodos = document.querySelectorAll('p')
        console.dir(aNodos)

        // Ejemplo de para qué `puedo necesitar el nodelist, un hack que te sustituye todos los párrafos por ja ja
            /* aNodos.forEach(
            (node) => {node.innerHTML = 'Ja, Ja'}
        ) */

        //=============================================================
        //Acceder como antíguamente

        document.getElementById('p1')
        document.getElementsByName('p')
        document.getElementsByTagName('nombre')
        document.getElementsByClassName('importante')

        //==============================================================
        // comparación de como moverse a través

        let nodoMenu = document.querySelector('#main-menu')
        console.dir(nodoMenu)

        console.dir(document.querySelectorAll('li'))
        console.dir(nodoMenu.querySelectorAll('li'))

        console.dir(nodoMenu.childNodes)   // NodeList    (te devuelve el texto tmbn)         
        console.dir(nodoMenu.children) //  HTMLCollection   (Mucho mejor este) 
        document.querySelector('#segundo').style.color = "brown"
        console.dir(nodoMenu.children[0].children[2])
        nodoMenu.children[0].children[2].style.color = "green"
        
        console.dir(nodoMenu.parentElement)
        console.dir(nodoMenu.nextElementSibling)
        console.dir(nodoMenu.previousElementSibling)
    }   
}

document.addEventListener('DOMContentLoaded', 
    () => { new App() }
)