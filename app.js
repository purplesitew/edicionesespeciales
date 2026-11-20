document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // PANTALLA DE INICIO - 5 SEGUNDOS
    // ==========================================

    const pantallaInicio = document.getElementById("pantalla-inicio");
    const aplicacion = document.getElementById("aplicacion");

    setTimeout(() => {

        pantallaInicio.style.display = "none";
        aplicacion.classList.remove("oculta");

    }, 5000);


    // ==========================================
    // GALERÍA DE DISEÑOS
    // ==========================================

    const listaDisenos = document.getElementById("lista-disenos");
    const vistaPrevia = document.getElementById("vista-previa");
    const imagenVistaPrevia = document.getElementById("imagen-vista-previa");
    const btnCerrar = document.getElementById("btnCerrar");
   const btnDescargar = document.getElementById("btnDescargar");

    let disenoSeleccionado = null;

    // CAMBIA ESTE NÚMERO SEGÚN LA CANTIDAD
    // DE DISEÑOS QUE SUBAS A GITHUB
   const cantidadDisenos = 8;

    
// ==========================================
// GALERÍA DE EDICIONES ESPECIALES
// ==========================================

// Primeras 8 imágenes: descarga disponible
const calendarios = [
    "E1.jpg",
    "E2.jpg",
    "E3.jpg",
    "E4.jpg",
    "E5.jpg",
    "E6.jpg",
    "E7.jpg",
    "E8.jpg"
];


// ==========================================
// EDICIONES AGRUPADAS POR TEMÁTICA
// ==========================================

const edicionesPendientes = [

    // 🎂 CUMPLEAÑOS Y FELICITACIONES
    "felicitacionjimininstarmy.jpg",
    "felicitacionjiminkorean.jpg",
    "felicitacionVinstaarmy.jpg",
    "felicitacionsugainstaarmy.jpg",
    "felicitacionJKinstaarmy.jpg",

    // 💳 CREDENCIALES BANCARIAS
    "instaarmybank.jpg",
    "instaarmybankplatinum.jpg",
    "instaarmygolden.jpg",
    "instaarmybienestar.jpg",

    // 📜 DIPLOMAS Y CERTIFICADOS
    "diplomainstaarmy.jpg",
    "CertificadodebautismoInstaarmy.jpg",

    // 💜 OTRAS EDICIONES
    "welcomebts.jpg",
    "runjininstaarmy.jpg",
    "Mndiainstaarmy.jpg",
    
"instaarmyswim.jpg",

// ==========================================
// NUEVAS EDICIONES ESPECIALES
// ==========================================

"instaarmyfelicitacionjin.jpg",
"mcmorialinstaarmy.jpg",
"instaarmyfesta2026.jpg",
"instaarmy2026.jpg",
"instaarmycomeback.jpg",
"instarmymember.jpg",
"instaarmyhoseok.jpg",
"armyween.jpg",
"Etiquetacola.jpg"


];


const todosLosDisenos = [
    ...calendarios,
    ...edicionesPendientes
];

const btnAvisarEdicion = document.getElementById(
    "btnAvisarEdicion"
);

todosLosDisenos.forEach((archivo) => {

    const imagen = document.createElement("img");

    imagen.src = "./" + archivo;
    imagen.alt = "Edición especial " + archivo;
    imagen.className = "plantilla-diseno";
    imagen.loading = "lazy";

    // Ocultar únicamente imágenes que no carguen
    imagen.onerror = () => {
        imagen.remove();
    };

    imagen.addEventListener("click", () => {

        disenoSeleccionado = archivo;

        imagenVistaPrevia.src = "./" + archivo;

        const esCalendario = calendarios.includes(archivo);

        // E1-E8 conservan su descarga y TikTok
        btnDescargar.style.display = esCalendario
            ? "inline-block"
            : "none";

        // Las otras 15 muestran AVÍSAME
        if (btnAvisarEdicion) {
            btnAvisarEdicion.style.display = esCalendario
                ? "none"
                : "inline-block";
        }

        vistaPrevia.classList.remove("oculta");

    });

    listaDisenos.appendChild(imagen);

});


// ==========================================
// BOTÓN AVÍSAME - EDICIONES ESPECIALES
// ==========================================

if (btnAvisarEdicion) {

    btnAvisarEdicion.addEventListener("click", () => {

        if (!disenoSeleccionado) {
            alert("Primero selecciona una edición.");
            return;
        }

        // Enviar la edición seleccionada
        // al sistema de notificaciones
        window.dispatchEvent(
            new CustomEvent("solicitarAvisoEdicion", {
                detail: {
                    edicion: disenoSeleccionado
                }
            })
        );

    });


}



    // ==========================================
    // CERRAR VISTA PREVIA
    // ==========================================

    btnCerrar.addEventListener("click", () => {

        vistaPrevia.classList.add("oculta");
        imagenVistaPrevia.src = "";
        disenoSeleccionado = null;

    });



