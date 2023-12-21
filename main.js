alert("Bienvenido, vamos a pedirte unos datos")

let nameUser = prompt("Ingrese su nombre")
let apellidoUser = prompt("Ingrese su apellido")

alert("Hola " + nameUser + " " + apellidoUser + "!")
console.log("Bienvenido " + nameUser + " " + apellidoUser + "!")


class biblioteca{
    constructor(nombre, autor, paginas){
        this.nombre= nombre;
        this.autor= autor;
        this.paginas= paginas;
    }
}


alert("Vamos a ingresar libros!")


let nombreLibro = 0
let autorLibro = 0
let paginasLibro = 0
let continuar = 0


const arrayBiblio = []


while(true){
    nombreLibro = prompt("Ingrese el nombre")
    autorLibro = prompt("Ingrese el autor")
    paginasLibro = parseInt(prompt("Ingrese la cantidad de paginas"))

    const libroNuevo = new biblioteca(nombreLibro, autorLibro, paginasLibro) 
    arrayBiblio.push(libroNuevo) 

    continuar = prompt("Quiere agregar mas libros? (si/no)")
    
    if(continuar.toLowerCase() !== "si"){
        console.log("No se agregan mas libros!")
        break
    }
}



let buscar = parseInt(prompt("Buscar libro por cantidad de paginas!"))
const filtrado = arrayBiblio.filter((libro) => libro.paginas === buscar)

if(filtrado.length){
    console.log("Resultado Busqueda")
    filtrado.forEach((libro)=>{
    console.log(`
        Libro encontrado: ${libro.nombre}, Autor: ${libro.autor}, Paginas: ${libro.paginas}
        `)
    })
} else {
    console.log("No se encontraron libros")
}


function mostrarLibros(visualizacion) {
    console.log("===== BIBLIOTECA =====")
    for (let i = 0; i < arrayBiblio.length; i++) {
        const biblio = arrayBiblio[i]
        visualizacion(biblio);
    }
}

function mostrarInfo(libro) {
    console.log(`Nombre: ${libro.nombre}, Autor: ${libro.autor}, Paginas: ${libro.paginas}`);
}

mostrarLibros(mostrarInfo)