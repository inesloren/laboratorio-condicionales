/*function generarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 101);
}

const numeroParaAcertar: number = generarNumeroAleatorio();

type Estado =
   | "NO_ES_UN_NUMERO"
   | "NO_ES_EL_NUMERO_SECRETO_ES_MAYOR"
   | "NO_ES_EL_NUMERO_SECRETO_ES_MENOR"
   | "ES_EL_NUMERO_SECRETO"
   | "GAME_OVER";

const MAXIMO_INTENTOS: number = 5;
let numeroDeIntentos: number = 0;

const hasSuperadoElNumeroDeIntentos = (): boolean => {
    return numeroDeIntentos >= MAXIMO_INTENTOS;
};

const muestraNumeroDeIntentos = (): void => {
    const textoIntentos = document.getElementById("intentos");
    if (textoIntentos) {  
        textoIntentos.innerHTML = `${numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
    }
};

document.addEventListener("DOMContentLoaded", muestraNumeroDeIntentos);

const gestionarGameOver = (estado: Estado): void => {
    if (estado === "GAME_OVER") {
        const botonComprobar = document.getElementById("comprobar") as HTMLButtonElement;
        if (botonComprobar) {
            botonComprobar.disabled = true;
        }
    }
};

const muestraMensajeComprobacion = (texto: string, estado: Estado): void => {
    let mensaje: string = "";

    switch (estado) {
        case "NO_ES_UN_NUMERO":
            mensaje = `"${texto}" no es un numero 🤨, prueba otra vez`;
            break;
        case "NO_ES_EL_NUMERO_SECRETO_ES_MAYOR":
            mensaje = `Lo siento ${texto}, el número no es el correcto 😢, pero es mayor que el secreto`;
            break;
        case "NO_ES_EL_NUMERO_SECRETO_ES_MENOR":
            mensaje = `Lo siento ${texto}, el número no es el correcto 😢, pero es menor que el secreto`;
            break;
        case "ES_EL_NUMERO_SECRETO":
            mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
            break;
        case "GAME_OVER":
            mensaje = `GAME OVER`;
            break;
        default:
            mensaje = "No deberías de estar aquí";
            break;
    }

    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado) {
        elementoResultado.innerHTML = mensaje;
    }
};

const comprobarNumero = (texto: string): Estado => {
    const numero: number = parseInt(texto);
    const esUnNumero: boolean = !isNaN(numero);

    if (!esUnNumero) {
        return "NO_ES_UN_NUMERO";
    }

    if (hasSuperadoElNumeroDeIntentos()) {
        return "GAME_OVER";
    }

    if (numero === numeroParaAcertar) {
        return "ES_EL_NUMERO_SECRETO";
    }

    return numero > numeroParaAcertar
        ? "NO_ES_EL_NUMERO_SECRETO_ES_MAYOR"
        : "NO_ES_EL_NUMERO_SECRETO_ES_MENOR";
};

const handleCompruebaClick = (): void => {
    let texto: string = "";
    const inputElement = document.getElementById("numero");
    if (inputElement && inputElement instanceof HTMLInputElement) {
        texto = inputElement.value;
    }
    numeroDeIntentos++;  // Incrementar antes de la comprobación
    const estado: Estado = comprobarNumero(texto);
    muestraMensajeComprobacion(texto, estado);
    muestraNumeroDeIntentos();
    gestionarGameOver(estado);
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar?.addEventListener("click", handleCompruebaClick);/*
