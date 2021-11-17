/* Atrapados en la magia es un servicio de Agentes de Viajes de Disney y Universal.
        Los precios de sus tickets rondan en los 130 dólares por persona y 110 dólares para menores para Disney.
        Los precios de sus tickets rondan en los 100 dólares por persona y 70 dólares para menores para Universal.
        La idea es que a través de esta app, calcular cuánto sería el total en dólares. */


function cotizacion(cantidadTicketsMayores, cantidadTicketsMenores, destino) {

    let totalTicketsMayores = 0;
    let totalTicketsMenores = 0;

    const precioTicketsMayoresDisney = 130;
    const precioTicketsMenoresDisney = 110;
    const precioTicketsMayoresUniversal = 100;
    const precioTicketsMenoresUniversal = 70;

    // Precio Tickets
    if (destino == "Disney") {
        totalTicketsMayores = cantidadTicketsMayores * precioTicketsMayoresDisney;
        totalTicketsMenores = cantidadTicketsMenores * precioTicketsMenoresDisney;
    } else {
        totalTicketsMayores = cantidadTicketsMayores * precioTicketsMayoresUniversal;
        totalTicketsMenores = cantidadTicketsMenores * precioTicketsMenoresUniversal;
    }

    // Total

    let precioTotal = totalTicketsMayores + totalTicketsMenores;


    // Texto final
    console.log("Los tickets de " + destino + " para Mayores salen " + totalTicketsMayores/cantidadTicketsMayores + " USD. En su familia viajan " + cantidadTicketsMayores + " mayores.");
    console.log("Los tickets de " + destino + " para Menores salen " + totalTicketsMenores/cantidadTicketsMenores + " USD. En su familia viajan " + cantidadTicketsMenores + " menores.");
    console.log("Total Mayores: " + totalTicketsMayores);
    console.log("Total Menores: " + totalTicketsMenores);
    console.log("Total: " + precioTotal);

}


let cantidadTicketsMayores = prompt("¿Cuántos mayores de edad viajarán?");
while (cantidadTicketsMayores <= 0) {
    alert("Para visitar un parque tematico es necesario que asista por lo menos un mayor.")
    cantidadTicketsMayores = prompt("¿Cuántos mayores de edad viajarán?");
}

let cantidadTicketsMenores = prompt("¿Cuántos menores de edad viajarán?");
let destino = prompt("¿A dónde les gustaría viajar? Disney o Universal");

while ((destino != "Disney") && (destino != "Universal")) {
    alert("No ingresaste un destino válido. Las respuestas validas son Disney o Universal.")
    destino = prompt("¿A dónde les gustaría viajar? Disney o Universal.");
}

cotizacion(cantidadTicketsMayores, cantidadTicketsMenores, destino)