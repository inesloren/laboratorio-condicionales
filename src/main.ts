
let puntuacionUsuario = 0;

const muestraPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if(elementoPuntuacion){
        elementoPuntuacion.innerHTML = `Tu puntuación es<br><span>${puntuacionUsuario}</span>`;
    }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const dameCarta = () => {
    let cartaObtenida = Math.floor(Math.random() * 10) + 1;
    if (cartaObtenida > 7) {
        cartaObtenida += 2;
    }
    return cartaObtenida;
};

const mostrarCarta = (carta: number) => {
    let imagenCarta = document.getElementById("imagen-carta");
    let valor = 0;
    if(imagenCarta){
        switch (carta) {
            case 1:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg");
                valor = 1;
                break;
            case 2:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg");
                valor = 2;
                break;
            case 3:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg");
                valor = 3;
                break;
            case 4:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg");
                valor = 4;
                break;
            case 5:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg");
                valor = 5;
                break;
            case 6:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg");
                valor = 6;
                break;
            case 7:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg");
                valor = 7;
                break;
            case 10:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg");
                valor = 0.5;
                break;
            case 11:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg");
                valor = 0.5;
                break;
            case 12:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg");
                valor = 0.5;
                break;
            default:
                imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg");
                break;
        }
    }
    return valor;
}

const sumarPuntuación = (valor: number): void => {
    puntuacionUsuario += valor;
}

const gestionarGameOver = (puntuacionUsuario: number) => {
    if (puntuacionUsuario > 7.5) {
        const botonDameCarta = document.getElementById("dame-carta") as HTMLButtonElement;
        if (botonDameCarta) {
            botonDameCarta.disabled = true;
        }
        const botonMePlanto = document.getElementById("meplanto") as HTMLButtonElement;
        if (botonMePlanto) {
            botonMePlanto.disabled = true;
        }

        const elementoResultado = document.getElementById("resultado");
        if(elementoResultado){
            elementoResultado.innerHTML = `¡Game Over!`;
        }

        const elementoNuevaPartida =  document.getElementById("nuevapartida") as HTMLButtonElement;
        if(elementoNuevaPartida){
            elementoNuevaPartida.style.display = "block";
        }
        const imagenCarta = document.getElementById("imagen-carta");
        if(imagenCarta){
            imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
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
    } else if (puntuacionUsuario === 7.5) {
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    } else {
        mensaje = "No debería de estar aquí";
    }

    const botonDameCarta = document.getElementById("dame-carta") as HTMLButtonElement;
    if (botonDameCarta) {
        botonDameCarta.disabled = true;
    }
    const botonMePlanto = document.getElementById("meplanto") as HTMLButtonElement;
    if (botonMePlanto) {
        botonMePlanto.disabled = true;
    }
    const elementoResultado = document.getElementById("resultado");
    if(elementoResultado){
        elementoResultado.innerHTML = mensaje;
    }
    const elementoNuevaPartida =  document.getElementById("nuevapartida") as HTMLButtonElement;
    if(elementoNuevaPartida){
        elementoNuevaPartida.style.display = "block";
    }
}

const reiniciarPartida = (): void=> {
    puntuacionUsuario = 0;
    muestraPuntuacion();
    const botonDameCarta = document.getElementById("dame-carta") as HTMLButtonElement;
        if (botonDameCarta) {
            botonDameCarta.disabled = false;
        }
        const botonMePlanto = document.getElementById("meplanto") as HTMLButtonElement;
        if (botonMePlanto) {
            botonMePlanto.disabled = false;
        }
    const elementoResultado = document.getElementById("resultado");
        if(elementoResultado){
            elementoResultado.innerHTML = "";
        }
    const imagenCarta = document.getElementById("imagen-carta");
    if(imagenCarta){
        imagenCarta.setAttribute("src", "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg");
    }
    const elementoNuevaPartida =  document.getElementById("nuevapartida") as HTMLButtonElement;
        if(elementoNuevaPartida){
            elementoNuevaPartida.style.display = "none";
        }
}

const dameCartaClick = (): void => {
    let carta = dameCarta();
    let valor = mostrarCarta(carta);
    sumarPuntuación(valor);
    muestraPuntuacion();
    gestionarGameOver(puntuacionUsuario);
}

const botonDameCarta = document.getElementById("dame-carta");
botonDameCarta?.addEventListener("click", dameCartaClick);

const botonMePlanto = document.getElementById("meplanto");
botonMePlanto?.addEventListener("click", mePlantoClick);

const botonNuevaPartida = document.getElementById("nuevapartida");
botonNuevaPartida?.addEventListener("click", reiniciarPartida);

