
let puntuacionUsuario = 0;

const generarNumeroAleatorio = () => {
	return Math.random();
};

const generarNumeroCarta = (numeroAleatorio: number) => {
    const carta = Math.floor(numeroAleatorio * 10) + 1;
    if (carta > 7) {
        return carta + 2;
    }
    return carta;
};

const obtenerUrlCarta = (carta:number) => {
    switch (carta) {
        case 1:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        case 2:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        case 3:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        case 4:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        case 5:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        case 6:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        case 7:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        case 10:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        case 11:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        case 12:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        default:
            return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    }
}

const pintarUrlCarta = (urlCarta: string) => {
	const imagenCarta = document.getElementById('imagen-carta');
	
	if (imagenCarta && imagenCarta instanceof HTMLImageElement) {
		imagenCarta.src = urlCarta;
	}
};

const obtenerPuntosCarta = (carta: number) => {
	if (carta > 7) {
		return 0.5;
	}
	return carta;
};

const sumarPuntos = (puntos: number) => {
	return puntuacionUsuario + puntos;
};

const actualizarPuntos = (puntosSumados: number) => {
	puntuacionUsuario = puntosSumados;
};

const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if(elementoPuntuacion && elementoPuntuacion instanceof HTMLParagraphElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación es<br><span>${puntuacionUsuario}</span>`;
    }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const gestionarGameOver = (puntuacionUsuario: number) => {
    if (puntuacionUsuario > 7.5) {
        const botonDameCarta = document.getElementById("dame-carta");
        if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
        }
        const botonMePlanto = document.getElementById("meplanto");
        if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonMePlanto.disabled = true;
        }

        const elementoResultado = document.getElementById("resultado");
        if(elementoResultado && elementoResultado instanceof HTMLParagraphElement){
            elementoResultado.innerHTML = `¡Game Over!`;
        }

        const elementoNuevaPartida =  document.getElementById("nuevapartida");
        if(elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement){
            elementoNuevaPartida.style.display = "block";
        }
    }

    if(puntuacionUsuario === 7.5) {
        const elementoResultado = document.getElementById("resultado");
        if(elementoResultado && elementoResultado instanceof HTMLParagraphElement){
            elementoResultado.innerHTML = `¡Lo has clavado, enhorabuena!`;
        }
        const elementoNuevaPartida =  document.getElementById("nuevapartida");
        if(elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement){
            elementoNuevaPartida.style.display = "block";
        }
        const botonDameCarta = document.getElementById("dame-carta");
        if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
        }
        const botonMePlanto = document.getElementById("meplanto");
        if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonMePlanto.disabled = true;
        }
    }
};

const mePlantoClick = () => {
    let mensaje = "";

    // Usamos if-else en lugar del switch para manejar rangos
    if (puntuacionUsuario < 4 || puntuacionUsuario === 4.5) {
        mensaje = "Has sido muy conservador";
    } else if (puntuacionUsuario === 5 || puntuacionUsuario === 5.5) {
        mensaje = "Te ha entrado el canguelo eh?";
    } else if (puntuacionUsuario === 6 || puntuacionUsuario === 6.5) {
        mensaje = "Casi casi...";
    } else if (puntuacionUsuario === 7) {
        mensaje = "Casi casi...";
    } else {
        mensaje = "No debería de estar aquí";
    }

    const botonDameCarta = document.getElementById("dame-carta");
    if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.disabled = true;
    }
    const botonMePlanto = document.getElementById("meplanto");
    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.disabled = true;
    }
    const elementoResultado = document.getElementById("resultado");
    if(elementoResultado && elementoResultado instanceof HTMLParagraphElement){
        elementoResultado.innerHTML = mensaje;
    }
    const elementoNuevaPartida =  document.getElementById("nuevapartida");
    if(elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement){
        elementoNuevaPartida.style.display = "block";
    }
}

const reiniciarPartida = (): void=> {
    puntuacionUsuario = 0;
    muestraPuntuacion();
    const botonDameCarta = document.getElementById("dame-carta");
        if (botonDameCarta && botonDameCarta instanceof HTMLButtonElement) {
            botonDameCarta.disabled = false;
        }
        const botonMePlanto = document.getElementById("meplanto");
        if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
            botonMePlanto.disabled = false;
        }
    const elementoResultado = document.getElementById("resultado");
        if(elementoResultado && elementoResultado instanceof HTMLParagraphElement){
            elementoResultado.innerHTML = "";
        }
    const imagenCarta = document.getElementById("imagen-carta");
    if(imagenCarta && imagenCarta instanceof HTMLImageElement){
        imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
    }
    const elementoNuevaPartida =  document.getElementById("nuevapartida");
        if(elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement){
            elementoNuevaPartida.style.display = "none";
        }
}

const dameCartaClick = (): void => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    pintarUrlCarta(urlCarta);
    const puntos = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntos(puntos);
    actualizarPuntos(puntosSumados);
    muestraPuntuacion();
    gestionarGameOver(puntuacionUsuario);
}

const botonDameCarta = document.getElementById("dame-carta");
botonDameCarta?.addEventListener("click", dameCartaClick);

const botonMePlanto = document.getElementById("meplanto");
botonMePlanto?.addEventListener("click", mePlantoClick);

const botonNuevaPartida = document.getElementById("nuevapartida");
botonNuevaPartida?.addEventListener("click", reiniciarPartida);

