class App {
    constructor() {

        // Contador para saber cuando accedo al último nodo
        this.count = 0;
        
        // Nodo
        this.aSocial = document.querySelectorAll('.fake')
        
        // Asocio a todos los nodos el mismo manejador
        this.aSocial.forEach((node) => {
            node.addEventListener('click', this.clickChange.bind(this))
        });
    }
    clickChange(ev) {
        let nodeItem = ev.target
        // Si el item ya esta cambiado, no hago nada
        if (nodeItem.textContent.indexOf('Ops') >= 0) {
            return
        }
        // Cambio el item clickeado
        nodeItem.textContent = "Ops, no tengo " + nodeItem.textContent;
        this.count++;
        // Si ya han cambiado todos los items ...
        if (this.count === this.aSocial.length  ) {
            nodeItem.parentNode.parentNode.outerHTML =
                `<div>
                    <p>Lo siento, parece que estoy ilocalizable</p>
                </div>`;
        }
    }
}

document.addEventListener('DOMContentLoaded',
    () => { new App() }
)