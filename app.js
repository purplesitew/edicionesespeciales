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
// REVERSOS EXCLUSIVOS DE CALENDARIOS E1-E8
// ==========================================

const reversosCalendarios = {
    "E1.jpg": "E1REVERSO.jpg",
    "E2.jpg": "E2REVERSO.jpg",
    "E3.jpg": "E3REVERSO.jpg",
    "E4.jpg": "E4REVERSO.jpg",
    "E5.jpg": "E5REVERSO.jpg",
    "E6.jpg": "E6REVERSO.jpg",
    "E7.jpg": "E7REVERSO.jpg",
    "E8.jpg": "E8REVERSO.jpg"
};

const instruccionesCalendarios = "instruccionesE.jpg";

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
    // Botón exclusivo para personalizar Insta Army Bienestar
const btnPersonalizarBienestar = document.createElement("button");

btnPersonalizarBienestar.type = "button";
btnPersonalizarBienestar.id = "btnPersonalizarBienestar";
btnPersonalizarBienestar.textContent = "💜 PERSONALIZAR MI TARJETA BIENESTAR";
btnPersonalizarBienestar.style.display = "none";

btnPersonalizarBienestar.style.background = "#6a0dad";
btnPersonalizarBienestar.style.color = "#ffffff";
btnPersonalizarBienestar.style.border = "2px solid #c58aff";
btnPersonalizarBienestar.style.borderRadius = "12px";
btnPersonalizarBienestar.style.padding = "13px 16px";
btnPersonalizarBienestar.style.fontWeight = "bold";
btnPersonalizarBienestar.style.cursor = "pointer";

btnAvisarEdicion.parentElement.insertBefore(
    btnPersonalizarBienestar,
    btnAvisarEdicion
);
    // Botón exclusivo para personalizar Insta Army Bank Platinum
const btnPersonalizarBankPlatinum = document.createElement("button");

btnPersonalizarBankPlatinum.type = "button";
btnPersonalizarBankPlatinum.id = "btnPersonalizarBankPlatinum";
btnPersonalizarBankPlatinum.textContent =
    "💜 PERSONALIZAR MI TARJETA PLATINUM";
btnPersonalizarBankPlatinum.style.display = "none";

btnPersonalizarBankPlatinum.style.background = "#6a0dad";
btnPersonalizarBankPlatinum.style.color = "#ffffff";
btnPersonalizarBankPlatinum.style.border = "2px solid #c58aff";
btnPersonalizarBankPlatinum.style.borderRadius = "12px";
btnPersonalizarBankPlatinum.style.padding = "13px 16px";
btnPersonalizarBankPlatinum.style.fontWeight = "bold";
btnPersonalizarBankPlatinum.style.cursor = "pointer";

btnAvisarEdicion.parentElement.insertBefore(
    btnPersonalizarBankPlatinum,
    btnAvisarEdicion
);

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

// ==========================================
// BOTÓN EXCLUSIVO CERTIFICADO DE BAUTISMO
// ==========================================

const btnPersonalizarCertificadoBautismo =
    document.createElement("button");

btnPersonalizarCertificadoBautismo.type = "button";
btnPersonalizarCertificadoBautismo.id =
    "btnPersonalizarCertificadoBautismo";

btnPersonalizarCertificadoBautismo.textContent =
    "💜 PERSONALIZAR CERTIFICADO";

btnPersonalizarCertificadoBautismo.style.display = "none";

btnPersonalizarCertificadoBautismo.style.background = "#6a0dad";
btnPersonalizarCertificadoBautismo.style.color = "#ffffff";
btnPersonalizarCertificadoBautismo.style.border = "2px solid #c58aff";
btnPersonalizarCertificadoBautismo.style.borderRadius = "12px";
btnPersonalizarCertificadoBautismo.style.padding = "13px 16px";
btnPersonalizarCertificadoBautismo.style.fontWeight = "bold";
btnPersonalizarCertificadoBautismo.style.cursor = "pointer";

// Colocar el botón junto al de Insta Army Bank
btnAvisarEdicion.parentElement.insertBefore(
    btnPersonalizarCertificadoBautismo,
    btnAvisarEdicion
);

    
// ==========================================
// BOTÓN EXCLUSIVO DIPLOMA INSTA ARMY
// ==========================================

const btnPersonalizarDiploma = document.createElement("button");

btnPersonalizarDiploma.type = "button";
btnPersonalizarDiploma.id = "btnPersonalizarDiploma";

btnPersonalizarDiploma.textContent =
    "💜 PERSONALIZAR MI DIPLOMA";

btnPersonalizarDiploma.style.display = "none";

btnPersonalizarDiploma.style.background = "#6a0dad";
btnPersonalizarDiploma.style.color = "#ffffff";
btnPersonalizarDiploma.style.border = "2px solid #c58aff";
btnPersonalizarDiploma.style.borderRadius = "12px";
btnPersonalizarDiploma.style.padding = "14px 18px";
btnPersonalizarDiploma.style.fontWeight = "bold";
btnPersonalizarDiploma.style.cursor = "pointer";

btnAvisarEdicion.parentElement.insertBefore(
    btnPersonalizarDiploma,
    btnAvisarEdicion
);

    
// ==========================================
// BOTÓN EXCLUSIVO ETIQUETA COLA
// ==========================================

const btnPersonalizarEtiquetaCola =
    document.createElement("button");

btnPersonalizarEtiquetaCola.type = "button";
btnPersonalizarEtiquetaCola.id = "btnPersonalizarEtiquetaCola";

btnPersonalizarEtiquetaCola.textContent =
    "💜 PERSONALIZAR MI ETIQUETA";

btnPersonalizarEtiquetaCola.style.display = "none";

btnPersonalizarEtiquetaCola.style.background = "#6a0dad";
btnPersonalizarEtiquetaCola.style.color = "#ffffff";
btnPersonalizarEtiquetaCola.style.border = "2px solid #c58aff";
btnPersonalizarEtiquetaCola.style.borderRadius = "12px";
btnPersonalizarEtiquetaCola.style.padding = "14px 18px";
btnPersonalizarEtiquetaCola.style.fontWeight = "bold";
btnPersonalizarEtiquetaCola.style.cursor = "pointer";

// Colocar el botón en la vista previa
btnAvisarEdicion.parentElement.insertBefore(
    btnPersonalizarEtiquetaCola,
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

        btnPersonalizar2026.style.display =
    archivo === "instaarmy2026.jpg"
        ? "inline-block"
        : "none";

        if (archivo === "instaarmy2026.jpg") {
    btnAvisarEdicion.style.display = "none";
    btnDescargar.style.display = "none";
}
          // ==========================================
// MOSTRAR BOTÓN PERSONALIZAR DIPLOMA
// ==========================================

btnPersonalizarDiploma.style.display =
    archivo === "diplomainstaarmy.jpg"
        ? "inline-block"
        : "none";

        const esBienestar =
    archivo === "instaarmybienestar.jpg";

btnPersonalizarBienestar.style.display =
    esBienestar ? "inline-block" : "none";

if (esBienestar) {
    btnDescargar.style.display = "none";
    btnAvisarEdicion.style.display = "none";
}
        
        btnPersonalizarBank.style.display =
    archivo === "instaarmybank.jpg"
        ? "inline-block"
        : "none";

btnPersonalizarBankPlatinum.style.display =
    archivo === "instaarmybankplatinum.jpg"
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

        // ==========================================
// MOSTRAR BOTÓN DEL CERTIFICADO DE BAUTISMO
// ==========================================

const esCertificadoBautismo =
    archivo === "CertificadodebautismoInstaarmy.jpg";

btnPersonalizarCertificadoBautismo.style.display =
    esCertificadoBautismo
        ? "inline-block"
        : "none";
        
// Mostrar AVÍSAME en las ediciones pendientes
if (btnAvisarEdicion) {
    btnAvisarEdicion.style.display =
       (!esCalendario && !esBank && !esCertificadoBautismo && archivo !== "instaarmybankplatinum.jpg" && !esBienestar && archivo !== "diplomainstaarmy.jpg")
            ? "inline-block"
            : "none";
}

        
// ==========================================
// MOSTRAR BOTÓN PERSONALIZAR ETIQUETA COLA
// ==========================================

const esEtiquetaCola =
    archivo === "Etiquetacola.jpg";

// Mostrar el botón solo para Etiqueta Cola
btnPersonalizarEtiquetaCola.style.display =
    esEtiquetaCola ? "inline-block" : "none";

// Ocultar AVÍSAME cuando sea Etiqueta Cola
if (esEtiquetaCola && btnAvisarEdicion) {
    btnAvisarEdicion.style.display = "none";
}

        vistaPrevia.classList.remove("oculta");

    });

    listaDisenos.appendChild(imagen);

});


  
// ==========================================
// ABRIR EDITOR INSTA ARMY BANK
// ==========================================

