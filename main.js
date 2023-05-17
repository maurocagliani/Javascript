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

//agrego el hijo el nodo creado

// //Se le puede decir en que parte del body?
// [Tutora] Diana Mottura 20:43
// sí!
// Ángel León 20:43
// como?
// [Tutora] Diana Mottura 20:44
// podés obtener con getElement a qué lugar del html querés agregarlo
// estaba escribiendo jaja
// por ej
// Ángel León 20:44
// @[Tutora] Diana Mottura ah jajaj perdón la ansiedad
// [Tutora] Diana Mottura 20:44
// const contenedor = document.getElementById("contenedor")

// contenedor.appendChild(elemento)

// let parrafo = document.createElement("p");
// parrafo.innerHTML = "<p>Seleccionà el dìa y turno para reservar un turno</p>";

// document.body.append(parrafo);

let parrafo = document.createElement("p");
parrafo.textContent = "Selecciona el día y turno para reservar un turno";
document.body.appendChild(parrafo);
let producto = {
  id: 1,
  nombre: "Patagonia",
  precio: 650
};

let plantillaNueva = document.createElement("p");
// alt+96
plantillaNueva.innerHTML = `
ID: ${producto.id} - Producto: ${producto.nombre} - Precio: ${producto.precio};
`;

document.main.appendChild(plantillaNueva);


//Eventos con nombre de evento y funcion de retorno como parametro

// let botonPrincipal = document.getElementById(btnPrincipal);
// botonPrincipal.addEventListener('click', respuestaClick)
//   function respuestaClick(){
//     console.log("respuesta1");
// }

//========= opcion 2: Emplear propiedad del NODO

let botonPrincipal = document.getElementById(btnPrincipal);
botonPrincipal.onclick = () => {
  console.log("respuesta 2");
}
 

//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");
//Array con la información a agregar
let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}
