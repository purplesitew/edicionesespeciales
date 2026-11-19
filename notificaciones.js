
 // ==========================================
 // EDICIONES ESPECIALES
 // CONEXIÓN CON FIREBASE
 // ==========================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import { getAuth } from
    "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

import { getFirestore } from
    "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

import { getMessaging, isSupported } from
    "https://www.gstatic.com/firebasejs/13.4.0/firebase-messaging.js";


// ==========================================
// CONFIGURACIÓN FIREBASE
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyBhdIe9BM9EWI4DYRxunvTxJnRW6nzVdwI",
    authDomain: "ediciones-especiales.firebaseapp.com",
    projectId: "ediciones-especiales",
    storageBucket: "ediciones-especiales.firebasestorage.app",
    messagingSenderId: "732885288125",
    appId: "1:732885288125:web:cc04797a7ff250509123d4"
};


// ==========================================
// INICIALIZAR SERVICIOS
// ==========================================

const appFirebase = initializeApp(firebaseConfig);

const auth = getAuth(appFirebase);

const db = getFirestore(appFirebase);

// Verificar compatibilidad con notificaciones
const compatible = await isSupported();

const messaging = compatible
    ? getMessaging(appFirebase)
    : null;


// ==========================================
// CLAVE PÚBLICA VAPID
// ==========================================


const VAPID_KEY =
    "BGEG5oaFTkGJ3oDQUVBEv4u4_LWxB0RFb_o1x7RSI7OdcjaLqRrM8N8BKQniBjJeFtkbMn57hFFVbq5UAyfOVnI";



// ==========================================
// EXPORTAR SERVICIOS
// ==========================================

export {
    auth,
    db,
    messaging,
    VAPID_KEY
};

console.log(
    "Firebase preparado para Ediciones Especiales 💜"
);

// ==========================================
// SUSCRIPCIONES A EDICIONES ESPECIALES
// ==========================================

import {
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

import {
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

import {
    getToken
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-messaging.js";


// ==========================================
// RECIBIR SOLICITUD DEL BOTÓN AVÍSAME
// ==========================================

let registroAvisoEnProceso = false;

window.addEventListener(
    "solicitarAvisoEdicion",
    async (evento) => {

        if (registroAvisoEnProceso) return;

        const edicion = evento.detail?.edicion;

        if (
            typeof edicion !== "string" ||
            !edicion.endsWith(".jpg")
        ) {
            alert("No se identificó la edición seleccionada.");
            return;
        }

        // Revisar compatibilidad del dispositivo
        if (
            !messaging ||
            !("Notification" in window) ||
            !("serviceWorker" in navigator)
        ) {
            alert(
                "💜 Este navegador no admite nuestro sistema " +
                "de notificaciones.\n\n" +
                "Si usas iPhone, instala primero la PWA " +
                "en tu pantalla de inicio."
            );
            return;
        }

        registroAvisoEnProceso = true;

        try {

            // ==================================
            // SOLICITAR PERMISO
            // ==================================

            let permiso = Notification.permission;

            if (permiso === "default") {
                permiso = await Notification.requestPermission();
            }

            if (permiso !== "granted") {
                alert(
                    "💜 Para recibir el aviso, necesitas " +
                    "permitir las notificaciones."
                );
                return;
            }

            // ==================================
            // IDENTIFICAR USUARIO
            // ==================================

            const credenciales = auth.currentUser
                ? { user: auth.currentUser }
                : await signInAnonymously(auth);

            const usuarioId = credenciales.user.uid;

            // ==================================
            // REGISTRAR SERVICE WORKER
            // ==================================

            const registroSW =
                await navigator.serviceWorker.register("./sw.js");

            // ==================================
            // OBTENER TOKEN DEL DISPOSITIVO
            // ==================================

            const token = await getToken(messaging, {
                vapidKey: VAPID_KEY,
                serviceWorkerRegistration: registroSW
            });

            if (!token) {
                throw new Error(
                    "Firebase no devolvió un token de notificación."
                );
            }

            // ==================================
            // GUARDAR DISPOSITIVO EN FIRESTORE
            // ==================================

            await setDoc(
                doc(
                    db,
                    "suscripciones",
                    usuarioId,
                    "dispositivos",
                    "principal"
                ),
                {
                    token: token,
                    actualizado: serverTimestamp()
                },
                { merge: true }
            );

            // ==================================
            // GUARDAR EDICIÓN SOLICITADA
            // ==================================

            const idEdicion = edicion.replace(/\.jpg$/i, "");

            await setDoc(
                doc(
                    db,
                    "suscripciones",
                    usuarioId,
                    "ediciones",
                    idEdicion
                ),
                {
                    archivo: edicion,
                    activa: true,
                    fechaSolicitud: serverTimestamp()
                },
                { merge: true }
            );

            // ==================================
            // CONFIRMACIÓN
            // ==================================

            alert(
                "🔔💜 ¡AVISO ACTIVADO!\n\n" +
                "Te registraste para recibir una " +
                "notificación cuando esté disponible:\n\n" +
                edicion
            );

        } catch (error) {

            console.error(
                "Error al activar notificaciones:",
                error
            );

            alert(
                "No se pudo activar el aviso.\n\n" +
                "Revisa los permisos de notificaciones " +
                "e inténtalo nuevamente.\n\n" +
                "Detalle: " + error.message
            );

        } finally {

            registroAvisoEnProceso = false;

        }

    }
);

