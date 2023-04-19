"use strict";
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 8017:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "tO": () => (/* binding */ storage),
/* harmony export */   "w7": () => (/* binding */ signOut)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3773);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_app__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const firebaseConfig = {
    apiKey: "AIzaSyBqfJXIAm1kXGmtLt_H6D9Rn8xNR74le8Y",
    authDomain: "ravehub-birthday.firebaseapp.com",
    databaseURL: "https://ravehub-birthday-default-rtdb.firebaseio.com",
    projectId: "ravehub-birthday",
    storageBucket: "ravehub-birthday.appspot.com",
    messagingSenderId: "370315325048",
    appId: "1:370315325048:web:56c3847d68b8afb930478d",
    measurementId: "G-JT16PPPSGC"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const signOut = ()=>auth.signOut();
// const app = firebase.initializeApp(firebaseConfig);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;