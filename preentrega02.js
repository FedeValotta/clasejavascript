// Generar objetos Tickets

class Tickets {
    constructor(nombre, destino, precio, edad) {
        this.nombre = nombre;
        this.destino = destino;
        this.precio = precio;
        this.edad = edad;
    }
}
// Creador de Tickets
let tipoTickets = [];
tipoTickets.push(new Tickets("Tickets Disney Mayores", "Disney", 130, "adultos"));
tipoTickets.push(new Tickets("Tickets Universal Mayores", "Universal", 100, "adultos"));
tipoTickets.push(new Tickets("Tickets Disney & Universal Mayores", "Disney & Universal", 230, "adultos"));
tipoTickets.push(new Tickets("Tickets Disney Menores", "Disney", 110, "menores"));
tipoTickets.push(new Tickets("Tickets Universal Menores", "Universal", 70, "menores"));
tipoTickets.push(new Tickets("Tickets Disney & Universal Menores", "Disney & Universal", 180, "menores"));

// Aca comienza el DOM
function ejecutarCotizador(event) {

    event.preventDefault()

    let destinoFormulario = document.getElementById("SelectorDestino").value;
    let cantidadTicketsMayores = parseInt(document.getElementById("SelectorMayores").value);
    let cantidadTicketsMenores = parseInt(document.getElementById("SelectorMenores").value);
    let ticketsMayores = tipoTickets.find(tipoTickets => tipoTickets.destino === destinoFormulario && tipoTickets.edad === "adultos");
    let ticketsMenores = tipoTickets.find(tipoTickets => tipoTickets.destino === destinoFormulario && tipoTickets.edad === "menores");

    let mostrarCotizacion = document.getElementById("mostrar-cotizacion")
    mostrarCotizacion.innerHTML = `Los tickets de ${ticketsMayores.destino} para mayores salen ${ticketsMayores.precio}. En su familia viajan ${cantidadTicketsMayores} mayores. El precio total de Tickets de Mayores es de USD ${ticketsMayores.precio * cantidadTicketsMayores} <br>
Los tickets para menores salen ${ticketsMenores.precio}. En su familia viajan ${cantidadTicketsMenores} menores. El precio total de Tickets de Menores es de USD ${ticketsMenores.precio * cantidadTicketsMenores}<br>
El total es de USD ${(ticketsMayores.precio * cantidadTicketsMayores) + ticketsMenores.precio * cantidadTicketsMenores}`
}

// JSON y LocalStorage

let baseDeCotizaciones = JSON.stringify(document.getElementById("mostrar-cotizacion"));
localStorage.setItem("cotizacion", baseDeCotizaciones);

let mostrarBase = JSON.parse(localStorage.getItem("cotizacion"));
console.log(mostrarBase);
