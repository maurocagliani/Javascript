// precio turno
const
    precioalumno = 70;
    preciopiloto = 60;


function piloto(nombreUsuario) {
    alert("Hola " + nombreUsuario + " Ingresaste como piloto");
}

function alumnopiloto(nombreUsuario) {
    alert("Hola " + nombreUsuario + " Ingresaste como alumno");
}


//Variables del programa principal
let usuario = prompt("Ingrese Su nombre");
let pilotuser = prompt("Ingrese piloto si es piloto o alumno si es alumno piloto");
let cantidadTurnos = 0;
let avion = "avion";
let dia = "domingo";

//Elegir tipo de avion
function elegirAvion(avion){
    alert('Los aviones disponibles son Cessna 150 y Tecnam P2002');
    avion = prompt("¿Con què aviòn vas a solicitar turno? ");
    return avion;
}

//Elegir el dìa

function diaReserva(dia){
    dia = prompt("¿Què dìa vas a solicitar el/los turnos? ");
    return dia;
}

if (pilotuser == "piloto"){
    piloto(usuario);
}
else {
    alumnopiloto(usuario);
}

//programa principal
let avionElegido = elegirAvion(avion);

let diaElegido = diaReserva(dia);



let reservarTurno= Number(prompt("Ingrese cantidad de turnos a reservar: "));

//si ingresa -1 no entra al while y cancela la reserva de turno
while (reservarTurno != -1) {
    cantidadTurnos = cantidadTurnos + reservarTurno;
    reservarTurno= Number(prompt("Ingrese cantidad de turnos a reservar: "));

}
let precioTotal = cantidadTurnos * precioalumno;
alert("Reservaste " + cantidadTurnos + " turnos.");
alert("El valor de la reserva es de " + precioTotal + " dolares el dìa " + diaElegido + " con el avion " + avionElegido);


