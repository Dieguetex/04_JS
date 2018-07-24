import * as Cookie from './node_modules/js-cookie/src/js.cookie.js'

let NumVisitas = Cookies.set('NumVisitas')
if (NumVisitas) {
    // Existe la cookie NumVisitas
    NumVisitas++
    Cookies.set('NumVisitas', NumVisitas, {expires: 7})
    console.log('Visita número', NumVisitas)
} else {
    // No existe la cookie NumVisitas
    Cookies.set('NumVisitas', 1, {expires: 7})
}