btnPersonalizarBank.addEventListener("click", () => {

    vistaPrevia.classList.add("oculta");

    document.getElementById("menu-disenos")
        .classList.add("oculta");

    abrirEditorInstaArmyBank();

});


// ==========================================
// ABRIR EDITOR INSTA ARMY BANK PLATINUM
// ==========================================

btnPersonalizarBankPlatinum.addEventListener("click", () => {

    vistaPrevia.classList.add("oculta");

    document.getElementById("menu-disenos")
        .classList.add("oculta");

    abrirEditorInstaArmyBankPlatinum();

});

 // ==========================================
// EDITOR EXCLUSIVO INSTA ARMY BANK PLATINUM
// ==========================================

const editorBankPlatinum = document.getElementById(
    "editor-instaarmybankplatinum"
);

const nombreBankPlatinum = document.getElementById(
    "nombreInstaArmyBankPlatinum"
);

const btnGenerarBankPlatinum = document.getElementById(
    "btnGenerarInstaArmyBankPlatinum"
);

const btnDescargarBankPlatinum = document.getElementById(
    "btnDescargarInstaArmyBankPlatinum"
);

const btnCerrarBankPlatinum = document.getElementById(
    "btnCerrarInstaArmyBankPlatinum"
);

const canvasBankPlatinum = document.getElementById(
    "canvasInstaArmyBankPlatinum"
);

let tarjetaBankPlatinumGenerada = false;


// ==========================================
// ABRIR EDITOR INSTA ARMY BANK PLATINUM
// ==========================================

