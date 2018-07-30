function main1 () {

    /* document.body.addEventListener('mousemove', (ev) => {
        console.log(ev.clientX, ev.clientY)
    }) */

    let aDivs = document.querySelectorAll('section div')
    // aDivs.addEventListener()
    aDivs.forEach((div) => {
        div.addEventListener('mouseover',
            () => {div.style.backgroundColor = "pink"})
        div.addEventListener('mouseout',
            () => {div.style.backgroundColor= "brown"}) 
    })

}

function main() {
    let aDivs = document.querySelectorAll('section div')
    // aDivs.addEventListener()
    aDivs.forEach((div) => {
        div.addEventListener('mouseover', hover)
        //div.addEventListener('mouseout', hover)
        div.onmouseout = hover 

    })

    document.querySelector('footer a')
        .addEventListener('click', navegar)
    
    function navegar (oE) {
        oE.preventDefault()
        console.log('Navegando');
        let res = confirm('¿Estás seguro?')
        if(res){
            location.assign("https://www.google.com")
        }
    }
    

    function hover(oE) {
        //cuando estamos trabajando con clases u objetos, usamos bind.this(), ahora podemos usar oE.target o this indistintamente
        if (oE.type === 'mouseover') {
            oE.target.style.backgroundColor = "pink"
        } else {
            this.style.backgroundColor = "brown"
        }
            
        
            
    }
}


document.addEventListener('DOMContentLoaded', main)