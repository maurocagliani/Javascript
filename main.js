// precio turno - Lo voy a implementar en la siguiente entrega.
const
    precioalumno = 70;
    preciopiloto = 60;



class Avion {
  constructor(id, marca, modelo) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.lunes = [true, true, true, true, true];
    this.martes = [true, true, true, true, true];
    this.miercoles = [true, true, true, true, true];
    this.jueves = [true, true, true, true, true];
    this.viernes = [true, true, true, true, true];
  }
}

class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
    this.reservas = [];
  }

  agregarReserva(reserva, turno) {
    this.reservas.push(reserva);
    this.reservas.push(turno);
  }
}

function diaElegido(dia) {
  dia = prompt('Elija un día para reservar un turno: (Domingo para salir)');
  return dia;
}

const avionesDisponibles = [
  new Avion(0, "Cessna", "150"),
  new Avion(1, "Piper", "Arrow II"),
];

let usuario = new Usuario();
usuario.nombre = prompt('Ingrese su nombre: ');
usuario.email = prompt('Ingrese su eMail: ');

alert('El avión 0 es Cessna 150 y el Avion 1 Piper Arrow II');
let idAvion = prompt('¿Con qué avión vas a reservar turno? ');

let avionElegido = avionesDisponibles[idAvion];

const hoy = new Date();

alert(
  'Para el avión ' + avionElegido.marca + ' existen los siguientes turnos: '
);

['lunes', 'martes', 'miercoles', 'jueves', 'viernes'].forEach((dia) => {
  console.log(`Para el día ${dia}:`);
  avionElegido[dia].map((disponible, index) => {
    console.log(`  El turno ${index + 1} está ${disponible ? 'disponible' : 'ocupado'}`);
  });
});

let diaReserva = diaElegido();
while (diaReserva.toLowerCase() != 'domingo') {
  let turnoElegido = Number(prompt('Elijar un turno para la reserva: '));
  turnoElegido = turnoElegido - 1;
  if (avionElegido[diaReserva][turnoElegido] == true) {
    avionElegido[diaReserva][turnoElegido] = false;
    usuario.agregarReserva({ diaReserva, turnoElegido, hoy });
    alert(`Tu turno es el día ${diaReserva} con turno ${turnoElegido + 1}`);
  } else {
    alert('Ese turno no está disponible. Por favor, elija otro turno del 1 al 5');
  }
  diaReserva = diaElegido();
}

alert(
  'Para el avión ' + avionElegido.marca + ' existen los siguientes turnos: '
);

['lunes', 'martes', 'miercoles', 'jueves', 'viernes'].forEach((dia) => {
  console.log(`Para el día ${dia}:`);
  avionElegido[dia].map((disponible, index) => {
    console.log(`  El turno ${index+1} está ${disponible ? "Disponible" : "No disponible"}`);
  });
});

console.log('Reservas del usuario:');

for (let i = 0; i < usuario.reservas.length; i += 2) {
  const reserva = usuario.reservas[i];
  const turno = usuario.reservas[i + 1];
  console.log(
    `  - Reservaste el turno ${turno + 1} del día ${reserva.diaReserva}. Reservaste el dìa ${reserva.hoy.toLocaleDateString()}`
  );
}