function abrirEditorInstaArmyBankPlatinum() {

    if (!editorBankPlatinum) return;

    editorBankPlatinum.classList.remove("oculta");

    nombreBankPlatinum.value = "";

    btnDescargarBankPlatinum.style.display = "none";

    tarjetaBankPlatinumGenerada = false;

    const ctx = canvasBankPlatinum.getContext("2d");
    ctx.clearRect(
        0,
        0,
        canvasBankPlatinum.width,
        canvasBankPlatinum.height
    );

    editorBankPlatinum.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
    
// ==========================================
// EDITOR EXCLUSIVO INSTA ARMY BIENESTAR
// ==========================================

const editorBienestar = document.getElementById(
    "editor-instaarmybienestar"
);

const nombreBienestar = document.getElementById(
    "nombreInstaArmyBienestar"
);

const btnGenerarBienestar = document.getElementById(
    "btnGenerarInstaArmyBienestar"
);

const btnDescargarBienestar = document.getElementById(
    "btnDescargarInstaArmyBienestar"
);

const btnCerrarBienestar = document.getElementById(
    "btnCerrarInstaArmyBienestar"
);

const canvasBienestar = document.getElementById(
    "canvasInstaArmyBienestar"
);

let tarjetaBienestarGenerada = false;


// ==========================================
// ABRIR EDITOR INSTA ARMY BIENESTAR
// ==========================================

function abrirEditorInstaArmyBienestar() {
    // ==========================================
// GENERAR TARJETA INSTA ARMY BIENESTAR
// ==========================================

async function generarInstaArmyBienestar() {

    const nombre = nombreBienestar.value.trim();

    if (!nombre) {
        alert("💜 Escribe el nombre para tu tarjeta.");
        return;
    }

    try {

        await document.fonts.load(
            '80px "ArchivoBlackRegular"'
        );

        const plantilla = new Image();

        plantilla.src = "./instaarmybienestarplantilla.jpg";

        await plantilla.decode();

        canvasBienestar.width = plantilla.naturalWidth;
        canvasBienestar.height = plantilla.naturalHeight;

        const ctx = canvasBienestar.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvasBienestar.width,
            canvasBienestar.height
        );

        ctx.drawImage(
            plantilla,
            0,
            0,
            canvasBienestar.width,
            canvasBienestar.height
        );

        const ancho = canvasBienestar.width;
        const alto = canvasBienestar.height;

        // ==========================================
        // POSICIÓN DEL NOMBRE
        // ==========================================

        const x = ancho * 0.06;
        const y = alto * 0.92;
        const anchoMaximo = ancho * 0.52;

        let tamano = Math.round(ancho * 0.12);

        ctx.save();

        ctx.textAlign = "left";
        ctx.textBaseline = "bottom";
        ctx.lineJoin = "round";

        ctx.font = `${tamano}px "ArchivoBlackRegular"`;

        while (
            ctx.measureText(nombre).width > anchoMaximo &&
            tamano > 28
        ) {
            tamano -= 2;
            ctx.font = `${tamano}px "ArchivoBlackRegular"`;
        }

        // Color guinda / borgoña
        ctx.fillStyle = "#7b1238";

        ctx.fillText(
            nombre,
            x,
            y,
            anchoMaximo
        );

        ctx.restore();

        tarjetaBienestarGenerada = true;

        btnDescargarBienestar.style.display = "inline-block";

    } catch (error) {

        console.error(
            "Error al generar Insta Army Bienestar:",
            error
        );

        alert(
            "No se pudo generar la tarjeta Bienestar. " +
            "Revisa la plantilla o la fuente."
        );
    }
}


// ==========================================
// DESCARGAR TARJETA BIENESTAR
// ==========================================

function descargarInstaArmyBienestar() {

    if (!tarjetaBienestarGenerada) {
        alert("Primero genera tu tarjeta 💜");
        return;
    }

    const enlace = document.createElement("a");

    enlace.href = canvasBienestar.toDataURL(
        "image/jpeg",
        0.98
    );

    enlace.download = "InstaArmyBienestar.jpg";

    document.body.appendChild(enlace);

    enlace.click();

    enlace.remove();
}


// ==========================================
// BOTONES DEL EDITOR BIENESTAR
// ==========================================

if (btnGenerarBienestar) {
    btnGenerarBienestar.addEventListener(
        "click",
        generarInstaArmyBienestar
    );
}

if (btnDescargarBienestar) {
    btnDescargarBienestar.addEventListener(
        "click",
        descargarInstaArmyBienestar
    );
}

if (btnCerrarBienestar) {
    btnCerrarBienestar.addEventListener("click", () => {

        editorBienestar.classList.add("oculta");

        document.getElementById("menu-disenos")
            .classList.remove("oculta");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

    if (
        !editorBienestar ||
        !nombreBienestar ||
        !btnDescargarBienestar ||
        !canvasBienestar
    ) {
        alert("No se encontró el editor Bienestar.");
        return;
    }

    // Mostrar editor
    editorBienestar.classList.remove("oculta");

    // Limpiar nombre anterior
    nombreBienestar.value = "";

    // Ocultar descarga hasta generar la tarjeta
    btnDescargarBienestar.style.display = "none";

    tarjetaBienestarGenerada = false;

    // Limpiar vista previa anterior
    const ctx = canvasBienestar.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvasBienestar.width,
        canvasBienestar.height
    );

    // Llevar la pantalla al editor
    editorBienestar.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

btnPersonalizarBienestar.addEventListener("click", () => {

    // Cerrar vista previa
    vistaPrevia.classList.add("oculta");

    // Ocultar menú
    document.getElementById("menu-disenos")
        .classList.add("oculta");

    // Abrir editor de bienestar
    abrirEditorInstaArmyBienestar();

});

// ==========================================
// GENERAR TARJETA PLATINUM CON NOMBRE
// ==========================================

async function generarInstaArmyBankPlatinum() {

    const nombre = nombreBankPlatinum.value.trim();

    if (!nombre) {
        alert("💜 Escribe el nombre para tu tarjeta Platinum.");
        return;
    }

    try {

        await document.fonts.load('80px "GravuraLET"');

        const plantilla = new Image();
        plantilla.src = "./instaarmybankplatinumplantilla.jpg";

        await plantilla.decode();

        canvasBankPlatinum.width = plantilla.naturalWidth;
        canvasBankPlatinum.height = plantilla.naturalHeight;

        const ctx = canvasBankPlatinum.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvasBankPlatinum.width,
            canvasBankPlatinum.height
        );

        ctx.drawImage(
            plantilla,
            0,
            0,
            canvasBankPlatinum.width,
            canvasBankPlatinum.height
        );

        // ==================================
        // COORDENADAS DEL NOMBRE
        // ==================================

        const ancho = canvasBankPlatinum.width;
        const alto = canvasBankPlatinum.height;

        const centroX = ancho * 0.77;
        const centroY = alto * 0.94;
        const anchoMaximo = ancho * 0.33;

        let tamano = ancho * 0.085;

        ctx.save();

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineJoin = "round";

        ctx.font = `${tamano}px "GravuraLET"`;

        while (
            ctx.measureText(nombre).width > anchoMaximo &&
            tamano > 20
        ) {
            tamano -= 2;
            ctx.font = `${tamano}px "GravuraLET"`;
        }

        // Estilo parecido al ejemplo
        ctx.fillStyle = "#f7f7f7";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = Math.max(3, tamano * 0.08);

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

        tarjetaBankPlatinumGenerada = true;
        btnDescargarBankPlatinum.style.display = "block";

    } catch (error) {

        console.error(
            "Error al generar Insta Army Bank Platinum:",
            error
        );

        alert(
            "No se pudo generar la tarjeta Platinum. " +
            "Revisa la plantilla y la fuente."
        );
    }
}


// ==========================================
// DESCARGAR INSTRUCCIONES PLATINUM
// ==========================================

function descargarInstruccionesBankPlatinum() {

    const enlace = document.createElement("a");

    enlace.href = "./instaarmybankplatinumintrucciones.jpg";
    enlace.download = "instaarmybankplatinumintrucciones.jpg";

    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();

}


// ==========================================
// DESCARGAR TARJETA PLATINUM
// + INSTRUCCIONES
// ==========================================

function descargarInstaArmyBankPlatinum() {

    if (!tarjetaBankPlatinumGenerada) {
        alert("Primero genera tu tarjeta Platinum 💜");
        return;
    }

    const enlace = document.createElement("a");

    enlace.href = canvasBankPlatinum.toDataURL(
        "image/jpeg",
        0.98
    );

    enlace.download = "InstaArmyBankPlatinum.jpg";

    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();

    // Descargar también instrucciones
    setTimeout(() => {
        descargarInstruccionesBankPlatinum();
    }, 500);

}


// ==========================================
// BOTONES DEL EDITOR PLATINUM
// ==========================================

if (btnGenerarBankPlatinum) {
    btnGenerarBankPlatinum.addEventListener(
        "click",
        generarInstaArmyBankPlatinum
    );
}

if (btnDescargarBankPlatinum) {
    btnDescargarBankPlatinum.addEventListener(
        "click",
        descargarInstaArmyBankPlatinum
    );
}

if (btnCerrarBankPlatinum) {
    btnCerrarBankPlatinum.addEventListener("click", () => {

        editorBankPlatinum.classList.add("oculta");

        document.getElementById("menu-disenos")
            .classList.remove("oculta");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

    // Botón exclusivo para personalizar Insta Army 2026
const btnPersonalizar2026 = document.createElement("button");

btnPersonalizar2026.type = "button";
btnPersonalizar2026.id = "btnPersonalizar2026";
btnPersonalizar2026.textContent = "💜 PERSONALIZAR INSTA ARMY 2026";
btnPersonalizar2026.style.display = "none";

btnPersonalizar2026.style.background = "linear-gradient(135deg, #6a0dad, #b06cff)";
btnPersonalizar2026.style.color = "#ffffff";
btnPersonalizar2026.style.border = "2px solid #e0b3ff";
btnPersonalizar2026.style.borderRadius = "14px";
btnPersonalizar2026.style.padding = "14px 18px";
btnPersonalizar2026.style.fontWeight = "bold";
btnPersonalizar2026.style.cursor = "pointer";
btnPersonalizar2026.style.boxShadow = "0 0 18px rgba(181, 102, 255, 0.35)";

btnAvisarEdicion.parentElement.insertBefore(
    btnPersonalizar2026,
    btnAvisarEdicion
);

    // ==========================================
// EDITOR EXCLUSIVO INSTA ARMY 2026
// ==========================================

const editorInstaArmy2026 = document.getElementById(
    "editor-instaarmy2026"
);

const nombreInstaArmy2026 = document.getElementById(
    "nombreInstaArmy2026"
);

const biasInstaArmy2026 = document.getElementById(
    "biasInstaArmy2026"
);

const paisInstaArmy2026 = document.getElementById(
    "paisInstaArmy2026"
);

const btnGenerarInstaArmy2026 = document.getElementById(
    "btnGenerarInstaArmy2026"
);

const btnDescargarInstaArmy2026 = document.getElementById(
    "btnDescargarInstaArmy2026"
);

const btnCerrarInstaArmy2026 = document.getElementById(
    "btnCerrarInstaArmy2026"
);

const canvasInstaArmy2026 = document.getElementById(
    "canvasInstaArmy2026"
);

let instaArmy2026Generada = false;
    // ==========================================
// ABRIR EDITOR INSTA ARMY 2026
// ==========================================

function abrirEditorInstaArmy2026() {

    if (!editorInstaArmy2026) return;

    editorInstaArmy2026.classList.remove("oculta");

    nombreInstaArmy2026.value = "";
    biasInstaArmy2026.value = "";
    paisInstaArmy2026.value = "";

    btnDescargarInstaArmy2026.style.display = "none";

    instaArmy2026Generada = false;

    editorInstaArmy2026.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
    
 // ==========================================
 // ACTIVAR BOTÓN PERSONALIZAR INSTA ARMY 2026
 // ==========================================

btnPersonalizar2026.addEventListener("click", () => {

    if (!editorInstaArmy2026) {
        alert("No se encontró el editor Insta Army 2026.");
        return;
    }

    // Cerrar vista previa
    vistaPrevia.classList.add("oculta");

    // Ocultar galería
    document.getElementById("menu-disenos")
        .classList.add("oculta");

    // Abrir editor
    abrirEditorInstaArmy2026();

});

    // ==========================================
// GENERAR INSTA ARMY 2026
// ==========================================

async function generarInstaArmy2026() {

    const nombre = nombreInstaArmy2026.value.trim();
    const bias = biasInstaArmy2026.value.trim();
    const pais = paisInstaArmy2026.value.trim();

    if (!nombre || !bias || !pais) {
        alert("💜 Escribe el nombre, bias y país.");
        return;
    }

    try {

        // Usa el MISMO nombre de familia que ya estás usando
        // en Platinum para Gravura LET Regular.ttf
        await document.fonts.load('80px "GravuraLET"');

        const plantilla = new Image();
        plantilla.src = "./instaarmy2026plantilla.jpg";

        await plantilla.decode();

        canvasInstaArmy2026.width = plantilla.naturalWidth;
        canvasInstaArmy2026.height = plantilla.naturalHeight;

        const ctx = canvasInstaArmy2026.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvasInstaArmy2026.width,
            canvasInstaArmy2026.height
        );

        ctx.drawImage(
            plantilla,
            0,
            0,
            canvasInstaArmy2026.width,
            canvasInstaArmy2026.height
        );

        const ancho = canvasInstaArmy2026.width;
        const alto = canvasInstaArmy2026.height;

        function dibujarTexto(texto, centerX, centerY, maxWidth, fontSize) {

            let tamano = fontSize;

            ctx.save();
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.lineJoin = "round";

            ctx.font = `${tamano}px "GravuraLET"`;

            while (
                ctx.measureText(texto).width > maxWidth &&
                tamano > 20
            ) {
                tamano -= 2;
                ctx.font = `${tamano}px "GravuraLET"`;
            }

            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = Math.max(2, tamano * 0.045);

            ctx.shadowColor = "rgba(0,0,0,0.35)";
            ctx.shadowBlur = 8;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;

            ctx.strokeText(texto, centerX, centerY);
            ctx.fillText(texto, centerX, centerY);

            ctx.restore();
        }

       
        // ==================================
        // NOMBRE - SEGUNDA FRANJA NEGRA
        // ==================================

        dibujarTexto(
            nombre,
            ancho * 0.52,
            alto * 0.40,
            ancho * 0.42,
            ancho * 0.060
        );

        // ==================================
        // BIAS - TERCERA FRANJA NEGRA
        // ==================================

        dibujarTexto(
            bias,
            ancho * 0.53,
            alto * 0.57,
            ancho * 0.33,
            ancho * 0.068
        );


        // PAÍS → Francia
        dibujarTexto(
            pais,
            ancho * 0.54,
            alto * 0.73,
            ancho * 0.42,
            ancho * 0.075
        );

        instaArmy2026Generada = true;
        btnDescargarInstaArmy2026.style.display = "block";

    } catch (error) {

        console.error(
            "Error al generar Insta Army 2026:",
            error
        );

        alert(
            "No se pudo generar la edición 2026. " +
            "Revisa la plantilla y la fuente."
        );
    }
}
    // ==========================================
// PREPARAR INSTA ARMY 2026 PARA TIKTOK
// ==========================================

async function prepararInstaArmy2026TikTok() {

    if (!instaArmy2026Generada) {
        alert("Primero genera tu edición 💜");
        return false;
    }

    try {

        const imagenOriginal = canvasInstaArmy2026.toDataURL(
            "image/jpeg",
            0.98
        );

        const respuestaOriginal = await fetch(imagenOriginal);
        const blobOriginal = await respuestaOriginal.blob();

        calendarioArchivo = new File(
            [blobOriginal],
            "InstaArmy2026.jpg",
            { type: "image/jpeg" }
        );

        if (calendarioURL) {
            URL.revokeObjectURL(calendarioURL);
        }

        calendarioURL = URL.createObjectURL(
            calendarioArchivo
        );

        const imagenTikTok = await crearImagenTikTokEdicion(
            imagenOriginal
        );

        const respuestaTikTok = await fetch(imagenTikTok);
        const blobTikTok = await respuestaTikTok.blob();

        archivoTikTokPreparado = new File(
            [blobTikTok],
            "InstaArmy2026-TikTok.jpg",
            { type: "image/jpeg" }
        );

        return true;

    } catch (error) {

        console.error(
            "Error preparando Insta Army 2026 para TikTok:",
            error
        );

        alert("No se pudo preparar la edición para TikTok.");
        return false;
    }
}
    // ==========================================
// PREPARAR INSTA ARMY 2026 PARA TIKTOK
// ==========================================

async function prepararInstaArmy2026TikTok() {

    if (!instaArmy2026Generada) {
        alert("Primero genera tu edición 💜");
        return false;
    }

    try {

        const imagenOriginal = canvasInstaArmy2026.toDataURL(
            "image/jpeg",
            0.98
        );

        const respuestaOriginal = await fetch(imagenOriginal);
        const blobOriginal = await respuestaOriginal.blob();

        calendarioArchivo = new File(
            [blobOriginal],
            "InstaArmy2026.jpg",
            { type: "image/jpeg" }
        );

        if (calendarioURL) {
            URL.revokeObjectURL(calendarioURL);
        }

        calendarioURL = URL.createObjectURL(
            calendarioArchivo
        );

        const imagenTikTok = await crearImagenTikTokEdicion(
            imagenOriginal
        );

        const respuestaTikTok = await fetch(imagenTikTok);
        const blobTikTok = await respuestaTikTok.blob();

        archivoTikTokPreparado = new File(
            [blobTikTok],
            "InstaArmy2026-TikTok.jpg",
            { type: "image/jpeg" }
        );

        return true;

    } catch (error) {

        console.error(
            "Error preparando Insta Army 2026 para TikTok:",
            error
        );

        alert("No se pudo preparar la edición para TikTok.");
        return false;
    }
}
    
 // ==========================================
 // DESCARGAR INSTA ARMY 2026
 // ==========================================

async function descargarInstaArmy2026() {

    if (!instaArmy2026Generada) {
        alert("Primero genera tu edición 💜");
        return;
    }

    btnDescargarInstaArmy2026.disabled = true;

    try {

        const preparado =
            await prepararInstaArmy2026TikTok();

        if (!preparado) return;

        // Activar el botón de compartir
        btnCompartirTikTok.disabled = false;

        // Abrir ventana de TikTok
        modalTikTok.classList.remove("oculta");

        mensajeTikTok.textContent =
            "💜 ¡Tu edición especial está lista! " +
            "Apóyanos compartiéndola en TikTok.";

        btnDescargaAlternativa.classList.add("oculta");

    } catch (error) {

        console.error(
            "Error descargando Insta Army 2026:",
            error
        );

        alert("No se pudo preparar la descarga.");

    } finally {

        btnDescargarInstaArmy2026.disabled = false;

    }
}

    // ==========================================
// BOTONES DEL EDITOR INSTA ARMY 2026
// ==========================================

if (btnGenerarInstaArmy2026) {
    btnGenerarInstaArmy2026.addEventListener(
        "click",
        generarInstaArmy2026
    );
}

if (btnDescargarInstaArmy2026) {
    btnDescargarInstaArmy2026.addEventListener(
        "click",
        descargarInstaArmy2026
    );
}

if (btnCerrarInstaArmy2026) {
    btnCerrarInstaArmy2026.addEventListener("click", () => {

        editorInstaArmy2026.classList.add("oculta");

        document.getElementById("menu-disenos")
            .classList.remove("oculta");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// ==========================================
// ABRIR EDITOR CERTIFICADO DE BAUTISMO
// ==========================================

btnPersonalizarCertificadoBautismo.addEventListener("click", () => {

    // Cerrar la vista previa
    vistaPrevia.classList.add("oculta");

    // Ocultar menú de diseños
    document.getElementById("menu-disenos")
        .classList.add("oculta");

    // Abrir editor exclusivo del certificado
    abrirEditorCertificadoBautismo();

});

    // ==========================================
// ABRIR EDITOR CERTIFICADO DE BAUTISMO
// ==========================================

btnPersonalizarCertificadoBautismo.addEventListener("click", () => {

    // Cerrar vista previa
    vistaPrevia.classList.add("oculta");

    // Ocultar menú de diseños
    document.getElementById("menu-disenos")
        .classList.add("oculta");

    // Abrir editor del certificado
    abrirEditorCertificadoBautismo();

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
    let archivoTikTokPreparado = null;


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
    archivoTikTokPreparado = null;

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
        
        // ==========================================
        // PREPARAR IMAGEN CON TEXTO PARA TIKTOK
        // ANTES DE QUE LA ARMY TOQUE COMPARTIR
        // ==========================================

        try {

            const imagenConTexto =
                await crearImagenTikTokEdicion(calendarioURL);

            const respuestaTikTok = await fetch(imagenConTexto);

            const blobTikTok = await respuestaTikTok.blob();

            archivoTikTokPreparado = new File(
                [blobTikTok],
                "EdicionesEspeciales-TikTok.jpg",
                { type: "image/jpeg" }
            );

        } catch (error) {

            console.error(
                "Error preparando imagen para TikTok:",
                error
            );

            archivoTikTokPreparado = null;

        }


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
// DESCARGAR UNA IMAGEN DESDE RUTA
// ==========================================

function descargarImagenDesdeRuta(ruta, nombreArchivo) {
    return new Promise((resolve) => {

        const enlace = document.createElement("a");

        enlace.href = ruta;
        enlace.download = nombreArchivo;

        document.body.appendChild(enlace);

        enlace.click();
        enlace.remove();

        setTimeout(resolve, 500);
    });
}


// ==========================================
// DESCARGAR CALENDARIOS E1-E8 EN 3 IMÁGENES
// 1) INSTRUCCIONES
// 2) FRENTE
// 3) REVERSO
// ==========================================

async function descargarCalendarioEnImagenes(archivoFrente) {

    const archivoReverso = reversosCalendarios[archivoFrente];

    if (!archivoReverso) {
        throw new Error(
            "No se encontró el reverso de " + archivoFrente
        );
    }

    const nombreBase = archivoFrente.replace(".jpg", "");

    // 1) Instrucciones
    await descargarImagenDesdeRuta(
        "./" + instruccionesCalendarios,
        nombreBase + "-INSTRUCCIONES.jpg"
    );

    // 2) Frente
    await descargarImagenDesdeRuta(
        "./" + archivoFrente,
        nombreBase + "-FRENTE.jpg"
    );

    // 3) Reverso
    await descargarImagenDesdeRuta(
        "./" + archivoReverso,
        nombreBase + "-REVERSO.jpg"
    );
}



// ==========================================
// DESCARGAR DISEÑO SELECCIONADO
// CALENDARIOS: 3 IMÁGENES
// INSTA ARMY BANK: 2 IMÁGENES
// CERTIFICADO: 1 IMAGEN
// ==========================================

async function descargarCalendarioSeleccionado() {

    // ==========================================
    // CALENDARIOS E1-E8: 3 IMÁGENES
    // ==========================================

    if (calendarios.includes(disenoSeleccionado) &&
        calendarioArchivo &&
        calendarioArchivo.name === disenoSeleccionado) {

        try {

            await descargarCalendarioEnImagenes(
                disenoSeleccionado
            );

        } catch (error) {

            console.error(
                "Error al descargar calendario:",
                error
            );

            alert(
                "No se pudieron descargar las imágenes del calendario."
            );

        }

        return;
    }

    // ==========================================
    // DESCARGAR IMAGEN ORIGINAL PERSONALIZADA
    // ==========================================

    if (!calendarioArchivo || !calendarioURL) return;

    const enlace = document.createElement("a");

    enlace.href = calendarioURL;
    enlace.download = calendarioArchivo.name;

    document.body.appendChild(enlace);

    enlace.click();
    enlace.remove();

    // ==========================================
    // INSTRUCCIONES EXCLUSIVAS INSTA ARMY BANK
    // ==========================================

    if (calendarioArchivo.name === "InstaArmyBank.jpg") {

        await descargarImagenDesdeRuta(
            "./instaarmybankinstrucciones.jpg",
            "instaarmybankinstrucciones.jpg"
        );

    }

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
// COMPARTIR EN TIKTOK Y DESCARGAR ORIGINAL
// ==========================================

btnCompartirTikTok.addEventListener("click", () => {

    if (!calendarioArchivo) return;

    if (!archivoTikTokPreparado) {

        mensajeTikTok.textContent =
            "La imagen para TikTok todavía no está lista. " +
            "Inténtalo nuevamente.";

        return;
    }

    const puedeCompartir =
        typeof navigator.share === "function" &&
        typeof navigator.canShare === "function" &&
        navigator.canShare({
            files: [archivoTikTokPreparado]
        });

    // Iniciar descarga de la imagen original
    descargarCalendarioSeleccionado();

    if (!puedeCompartir) {

        mensajeTikTok.textContent =
            "Tu calendario se intentó descargar, pero " +
            "este navegador no permite compartir imágenes " +
            "directamente. Puedes subirlo manualmente a TikTok.";

        btnDescargaAlternativa.classList.remove("oculta");

        return;
    }

    // IMPORTANTE:
    // Abrir compartir directamente, sin await previo
    navigator.share({
        files: [archivoTikTokPreparado],
        title: "Ediciones Especiales",
        text: "QUÉ FÁCIL TENER LAS EDICIONES ESPECIALES 💜"
    }).catch((error) => {

        if (error.name === "AbortError") return;

        console.error("Error al compartir:", error);

        mensajeTikTok.textContent =
            "No se pudo abrir el menú para compartir. " +
            "Intenta nuevamente.";

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
// PREPARAR INSTA ARMY BANK PARA TIKTOK
// ==========================================

async function prepararTikTokInstaArmyBank() {

    if (!tarjetaBankGenerada) {
        alert("Primero genera tu tarjeta 💜");
        return false;
    }

    try {

        // Imagen original con el nombre personalizado
        const imagenOriginal = canvasBank.toDataURL(
            "image/jpeg",
            0.98
        );

        // Convertir la imagen original en archivo
        const respuestaOriginal = await fetch(imagenOriginal);
        const blobOriginal = await respuestaOriginal.blob();

        // CREAR PRIMERO EL ARCHIVO
        const nuevoArchivo = new File(
            [blobOriginal],
            "InstaArmyBank.jpg",
            { type: "image/jpeg" }
        );

        // Preparar copia con texto para TikTok
        const imagenTikTok = await crearImagenTikTokEdicion(
            imagenOriginal
        );

        const respuestaTikTok = await fetch(imagenTikTok);
        const blobTikTok = await respuestaTikTok.blob();

        const nuevoArchivoTikTok = new File(
            [blobTikTok],
            "InstaArmyBank-TikTok.jpg",
            { type: "image/jpeg" }
        );

        // Crear dirección de descarga del archivo original
        const nuevaURL = URL.createObjectURL(nuevoArchivo);

        // Limpiar la dirección anterior
        if (calendarioURL) {
            URL.revokeObjectURL(calendarioURL);
        }

        // Guardar los archivos preparados
        calendarioArchivo = nuevoArchivo;
        calendarioURL = nuevaURL;
        archivoTikTokPreparado = nuevoArchivoTikTok;

        return true;

    } catch (error) {

        console.error(
            "Error preparando Insta Army Bank para TikTok:",
            error
        );

        alert("No se pudo preparar la tarjeta para TikTok.");

        return false;

    }

}

 // ==========================================
 // DESCARGAR INSTA ARMY BANK CON TIKTOK
 // ==========================================

async function descargarInstaArmyBank() {

    if (!tarjetaBankGenerada) {
        alert("Primero genera tu tarjeta 💜");
        return;
    }

    // Evitar que se abra varias veces
    btnDescargarBank.disabled = true;

    try {

        // Preparar la tarjeta original y la de TikTok
        const preparado = await prepararTikTokInstaArmyBank();

        if (!preparado) return;

        // Mostrar ventana de TikTok existente
        modalTikTok.classList.remove("oculta");

        // Restaurar mensaje de invitación
        mensajeTikTok.textContent =
            "💜 ¡Tu edición especial está lista! " +
            "Apóyanos compartiéndola en TikTok.";

        // Ocultar descarga alternativa al abrir
        btnDescargaAlternativa.classList.add("oculta");

    } catch (error) {

        console.error(
            "Error abriendo TikTok para Insta Army Bank:",
            error
        );

        alert("No se pudo preparar tu tarjeta.");

    } finally {

        btnDescargarBank.disabled = false;

    }

}
// ==========================================
// ACTIVAR BOTÓN DESCARGAR INSTA ARMY BANK
// ==========================================

if (btnDescargarBank) {

    btnDescargarBank.addEventListener(
        "click",
        descargarInstaArmyBank
    );

}

    // ==========================================
// ACTIVAR BOTÓN GENERAR INSTA ARMY BANK
// ==========================================

if (btnGenerarBank) {

    btnGenerarBank.addEventListener(
        "click",
        generarInstaArmyBank
    );

}

    // ==========================================
// EDITOR EXCLUSIVO CERTIFICADO DE BAUTISMO
// ==========================================

const editorCertificadoBautismo = document.getElementById(
    "editor-certificado-bautismo"
);

const nombreCertificadoBautismo = document.getElementById(
    "nombreCertificadoBautismo"
);

const biasCertificadoBautismo = document.getElementById(
    "biasCertificadoBautismo"
);

const btnGenerarCertificadoBautismo = document.getElementById(
    "btnGenerarCertificadoBautismo"
);

const btnDescargarCertificadoBautismo = document.getElementById(
    "btnDescargarCertificadoBautismo"
);

const btnCerrarCertificadoBautismo = document.getElementById(
    "btnCerrarCertificadoBautismo"
);

const canvasCertificadoBautismo = document.getElementById(
    "canvasCertificadoBautismo"
);

let certificadoBautismoGenerado = false;


// ==========================================
// ABRIR EDITOR CERTIFICADO DE BAUTISMO
// ==========================================

function abrirEditorCertificadoBautismo() {

    if (!editorCertificadoBautismo) return;

    const menuDisenos = document.getElementById("menu-disenos");

    if (menuDisenos) {
        menuDisenos.classList.add("oculta");
    }

    editorCertificadoBautismo.classList.remove("oculta");

    nombreCertificadoBautismo.value = "";
    biasCertificadoBautismo.value = "";

    btnDescargarCertificadoBautismo.style.display = "none";

    certificadoBautismoGenerado = false;

    const ctx = canvasCertificadoBautismo.getContext("2d");
    ctx.clearRect(
        0,
        0,
        canvasCertificadoBautismo.width,
        canvasCertificadoBautismo.height
    );

    editorCertificadoBautismo.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ==========================================
// FIRMAS DEL CERTIFICADO DE BAUTISMO
// ==========================================

function normalizarBiasFirmaCertificado(texto) {

    const valor = String(texto || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.\-_]/g, "")
        .replace(/\s+/g, "");

    const equivalencias = {
        // RM
        rm: "rm",
        namjoon: "rm",
        nam: "rm",
        namjonie: "rm",
        kimnamjoon: "rm",
        rapmonster: "rm",

        // JIN
        jin: "jin",
        seokjin: "jin",
        kimseokjin: "jin",
        worldwidehandsome: "jin",

        // SUGA
        suga: "suga",
        yoongi: "suga",
        minyoongi: "suga",
        agustd: "suga",

        // J-HOPE
        jhope: "jhope",
        hoseok: "jhope",
        junghoseok: "jhope",
        hobi: "jhope",

        // JIMIN
        jimin: "jimin",
        parkjimin: "jimin",
        chimchim: "jimin",
        mochi: "jimin",

        // V
        v: "v",
        taehyung: "v",
        kimtaehyung: "v",
        tae: "v",
        taetae: "v",

        // JUNGKOOK
        jungkook: "jungkook",
        jk: "jungkook",
        jeonjungkook: "jungkook",
        kookie: "jungkook",
        kook: "jungkook"
    };

    return equivalencias[valor] || valor;
}

function obtenerFirmaBiasCertificado(bias) {

    const biasNormalizado = normalizarBiasFirmaCertificado(bias);

    const firmas = {
        v: "firmav.png",
        jin: "firmajin.png",
        suga: "firmasuga.png",
        jhope: "firmajhope.png",
        jimin: "firmajimin.png",
        rm: "firmarm.png",
        jungkook: "firmajungkook.png"
    };

    return firmas[biasNormalizado] || null;
}

function cargarImagenLocal(ruta) {
    return new Promise((resolve, reject) => {
        const imagen = new Image();

        imagen.onload = () => resolve(imagen);

        imagen.onerror = () => reject(
            new Error("No se pudo cargar la imagen: " + ruta)
        );

        imagen.src = ruta;
    });
}
// ==========================================
// GENERAR CERTIFICADO DE BAUTISMO
// ==========================================

async function generarCertificadoBautismo() {

    const nombre = nombreCertificadoBautismo.value.trim();
    const bias = biasCertificadoBautismo.value.trim();

    if (!nombre) {
        alert("💜 Escribe el nombre de la persona.");
        return;
    }

    if (!bias) {
        alert("💜 Escribe el bias o padrino.");
        return;
    }

    try {

        await document.fonts.load('100px "TangoRegular"');

        const plantilla = new Image();
        plantilla.src = "./CertificadodebautismoInstaarmyplantilla.jpg";

        await plantilla.decode();

        canvasCertificadoBautismo.width = plantilla.naturalWidth;
        canvasCertificadoBautismo.height = plantilla.naturalHeight;

        const ctx = canvasCertificadoBautismo.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvasCertificadoBautismo.width,
            canvasCertificadoBautismo.height
        );

        ctx.drawImage(
            plantilla,
            0,
            0,
            canvasCertificadoBautismo.width,
            canvasCertificadoBautismo.height
        );

        const ancho = canvasCertificadoBautismo.width;
        const alto = canvasCertificadoBautismo.height;

        // ==========================================
        // NOMBRE GRANDE (FERNANDA)
        // ==========================================

        let tamanoNombre = Math.round(ancho * 0.12);
        const centroXNombre = ancho * 0.50;
        const centroYNombre = alto * 0.42;
        const anchoMaximoNombre = ancho * 0.74;

        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000000";
        ctx.font = `${tamanoNombre}px "TangoRegular"`;

        while (
            ctx.measureText(nombre).width > anchoMaximoNombre &&
            tamanoNombre > 20
        ) {
            tamanoNombre -= 2;
            ctx.font = `${tamanoNombre}px "TangoRegular"`;
        }

        ctx.fillText(
            nombre,
            centroXNombre,
            centroYNombre,
            anchoMaximoNombre
        );
        ctx.restore();


        // ==========================================
        // BIAS / PADRINO (TARHYUNG)
        // ==========================================

        let tamanoBias = Math.round(ancho * 0.09);
        const centroXBias = ancho * 0.50;
        const centroYBias = alto * 0.74;
        const anchoMaximoBias = ancho * 0.48;

        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000000";
        ctx.font = `${tamanoBias}px "TangoRegular"`;

        while (
            ctx.measureText(bias).width > anchoMaximoBias &&
            tamanoBias > 20
        ) {
            tamanoBias -= 2;
            ctx.font = `${tamanoBias}px "TangoRegular"`;
        }

        ctx.fillText(
            bias,
            centroXBias,
            centroYBias,
            anchoMaximoBias
        );
        ctx.restore();

        
        // ==========================================
        // FIRMA DEL BIAS EN EL CERTIFICADO
        // ==========================================

        const archivoFirma = obtenerFirmaBiasCertificado(bias);

        if (archivoFirma) {

            const imagenFirma = await cargarImagenLocal(
                "./" + archivoFirma
            );

            const firmaAncho = ancho * 0.23;

            const proporcionFirma =
                imagenFirma.naturalHeight / imagenFirma.naturalWidth;

            const firmaAlto = firmaAncho * proporcionFirma;

            const firmaX = ancho * 0.11;
            const firmaY = alto * 0.69 - (firmaAlto / 2);

            ctx.drawImage(
                imagenFirma,
                firmaX,
                firmaY,
                firmaAncho,
                firmaAlto
            );
        }

        certificadoBautismoGenerado = true;

        btnDescargarCertificadoBautismo.style.display = "block";

    } catch (error) {

        console.error(
            "Error al generar Certificado de Bautismo:",
            error
        );

        alert(
            "No se pudo generar el certificado. " +
            "Revisa la plantilla y la fuente."
        );

    }

}


// ==========================================
// PREPARAR CERTIFICADO PARA TIKTOK
// ==========================================

async function prepararTikTokCertificadoBautismo() {

    if (!certificadoBautismoGenerado) {
        alert("Primero genera tu certificado 💜");
        return false;
    }

    try {

        const imagenOriginal = canvasCertificadoBautismo.toDataURL(
            "image/jpeg",
            0.98
        );

        const respuestaOriginal = await fetch(imagenOriginal);
        const blobOriginal = await respuestaOriginal.blob();

        calendarioArchivo = new File(
            [blobOriginal],
            "CertificadodebautismoInstaarmy.jpg",
            { type: "image/jpeg" }
        );

        if (calendarioURL) {
            URL.revokeObjectURL(calendarioURL);
        }

        calendarioURL = URL.createObjectURL(calendarioArchivo);

        const imagenTikTok = await crearImagenTikTokEdicion(
            imagenOriginal
        );

        const respuestaTikTok = await fetch(imagenTikTok);
        const blobTikTok = await respuestaTikTok.blob();

        archivoTikTokPreparado = new File(
            [blobTikTok],
            "CertificadodebautismoInstaarmy-TikTok.jpg",
            { type: "image/jpeg" }
        );

        return true;

    } catch (error) {

        console.error(
            "Error preparando Certificado de Bautismo para TikTok:",
            error
        );

        alert("No se pudo preparar el certificado para TikTok.");

        return false;
    }

}


// ==========================================
// DESCARGAR CERTIFICADO CON TIKTOK
// ==========================================

async function descargarCertificadoBautismo() {

    if (!certificadoBautismoGenerado) {
        alert("Primero genera tu certificado 💜");
        return;
    }

    btnDescargarCertificadoBautismo.disabled = true;

    try {

        const preparado = await prepararTikTokCertificadoBautismo();

        if (!preparado) return;

        modalTikTok.classList.remove("oculta");

        mensajeTikTok.textContent =
            "💜 ¡Tu edición especial está lista! " +
            "Apóyanos compartiéndola en TikTok.";

        btnDescargaAlternativa.classList.add("oculta");

    } catch (error) {

        console.error(
            "Error abriendo TikTok para Certificado de Bautismo:",
            error
        );

        alert("No se pudo preparar tu certificado.");

    } finally {

        btnDescargarCertificadoBautismo.disabled = false;

    }

}


// ==========================================
// BOTONES DEL EDITOR CERTIFICADO
// ==========================================

if (btnGenerarCertificadoBautismo) {
    btnGenerarCertificadoBautismo.addEventListener(
        "click",
        generarCertificadoBautismo
    );
}

if (btnDescargarCertificadoBautismo) {
    btnDescargarCertificadoBautismo.addEventListener(
        "click",
        descargarCertificadoBautismo
    );
}

if (btnCerrarCertificadoBautismo) {
    btnCerrarCertificadoBautismo.addEventListener("click", () => {

        editorCertificadoBautismo.classList.add("oculta");

        document.getElementById("menu-disenos")
            .classList.remove("oculta");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}
    
// ==========================================
// EDITOR EXCLUSIVO DIPLOMA INSTA ARMY
// ==========================================

const editorDiplomaInstaArmy = document.getElementById(
    "editor-diploma-instaarmy"
);

const nombreDiplomaInstaArmy = document.getElementById(
    "nombreDiplomaInstaArmy"
);

const btnGenerarDiplomaInstaArmy = document.getElementById(
    "btnGenerarDiplomaInstaArmy"
);

const btnDescargarDiplomaInstaArmy = document.getElementById(
    "btnDescargarDiplomaInstaArmy"
);

const btnCerrarDiplomaInstaArmy = document.getElementById(
    "btnCerrarDiplomaInstaArmy"
);

const canvasDiplomaInstaArmy = document.getElementById(
    "canvasDiplomaInstaArmy"
);

let diplomaInstaArmyGenerado = false;


// ==========================================
// ABRIR EDITOR DEL DIPLOMA
// ==========================================

function abrirEditorDiplomaInstaArmy() {

    if (!editorDiplomaInstaArmy || !canvasDiplomaInstaArmy) {
        alert("No se encontró el editor del diploma.");
        return;
    }

    // Cerrar vista previa
    vistaPrevia.classList.add("oculta");

    // Ocultar galería
    document.getElementById("menu-disenos")
        .classList.add("oculta");

    // Mostrar editor
    editorDiplomaInstaArmy.classList.remove("oculta");

    // Limpiar datos anteriores
    nombreDiplomaInstaArmy.value = "";

    btnDescargarDiplomaInstaArmy.style.display = "none";

    diplomaInstaArmyGenerado = false;

    // Limpiar canvas anterior
    const ctx = canvasDiplomaInstaArmy.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvasDiplomaInstaArmy.width,
        canvasDiplomaInstaArmy.height
    );

    // Mostrar editor desde arriba
    editorDiplomaInstaArmy.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ==========================================
// ACTIVAR BOTÓN PERSONALIZAR DIPLOMA
// ==========================================

btnPersonalizarDiploma.addEventListener("click", () => {

    abrirEditorDiplomaInstaArmy();

});


// ==========================================
// CERRAR EDITOR DEL DIPLOMA
// ==========================================

if (btnCerrarDiplomaInstaArmy) {

    btnCerrarDiplomaInstaArmy.addEventListener("click", () => {

        editorDiplomaInstaArmy.classList.add("oculta");

        document.getElementById("menu-disenos")
            .classList.remove("oculta");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
    
// ==========================================
// GENERAR DIPLOMA INSTA ARMY CON NOMBRE
// ==========================================

async function generarDiplomaInstaArmy() {

    const nombre = nombreDiplomaInstaArmy.value.trim();

    if (!nombre) {
        alert("💜 Escribe el nombre para tu diploma.");
        return;
    }

    try {

        // Cargar fuente personalizada
        await document.fonts.load(
            '100px "BlackerValentine"'
        );

        // Cargar plantilla limpia
        const plantilla = new Image();

        plantilla.src = "./diplomainstaarmyplantilla.jpg";

        await plantilla.decode();

        // Mantener resolución original
        canvasDiplomaInstaArmy.width = plantilla.naturalWidth;
        canvasDiplomaInstaArmy.height = plantilla.naturalHeight;

        const ctx = canvasDiplomaInstaArmy.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvasDiplomaInstaArmy.width,
            canvasDiplomaInstaArmy.height
        );

        ctx.drawImage(
            plantilla,
            0,
            0,
            canvasDiplomaInstaArmy.width,
            canvasDiplomaInstaArmy.height
        );

        const ancho = canvasDiplomaInstaArmy.width;
        const alto = canvasDiplomaInstaArmy.height;

        // ==========================================
        // NOMBRE DONDE APARECE JESSICA
        // ==========================================

        const centroX = ancho * 0.50;
        const posicionY = alto * 0.66;
        const anchoMaximo = ancho * 0.50;

        let tamano = Math.round(ancho * 0.095);

        ctx.save();

        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        ctx.fillStyle = "#ffffff";

        ctx.font = `${tamano}px "BlackerValentine"`;

        // Reducir tamaño si el nombre es largo
        while (
            ctx.measureText(nombre).width > anchoMaximo &&
            tamano > 26
        ) {

            tamano -= 2;

            ctx.font = `${tamano}px "BlackerValentine"`;

        }

        ctx.fillText(
            nombre,
            centroX,
            posicionY,
            anchoMaximo
        );

        ctx.restore();

        diplomaInstaArmyGenerado = true;

        // Mostrar diploma completo
        canvasDiplomaInstaArmy.style.display = "block";

        // Mostrar botón de descarga
        btnDescargarDiplomaInstaArmy.style.display = "block";

    } catch (error) {

        console.error(
            "Error al generar diploma:",
            error
        );

        alert(
            "No se pudo generar el diploma. " +
            "Revisa la plantilla y la fuente."
        );

    }

}


// ==========================================
// ACTIVAR BOTÓN GENERAR DIPLOMA
// ==========================================

if (btnGenerarDiplomaInstaArmy) {

    btnGenerarDiplomaInstaArmy.addEventListener(
        "click",
        generarDiplomaInstaArmy
    );

}

    
// ==========================================
// ABRIR EDITOR DE ETIQUETA COLA
// ==========================================

const editorEtiquetaCola = document.getElementById(
    "editor-etiqueta-cola"
);

const nombreEtiquetaCola = document.getElementById(
    "nombreEtiquetaCola"
);

const btnGenerarEtiquetaCola = document.getElementById(
    "btnGenerarEtiquetaCola"
);

const btnDescargarEtiquetaCola = document.getElementById(
    "btnDescargarEtiquetaCola"
);

const btnCerrarEtiquetaCola = document.getElementById(
    "btnCerrarEtiquetaCola"
);

const canvasEtiquetaCola = document.getElementById(
    "canvasEtiquetaCola"
);

let etiquetaColaGenerada = false;


// ==========================================
// BOTÓN PERSONALIZAR MI ETIQUETA
// ==========================================

btnPersonalizarEtiquetaCola.addEventListener("click", () => {

    if (!editorEtiquetaCola) {
        alert("No se encontró el editor de Etiqueta Cola.");
        return;
    }

    // Cerrar vista previa
    vistaPrevia.classList.add("oculta");

    // Ocultar galería
    document.getElementById("menu-disenos")
        .classList.add("oculta");

    // Mostrar editor
    editorEtiquetaCola.classList.remove("oculta");

    // Limpiar nombre anterior
    nombreEtiquetaCola.value = "";

    // Ocultar descarga
    btnDescargarEtiquetaCola.style.display = "none";

    etiquetaColaGenerada = false;

    // Limpiar imagen anterior
    const ctx = canvasEtiquetaCola.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvasEtiquetaCola.width,
        canvasEtiquetaCola.height
    );

    // Ir al editor
    editorEtiquetaCola.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// ==========================================
// CERRAR EDITOR DE ETIQUETA COLA
// ==========================================

if (btnCerrarEtiquetaCola) {

    btnCerrarEtiquetaCola.addEventListener("click", () => {

        editorEtiquetaCola.classList.add("oculta");

        // Regresar a la galería
        document.getElementById("menu-disenos")
            .classList.remove("oculta");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}



 // ==========================================
 // CARGAR FUENTE ORIGINAL COCA COLA
 // ==========================================

async function cargarFuenteEtiquetaCola() {

    const fuente = new FontFace(
        "CocaColaII",
        'url("./Coca%20Cola%20ii.ttf")'
    );

    await fuente.load();

    document.fonts.add(fuente);

}


 

// ==========================================
// GENERAR ETIQUETA COLA
// ==========================================

async function generarEtiquetaCola() {

    const nombre = nombreEtiquetaCola.value.trim();

    if (!nombre) {
        alert("💜 Escribe el nombre para tu etiqueta.");
        return;
    }

    try {

        await cargarFuenteEtiquetaCola();

        const plantilla = new Image();

        plantilla.src = "./Etiquetacolaplantilla.jpg";

        await plantilla.decode();

        canvasEtiquetaCola.width = plantilla.naturalWidth;
        canvasEtiquetaCola.height = plantilla.naturalHeight;

        const ctx = canvasEtiquetaCola.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvasEtiquetaCola.width,
            canvasEtiquetaCola.height
        );

        ctx.drawImage(
            plantilla,
            0,
            0,
            canvasEtiquetaCola.width,
            canvasEtiquetaCola.height
        );

        const ancho = canvasEtiquetaCola.width;
        const alto = canvasEtiquetaCola.height;

        // ==========================================
        // POSICIÓN DEL NOMBRE
        // donde dice: Cecilia Curs
        // ==========================================

        const centroX = ancho * 0.78;
       const centroY = alto * 0.33;
        const anchoMaximo = ancho * 0.26;

        let tamano = ancho * 0.085;

        ctx.save();

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineJoin = "round";

        ctx.font = `${tamano}px "CocaColaII"`;

        while (
            ctx.measureText(nombre).width > anchoMaximo &&
            tamano > 18
        ) {
            tamano -= 2;
            ctx.font = `${tamano}px "CocaColaII"`;
        }

        // Estilo del nombre
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
        ctx.shadowBlur = 6;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        ctx.fillText(
            nombre,
            centroX,
            centroY,
            anchoMaximo
        );

        ctx.restore();

        etiquetaColaGenerada = true;

        btnDescargarEtiquetaCola.style.display = "inline-block";

    } catch (error) {

        console.error(
            "Error al generar Etiqueta Cola:",
            error
        );

        alert(
            "No se pudo generar la etiqueta. " +
            "Revisa que existan la plantilla y la fuente."
        );
    }
}


// ==========================================
// DESCARGAR ETIQUETA COLA
// ==========================================

function descargarEtiquetaCola() {

    if (!etiquetaColaGenerada) {
        alert("Primero genera tu etiqueta 💜");
        return;
    }

    const enlace = document.createElement("a");

    enlace.href = canvasEtiquetaCola.toDataURL(
        "image/jpeg",
        0.98
    );

    enlace.download = "Etiquetacola.jpg";

    document.body.appendChild(enlace);

    enlace.click();

    enlace.remove();
}


// ==========================================
// BOTONES DE ETIQUETA COLA
// ==========================================

if (btnGenerarEtiquetaCola) {
    btnGenerarEtiquetaCola.addEventListener(
        "click",
        generarEtiquetaCola
    );
}

if (btnDescargarEtiquetaCola) {
    btnDescargarEtiquetaCola.addEventListener(
        "click",
        descargarEtiquetaCola
    );
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






