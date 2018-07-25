if (localStorage.numVisitas) {
    // Existe numVisitas en localStorage
    localStorage.numVisitas++
} else {
    // No existe numVisitas en localStorage
    localStorage.numVisitas = 1
} 
console.log('Visita número', localStorage.numVisitas)


mostarDatos =

navigator.geolocation.getCurrentPosition(
     (data) => { console.log(data)},
    (error) => {console.log(error)} 
)   