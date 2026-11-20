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
    // Botón exclusivo para personalizar Insta Army Bank
const btnPersonalizarBank = document.createElement("button");

btnPersonalizarBank.type = "button";
btnPersonalizarBank.id = "btnPersonalizarBank";
btnPersonalizarBank.textContent = "💜 PERSONALIZAR MI TARJETA";
btnPersonalizarBank.style.display = "none";

btnPersonalizarBank.style.background = "#6a0dad";
btnPersonalizarBank.style.color = "#ffffff";
btnPersonalizarBank.style.border = "2px solid #c58aff";
btnPersonalizarBank.style.borderRadius = "12px";
btnPersonalizarBank.style.padding = "13px 16px";
btnPersonalizarBank.style.fontWeight = "bold";
btnPersonalizarBank.style.cursor = "pointer";

btnAvisarEdicion.parentElement.insertBefore(
    btnPersonalizarBank,
    btnAvisarEdicion
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

       // ==========================================
// BOTONES SEGÚN LA EDICIÓN SELECCIONADA
// ==========================================

const esBank = archivo === "instaarmybank.jpg";

// Mostrar PERSONALIZAR solamente en Insta Army Bank
btnPersonalizarBank.style.display = esBank
    ? "inline-block"
    : "none";

// Mostrar AVÍSAME en las ediciones pendientes
if (btnAvisarEdicion) {
    btnAvisarEdicion.style.display =
        (!esCalendario && !esBank)
            ? "inline-block"
            : "none";
}

        vistaPrevia.classList.remove("oculta");

    });

    listaDisenos.appendChild(imagen);

});


    // ==========================================
    // ABRIR EDITOR INSTA ARMY BANK
    // ==========================================

    btnPersonalizarBank.addEventListener("click", () => {

        // Cerrar vista previa
        vistaPrevia.classList.add("oculta");

        // Ocultar menú de diseños
        document.getElementById("menu-disenos")
            .classList.add("oculta");

        // Abrir editor bancario
        abrirEditorInstaArmyBank();

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
// CREAR IMAGEN ESPECIAL PARA COMPARTIR EN TIKTOK
// ==========================================

async function crearArchivoParaTikTok() {

    if (!calendarioArchivo) return null;

    return new Promise((resolve, reject) => {

        const lector = new FileReader();

        lector.onload = () => {

            const imagen = new Image();

            imagen.onload = () => {

                const canvas = document.createElement("canvas");
                const contexto = canvas.getContext("2d");

                canvas.width = imagen.width;
                canvas.height = imagen.height;

                // Dibujar la credencial original
                contexto.drawImage(
                    imagen,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

                // Caja semitransparente para el texto
                const cajaAlto = canvas.height * 0.22;
                const cajaY = (canvas.height - cajaAlto) / 2;

                contexto.fillStyle = "rgba(0, 0, 0, 0.45)";
                contexto.fillRect(
                    0,
                    cajaY,
                    canvas.width,
                    cajaAlto
                );

                // Texto grande sobre la credencial
                let tamanoFuente = Math.floor(canvas.width * 0.07);

                contexto.textAlign = "center";
                contexto.textBaseline = "middle";
                contexto.lineJoin = "round";

                function ajustarTexto(texto, anchoMaximo) {
                    contexto.font = `bold ${tamanoFuente}px Arial`;

                    while (
                        contexto.measureText(texto).width > anchoMaximo &&
                        tamanoFuente > 20
                    ) {
                        tamanoFuente--;
                        contexto.font = `bold ${tamanoFuente}px Arial`;
                    }
                }

                const texto = "QUÉ FÁCIL TENER LAS EDICIONES ESPECIALES 💜";

                ajustarTexto(texto, canvas.width * 0.88);

                contexto.strokeStyle = "#000000";
                contexto.lineWidth = Math.max(4, Math.floor(tamanoFuente * 0.12));
                contexto.fillStyle = "#ffffff";

                contexto.strokeText(
                    texto,
                    canvas.width / 2,
                    canvas.height / 2
                );

                contexto.fillText(
                    texto,
                    canvas.width / 2,
                    canvas.height / 2
                );

                canvas.toBlob((blob) => {

                    if (!blob) {
                        reject(new Error("No se pudo crear la imagen para TikTok."));
                        return;
                    }

                    const archivoTikTok = new File(
                        [blob],
                        "edicion-especial-tiktok.jpg",
                        { type: "image/jpeg" }
                    );

                    resolve(archivoTikTok);

                }, "image/jpeg", 0.95);

            };

            imagen.onerror = () => {
                reject(new Error("No se pudo leer la imagen para TikTok."));
            };

            imagen.src = lector.result;
        };

        lector.onerror = () => {
            reject(new Error("No se pudo procesar el archivo."));
        };

        lector.readAsDataURL(calendarioArchivo);

    });
}


// ==========================================
// COMPARTIR EN TIKTOK Y DESCARGAR
// ==========================================

btnCompartirTikTok.addEventListener("click", async () => {

    if (!calendarioArchivo) return;

    try {

        // Descargar la credencial original
        descargarCalendarioSeleccionado();

        // Crear la versión con texto para TikTok
        const archivoTikTok = await crearArchivoParaTikTok();

        if (!archivoTikTok) {
            throw new Error("No se pudo crear el archivo para TikTok.");
        }

        const puedeCompartir =
            typeof navigator.share === "function" &&
            typeof navigator.canShare === "function" &&
            navigator.canShare({
                files: [archivoTikTok]
            });

        if (!puedeCompartir) {

            mensajeTikTok.textContent =
                "Tu credencial ya se descargó. " +
                "Si tu dispositivo no permite compartirla directo, " +
                "puedes subirla manualmente a TikTok desde tu galería.";

            btnDescargaAlternativa.classList.remove("oculta");
            return;
        }

        await navigator.share({
            files: [archivoTikTok],
            title: "Ediciones Especiales",
            text: "QUÉ FÁCIL TENER LAS EDICIONES ESPECIALES 💜"
        });

    } catch (error) {

        if (error.name === "AbortError") {
            return;
        }

        console.error("Error al compartir:", error);

        mensajeTikTok.textContent =
            "Se descargó tu credencial, pero no se pudo abrir " +
            "el menú para compartir. Puedes subirla manualmente a TikTok.";

        btnDescargaAlternativa.classList.remove("oculta");
    }

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
// EDITOR EXCLUSIVO INSTA ARMY BANK
// ==========================================

const editorBank = document.getElementById(
    "editor-instaarmybank"
);

const nombreBank = document.getElementById(
    "nombreInstaArmyBank"
);

const btnGenerarBank = document.getElementById(
    "btnGenerarInstaArmyBank"
);

const btnDescargarBank = document.getElementById(
    "btnDescargarInstaArmyBank"
);

const btnCerrarBank = document.getElementById(
    "btnCerrarInstaArmyBank"
);

const canvasBank = document.getElementById(
    "canvasInstaArmyBank"
);

let tarjetaBankGenerada = false;


// ==========================================
// ABRIR EDITOR INSTA ARMY BANK
// ==========================================

function abrirEditorInstaArmyBank() {

    if (!editorBank) return;

    editorBank.classList.remove("oculta");

    nombreBank.value = "";

    btnDescargarBank.style.display = "none";

    tarjetaBankGenerada = false;

    editorBank.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ==========================================
// GENERAR TARJETA CON NOMBRE
// ==========================================

async function generarInstaArmyBank() {

    const nombre = nombreBank.value.trim();

    if (!nombre) {
        alert("💜 Escribe el nombre para tu tarjeta.");
        return;
    }

    try {

        // Cargar fuente personalizada
        await document.fonts.load(
            '80px "PraysireDemo"'
        );

        // Cargar plantilla limpia
        const plantilla = new Image();

        plantilla.src = "./instaarmybankplantilla.jpg";

        await plantilla.decode();

        // Mantener las dimensiones originales
        canvasBank.width = plantilla.naturalWidth;
        canvasBank.height = plantilla.naturalHeight;

        const ctx = canvasBank.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvasBank.width,
            canvasBank.height
        );

        ctx.drawImage(
            plantilla,
            0,
            0,
            canvasBank.width,
            canvasBank.height
        );

        // ==================================
        // COORDENADAS DEL NOMBRE
        // ==================================

        const ancho = canvasBank.width;
        const alto = canvasBank.height;

        const centroX = ancho * 0.50;
        const centroY = alto * 0.71;

        const anchoMaximo = ancho * 0.86;

        let tamano = ancho * 0.08;

        ctx.save();

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineJoin = "round";

        // Ajustar texto al espacio disponible
        ctx.font = `${tamano}px "PraysireDemo"`;

        while (
            ctx.measureText(nombre).width > anchoMaximo &&
            tamano > 20
        ) {

            tamano -= 2;

            ctx.font = `${tamano}px "PraysireDemo"`;

        }

        // Color dorado con contorno morado
        ctx.fillStyle = "#d8b45b";
        ctx.strokeStyle = "#6f4a8b";

        ctx.lineWidth = Math.max(3, tamano * 0.075);

        ctx.strokeText(
            nombre,
            centroX,
            centroY,
            anchoMaximo
        );

        ctx.fillText(
            nombre,
            centroX,
            centroY,
            anchoMaximo
        );

        ctx.restore();

        tarjetaBankGenerada = true;

        btnDescargarBank.style.display = "block";

    } catch (error) {

        console.error(
            "Error al generar Insta Army Bank:",
            error
        );

        alert(
            "No se pudo generar la tarjeta. " +
            "Revisa la plantilla y la fuente."
        );

    }

}


// ==========================================
// IMAGEN PARA TIKTOK - EDICIONES ESPECIALES
// FUNCIONA CON TODAS LAS EDICIONES
// ==========================================

async function crearImagenTikTokEdicion(imagenOriginal) {

    const imagen = new Image();

    const ruta = typeof imagenOriginal === "string"
        ? imagenOriginal
        : imagenOriginal.toDataURL("image/png");

    imagen.src = ruta;

    await imagen.decode();

    const canvasTikTok = document.createElement("canvas");

    canvasTikTok.width = imagen.naturalWidth;
    canvasTikTok.height = imagen.naturalHeight;

    const ctx = canvasTikTok.getContext("2d");

    const ancho = canvasTikTok.width;
    const alto = canvasTikTok.height;

    // Dibujar la edición original
    ctx.drawImage(imagen, 0, 0, ancho, alto);

    // Franja morada semitransparente
    const altoFranja = alto * 0.34;
    const inicioFranja = (alto - altoFranja) / 2;

    ctx.fillStyle = "rgba(55, 10, 80, 0.78)";
    ctx.fillRect(0, inicioFranja, ancho, altoFranja);

    // Mensaje que aparecerá en TikTok
    const lineas = [
        "QUÉ FÁCIL TENER",
        "LAS EDICIONES",
        "ESPECIALES 💜"
    ];

    let tamano = Math.round(
        Math.min(ancho * 0.085, alto * 0.10)
    );

    const minimo = Math.max(12, Math.round(ancho * 0.025));

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineJoin = "round";

    // Ajustar el tamaño según la imagen
    while (tamano > minimo) {

        ctx.font = `bold ${tamano}px Arial`;

        if (lineas.every(linea =>
            ctx.measureText(linea).width <= ancho * 0.90
        )) {
            break;
        }

        tamano -= 2;
    }

    ctx.font = `bold ${tamano}px Arial`;

    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#350052";
    ctx.lineWidth = Math.max(3, tamano * 0.10);

    const separacion = tamano * 1.4;
    const centroY = alto / 2;

    lineas.forEach((linea, indice) => {

        const y = centroY +
            (indice - 1) * separacion;

        ctx.strokeText(linea, ancho / 2, y);
        ctx.fillText(linea, ancho / 2, y);

    });

    // Devolver una copia, sin alterar la original
    return canvasTikTok.toDataURL("image/jpeg", 0.95);

}

// ==========================================
// DESCARGAR TARJETA PERSONALIZADA
// ==========================================

function descargarInstaArmyBank() {

    if (!tarjetaBankGenerada) {

        alert("Primero genera tu tarjeta 💜");
        return;

    }

    const enlace = document.createElement("a");

    enlace.href = canvasBank.toDataURL(
        "image/jpeg",
        0.98
    );

    enlace.download = "InstaArmyBank.jpg";

    document.body.appendChild(enlace);

    enlace.click();

    enlace.remove();

}


// ==========================================
// BOTONES DEL EDITOR
// ==========================================

if (btnGenerarBank) {

    btnGenerarBank.addEventListener(
        "click",
        generarInstaArmyBank
    );

}

if (btnDescargarBank) {

    btnDescargarBank.addEventListener(
        "click",
        descargarInstaArmyBank
    );

}

if (btnCerrarBank) {

    btnCerrarBank.addEventListener("click", () => {

        // Cerrar editor
        editorBank.classList.add("oculta");

        // Regresar al menú de diseños
        document.getElementById("menu-disenos")
            .classList.remove("oculta");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

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

