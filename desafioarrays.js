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

// Prompts

let cantidadTicketsMayores = prompt("¿Cuántos mayores de edad viajarán?");
while (cantidadTicketsMayores <= 0) {
    alert("Para visitar un parque tematico es necesario que asista por lo menos un mayor.")
    cantidadTicketsMayores = prompt("¿Cuántos mayores de edad viajarán?"); 
}

let cantidadTicketsMenores = prompt("¿Cuántos menores de edad viajarán?");
let destino = prompt("¿A dónde les gustaría viajar? Disney o Universal");

while ((destino !="Disney") && (destino !="Universal")) {
    alert("No ingresaste un texto. Las respuestas validas son Disney o Universal.")
    destino = prompt("¿A dónde les gustaría viajar? Disney o Universal."); 
}

// Tickets

let ticketsMayores = tipoTickets.find(tipoTickets => tipoTickets.destino === destino && tipoTickets.edad === "adultos");
let ticketsMenores = tipoTickets.find(tipoTickets => tipoTickets.destino === destino && tipoTickets.edad === "menores");

console.log(`Los tickets de ${ticketsMayores.destino} para mayores salen ${ticketsMayores.precio}. En su familia viajan ${cantidadTicketsMayores} mayores. El precio total de Tickets de Mayores es de USD ${ticketsMayores.precio * cantidadTicketsMayores} <br>
Los tickets para menores salen ${ticketsMenores.precio}. En su familia viajan ${cantidadTicketsMenores} menores. El precio total de Tickets de Menores es de USD ${ticketsMenores.precio * cantidadTicketsMenores}<br>
El total es de USD ${(ticketsMayores.precio * cantidadTicketsMayores) + ticketsMenores.precio * cantidadTicketsMenores}`
)
