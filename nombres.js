// arreglos
 const nombresFemeninos = [ 'Tecla', 'Laya', 'Gisella', 'Beatrix Solís', 'Emperatriz', 'Loyola', 'Gisella', 'Elda', 'Fiona',
 'Jezebel']
 
 const nombresMaculinos = ['Uberto', 'Aldous', 'Kristopher', 'Urbano', 'Fernández', 'Idelfonso' ]

const apellidos = ['Méndez', 'Guzmán', ' Gaona', 'Alcala', ' Ramírez', 'Acosta', 'Montero', ' López',
                    'Villagómez', 'Griego', 'Armas', 'Loera', 'Laureano', 'Castillo','Iglesias',
                   'Cardona' ]


//  const nombre = document.querySelector('nombre')     

let min = 12

let max = 90

let personas =[]

// funciones y eventos

function generarMujer(){
    
    // estas variables toman los nombres con macth.random
const tomarMujer = Math.floor(Math.random()*nombresFemeninos.length)
const tomarApellido = Math.floor(Math.random()* apellidos.length)
const edad =  Math.floor(Math.random() * (max - min)) + min;
let id = Date.now()

// muestra la imagen de perfil
document.getElementById('nombre').style.display  = 'block'

// const mujerOBJ ={
//     id: Date.now(),
//     personas
// }

// personas = [...personas, mujerOBJ]

// console.log(personas)
// console.log(edad)



// modifica el DOM 
document.getElementById('nombre').innerHTML = 
`<div class="perfil"><img  width="300" src="img/mujer.svg" alt="">
<h3> Nombre: ${nombresFemeninos[tomarMujer]}</h3>
<h3> Apelldo: ${apellidos[tomarApellido]}</h3>
<h3> Edad: ${[edad]}</h3>
<h3> Id: ${[id]}<h3/>
</div>`
}


function generarHombre(){
    
// estas variables toman los nombres con macth.random
const tomarHombre = Math.floor(Math.random()*nombresMaculinos.length)
const tomarApellido = Math.floor(Math.random()* apellidos.length)
const edad =  Math.floor(Math.random() * (max - min)) + min;
let id = Date.now()

// muestra la imagen de perfil
document.getElementById('nombre').style.display  = 'block'

// const hombreOBJ ={
//     id: Date.now(),
//     personas
// }

// personas = [...personas, hombreOBJ]
// modifica el DOM 
document.getElementById('nombre').innerHTML = 
`<div class="perfil"><img  width="300" src="img/hombre.svg" alt="">
<h3> Nombre: ${nombresMaculinos[tomarHombre]}</h3>
<h3> Apelldo: ${apellidos[tomarApellido]}</h3>
<h3> Edad: ${[edad]}</h3>
<h3> Id: ${[id]}<h3/>
</div>`
}
