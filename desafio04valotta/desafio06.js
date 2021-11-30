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
function ejecutarCotizador() {

    let destinoFormulario = document.getElementById("SelectorDestino").value;
    let cantidadTicketsMayores = parseInt(document.getElementById("SelectorMayores").value);
    let cantidadTicketsMenores = parseInt(document.getElementById("SelectorMenores").value);
    let ticketsMayores = tipoTickets.find(tipoTickets => tipoTickets.destino === destinoFormulario && tipoTickets.edad === "adultos");
    let ticketsMenores = tipoTickets.find(tipoTickets => tipoTickets.destino === destinoFormulario && tipoTickets.edad === "menores");

//    let test = document.getElementById("test")
//    test.innerHTML = `Los tickets de ${ticketsMayores.destino} para mayores salen ${ticketsMayores.precio}. En su familia viajan ${parseInt(document.getElementById("cantidadMayores"))} mayores. El precio total de Tickets de Mayores es de USD <span id="precioTotalMayores">PRECIO</span>`

    let resultadoDestino = document.getElementById("resultadoDestino");
    let precioMayores = document.getElementById("precioMayores");
    let cantidadMayores = document.getElementById("cantidadMayores");
    let precioTotalMayores = document.getElementById("precioTotalMayores");
    let precioMenores = document.getElementById("precioMenores");
    let cantidadMenores = document.getElementById("cantidadMenores");
    let precioTotalMenores = document.getElementById("precioTotalMenores");
    let precioTotalDestino = document.getElementById("precioTotalDestino");

    resultadoDestino.innerHTML = ticketsMayores.destino;
    precioMayores.innerHTML = ticketsMayores.precio;
    cantidadMayores.innerHTML = cantidadTicketsMayores;
    precioTotalMayores.innerHTML = cantidadTicketsMayores * ticketsMayores.precio;
    precioMenores.innerHTML = ticketsMenores.precio;
    cantidadMenores.innerHTML = cantidadTicketsMenores;
    precioTotalMenores.innerHTML = cantidadTicketsMenores * ticketsMenores.precio;
    precioTotalDestino.innerHTML = (cantidadTicketsMayores * ticketsMayores.precio)+(cantidadTicketsMenores * ticketsMenores.precio)
}
