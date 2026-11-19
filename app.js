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

    for (let i = 1; i <= cantidadDisenos; i++) {

        const imagen = document.createElement("img");

        imagen.src = `./E${i}.jpg`;
        imagen.alt = `Diseño ${i}`;
        imagen.className = "plantilla-diseno";

        // No mostrar imágenes que todavía no existan
        imagen.onerror = () => {
            imagen.remove();
        };

        imagen.addEventListener("click", () => {

            disenoSeleccionado = `E${i}.jpg`;

            imagenVistaPrevia.src = `./${disenoSeleccionado}`;

            vistaPrevia.classList.remove("oculta");

        });

        listaDisenos.appendChild(imagen);
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
// DESCARGAR CREDENCIAL SELECCIONADA EN JPG
// ==========================================

btnDescargar.addEventListener("click", async () => {

    if (!disenoSeleccionado) return;

    try {

        const respuesta = await fetch(
            `./${disenoSeleccionado}`
        );

        if (!respuesta.ok) {
            throw new Error("No se pudo obtener la imagen.");
        }

        const imagen = await respuesta.blob();

        const urlTemporal = URL.createObjectURL(imagen);

        const enlace = document.createElement("a");

        enlace.href = urlTemporal;
        enlace.download = disenoSeleccionado;

        document.body.appendChild(enlace);
        enlace.click();
        enlace.remove();

        setTimeout(() => {
            URL.revokeObjectURL(urlTemporal);
        }, 10000);

    } catch (error) {

        console.error("Error al descargar:", error);

        alert("No se pudo descargar la credencial.");

    }

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