// ==========================================
// COMPARTIR Y DESCARGAR CALENDARIOS E1 - E8
// ==========================================

const modalTikTok = document.getElementById("modalCompartirTikTok");

const btnCompartirTikTok = document.getElementById("btnCompartirTikTok");

const btnDescargaAlternativa = document.getElementById("btnDescargaAlternativa");

const btnCerrarCompartir = document.getElementById("btnCerrarCompartir");

const mensajeTikTok = document.getElementById("mensajeCompartirTikTok");

let calendarioArchivo = null;
let calendarioURL = null;


// ==========================================
// ABRIR VENTANA AL PRESIONAR DESCARGAR
// ==========================================

btnDescargar.addEventListener("click", async () => {

    if (!disenoSeleccionado) return;

    const nombreCalendario = disenoSeleccionado;

    modalTikTok.classList.remove("oculta");

    btnCompartirTikTok.disabled = true;
    btnDescargaAlternativa.classList.add("oculta");

    mensajeTikTok.textContent = "Preparando calendario...";

    calendarioArchivo = null;

    if (calendarioURL) {
        URL.revokeObjectURL(calendarioURL);
        calendarioURL = null;
    }

    try {

        const respuesta = await fetch(`./${nombreCalendario}`);

        if (!respuesta.ok) {
            throw new Error("No se encontró el calendario.");
        }

        const imagen = await respuesta.blob();

        if (disenoSeleccionado !== nombreCalendario) return;

        calendarioArchivo = new File(
            [imagen],
            nombreCalendario,
            { type: "image/jpeg" }
        );

        calendarioURL = URL.createObjectURL(imagen);

        btnCompartirTikTok.disabled = false;

        mensajeTikTok.textContent =
            "Presiona COMPARTIR EN TIKTOK para " +
            "descargar tu calendario y compartirlo.";

    } catch (error) {

        console.error("Error al preparar calendario:", error);

        mensajeTikTok.textContent =
            "No se pudo preparar el calendario.";

    }

});


// ==========================================
// FUNCIÓN PARA INICIAR DESCARGA
// ==========================================

function descargarCalendarioSeleccionado() {

    if (!calendarioArchivo || !calendarioURL) return;

    const enlace = document.createElement("a");

    enlace.href = calendarioURL;
    enlace.download = calendarioArchivo.name;

    document.body.appendChild(enlace);

    enlace.click();
    enlace.remove();
}


// ==========================================
// COMPARTIR EN TIKTOK Y DESCARGAR
// ==========================================

btnCompartirTikTok.addEventListener("click", () => {

    if (!calendarioArchivo) return;

    const puedeCompartir =
        typeof navigator.share === "function" &&
        typeof navigator.canShare === "function" &&
        navigator.canShare({
            files: [calendarioArchivo]
        });

    // Intentar iniciar descarga al tocar el botón
    descargarCalendarioSeleccionado();

    if (!puedeCompartir) {

        mensajeTikTok.textContent =
            "Se intentó descargar tu calendario. " +
            "Para publicarlo, abre TikTok y " +
            "selecciona la imagen de tu galería.";

        btnDescargaAlternativa.classList.remove("oculta");

        return;
    }

    // Abrir menú nativo para compartir la imagen
    navigator.share({
        files: [calendarioArchivo]
    }).catch((error) => {

        if (error.name !== "AbortError") {

            console.error("Error al compartir:", error);

            mensajeTikTok.textContent =
                "No se pudo abrir el menú para compartir. " +
                "Puedes descargar el calendario y subirlo " +
                "manualmente a TikTok.";

            btnDescargaAlternativa.classList.remove("oculta");
        }

    });

});


// ==========================================
// DESCARGA ALTERNATIVA
// ==========================================

btnDescargaAlternativa.addEventListener("click", () => {

    descargarCalendarioSeleccionado();

});


// ==========================================
// CERRAR VENTANA EMERGENTE
// ==========================================

btnCerrarCompartir.addEventListener("click", () => {

    modalTikTok.classList.add("oculta");

});


    // ==========================================
    // REGISTRAR SERVICE WORKER
    // ==========================================

    if ("serviceWorker" in navigator) {

        window.addEventListener("load", () => {

            navigator.serviceWorker.register("./sw.js")
                .catch(error => {
                    console.error("Error al registrar SW:", error);
                });

        });

    }

});

