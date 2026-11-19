
// ==========================================
// EDICIONES ESPECIALES
// SERVICE WORKER + FIREBASE + CACHÉ
// ==========================================

// Cambiar este número cuando se actualice
// la versión de la aplicación.
const CACHE_VERSION = "ediciones-especiales-v1";

// Archivos principales de la PWA
const ARCHIVOS_PRINCIPALES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./inicio.jpg",
    "./fondo.jpg"
];

// ==========================================
// INSTALAR NUEVA VERSIÓN
// ==========================================

self.addEventListener("install", (evento) => {

    evento.waitUntil(
        caches.open(CACHE_VERSION)
            .then(async (cache) => {

                await Promise.allSettled(
                    ARCHIVOS_PRINCIPALES.map(
                        archivo => cache.add(archivo)
                    )
                );

            })
            .then(() => self.skipWaiting())
    );

});

// ==========================================
// ELIMINAR CACHÉS ANTERIORES
// ==========================================

self.addEventListener("activate", (evento) => {

    evento.waitUntil(
        (async () => {

            const nombres = await caches.keys();

            await Promise.all(
                nombres
                    .filter(nombre =>
                        nombre.startsWith("ediciones-especiales-") &&
                        nombre !== CACHE_VERSION
                    )
                    .map(nombre => caches.delete(nombre))
            );

            await self.clients.claim();

        })()
    );

});

// ==========================================
// CONSULTAR PRIMERO INTERNET
// ACTUALIZAR CACHÉ CON VERSIONES NUEVAS
// ==========================================

self.addEventListener("fetch", (evento) => {

    const solicitud = evento.request;

    if (
        solicitud.method !== "GET" ||
        !solicitud.url.startsWith(self.location.origin)
    ) {
        return;
    }

    const url = new URL(solicitud.url);

    // Solo administrar archivos de esta PWA
    if (!url.pathname.startsWith(
        "/edicionesespeciales/"
    )) {
        return;
    }

    // No interceptar archivos multimedia grandes
    // ni solicitudes parciales de videos.
    if (
        solicitud.headers.has("range") ||
        /\.(mp4|webm|mp3|wav)$/i.test(url.pathname)
    ) {
        return;
    }

    evento.respondWith(
        (async () => {

            const cache = await caches.open(CACHE_VERSION);

            try {

                // Buscar versión actual en Internet
                const respuesta = await fetch(solicitud);

                // Guardar únicamente respuestas completas
                if (
                    respuesta.ok &&
                    respuesta.status === 200
                ) {
                    await cache.put(
                        solicitud,
                        respuesta.clone()
                    ).catch(() => {});
                }

                return respuesta;

            } catch (error) {

                // Sin conexión: intentar caché
                const guardado = await caches.match(
                    solicitud
                );

                if (guardado) {
                    return guardado;
                }

                throw error;
            }

        })()
    );

});

// ==========================================
// NOTIFICACIONES FIREBASE
// ==========================================

// Configurar clic antes de cargar Firebase
self.addEventListener("notificationclick", (evento) => {

    evento.notification.close();

    const destino = new URL(
        "./",
        self.registration.scope
    ).href;

    evento.waitUntil(
        (async () => {

            const ventanas = await clients.matchAll({
                type: "window",
                includeUncontrolled: true
            });

            for (const ventana of ventanas) {

                if (ventana.url.startsWith(destino)) {

                    await ventana.focus();
                    return;
                }
            }

            await clients.openWindow(destino);

        })()
    );

});

// Cargar Firebase
importScripts(
    "https://www.gstatic.com/firebasejs/13.4.0/firebase-app-compat.js"
);

importScripts(
    "https://www.gstatic.com/firebasejs/13.4.0/firebase-messaging-compat.js"
);

// Configuración de Ediciones Especiales
firebase.initializeApp({
    apiKey: "AIzaSyBhdIe9BM9EWI4DYRxunvTxJnRW6nzVdwI",
    authDomain: "ediciones-especiales.firebaseapp.com",
    projectId: "ediciones-especiales",
    storageBucket: "ediciones-especiales.firebasestorage.app",
    messagingSenderId: "732885288125",
    appId: "1:732885288125:web:cc04797a7ff250509123d4"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

    console.log(
        "Notificación recibida:",
        payload
    );

});
