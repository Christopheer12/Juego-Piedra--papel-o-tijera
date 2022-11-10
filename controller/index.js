//Variables Jugador
let nombreDelJugador =""; 
nombreDelJugador =  prompt("Bienvenido al juego de piedra, papel o tijera. ¿Cuál es tu nombre?");
function eleccion(jugada) {
    let resultado = "";
    if (jugada === 1) {
        resultado = "Piedra 🥌";
    } else if (jugada === 2) {
        resultado = "Papel 📋 ";
    } else if (jugada === 3) {
        resultado = "Tijera ✂";
    } else {
        resultado = "Opcion no valida, Recuerda que las opciones son: 1 piedra, 2 es papel, 3 es piedra";
    }
    return resultado;
}

function combate(jugador,pc){
let puntos ="";
    if (jugador === pc) {
        puntos= "Ni ganaste, ni perdiste. " + nombreDelJugador+ " Sigue jugando";
    } else if (jugador === 1 && pc === 3) {
        puntos = "Ganaste esta ronda " + nombreDelJugador+ ", sumas un punto 💯";
        triunfo++;
    } else if (jugador === 2 && pc === 1) {
        puntos = "Ganaste esta ronda " + nombreDelJugador+ ", sumas un punto 💯";
        triunfo++;
    } else if (jugador === 3 && pc === 2) {
        puntos = "Ganaste esta ronda " + nombreDelJugador+ ", sumas un punto 💯";
        triunfo++;
    } else {
        puntos = "Perdiste esta ronda ante PC. " +nombreDelJugador+"😣 Sigue intentando";
        derrota++;

    }
    return puntos;

}

// contador de resultados
let triunfo = 0;
let derrota = 0;
// generar numero aleatorio
function aleatorio(numeroMinimo, numeroMaximo) {
    return Math.floor(
        Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo
    );
}
while (triunfo < 3 && derrota < 3) {
    // 1 piedra, 2 es papel, 3 es piedra
    let pc = aleatorio(1, 3);
    let jugador = 0;
    jugador = parseInt(
        prompt("Elige: 1 para piedra, 2 para papel, 3 para piedra")
    );
    alert(`Tu eleccion ${nombreDelJugador} es: ` + eleccion(jugador));
    alert("La eleccion de la PC es: " + eleccion(pc));
    alert(combate(jugador,pc));
    // combate

}
alert("El juego ha terminado " +nombreDelJugador+" Ganaste:" +triunfo + " veces, Perdiste: " + derrota + " veces");

