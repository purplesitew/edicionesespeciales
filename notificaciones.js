
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
    "BGEG5oaFTkGJ3oDQUVBEv4u4_LWxB0RFb_o1x7RSI7OdcjaLqRrM8N8BKQniBjJeFtkbMn57hFFVnI";


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
