"use strict";
(() => {
var exports = {};
exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 8485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Registro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3392);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(401);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8017);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__, _lib_firebase__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_3__, firebase_storage__WEBPACK_IMPORTED_MODULE_4__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__, _lib_firebase__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Registro() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)();
    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [apellido, setApellido] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [telefono, setTelefono] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [imagen, setImagen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [subiendoImagen, setSubiendoImagen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        try {
            // Crear usuario en Firebase Authentication
            const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.createUserWithEmailAndPassword)(_lib_firebase__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8, email, password);
            const user = userCredential.user;
            console.log(user);
            // Subir imagen a Firebase Storage
            if (imagen) {
                setSubiendoImagen(true);
                const imagenRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, `imagenes-perfil/${user.uid}`);
                await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytes)(imagenRef, imagen);
                setSubiendoImagen(false);
            }
            // Obtener la URL de la imagen subida
            const imagenRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)(storage, `imagenes-perfil/${user.uid}`);
            const imagenURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(imagenRef);
            // Actualizar el perfil del usuario con el nombre y la imagen de perfil
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.updateProfile)(user, {
                displayName: `${nombre} ${apellido}`,
                photoURL: `https://firebasestorage.googleapis.com/v0/b/${"ravehub-birthday.appspot.com"}/o/imagenes-perfil%2F${user.uid}?alt=media`
            });
            // Guardar los datos del usuario en Firestore
            const userObj = {
                nombre,
                apellido,
                email,
                telefono,
                imagenURL
            };
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(db, "users"), userObj); // Utilizar addDoc en lugar de setDoc
            router.push("/login");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        }
    };
    const handleImagenSeleccionada = (event)=>{
        const imagenSeleccionada = event.target.files[0];
        setImagen(imagenSeleccionada);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "formulario-rave",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "registro",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "registro-columna",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "registro-fila",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "nombre",
                                    className: "registro-label",
                                    children: "Nombre"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    label: "Nombre",
                                    value: nombre,
                                    onChange: (event)=>setNombre(event.target.value),
                                    required: true,
                                    placeholder: "Nombre",
                                    className: "registro-input"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "registro-fila",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "apellido",
                                    className: "registro-label",
                                    children: "Apellido"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    label: "Apellido",
                                    value: apellido,
                                    onChange: (event)=>setApellido(event.target.value),
                                    required: true,
                                    placeholder: "Apellido",
                                    className: "registro-input"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "registro-fila",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "email-address",
                                    className: "registro-label",
                                    children: "Email address"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    label: "Email address",
                                    value: email,
                                    onChange: (event)=>setEmail(event.target.value),
                                    required: true,
                                    placeholder: "Email",
                                    className: "registro-input"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "registro-fila",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "password",
                                    className: "registro-label",
                                    children: "Password"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "password",
                                    label: "Password",
                                    value: password,
                                    onChange: (event)=>setPassword(event.target.value),
                                    required: true,
                                    placeholder: "Contrase\xf1a",
                                    className: "registro-input"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "registro-fila",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "telefono",
                                    className: "registro-label",
                                    children: "Tel\xe9fono"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    label: "Tel\xe9fono",
                                    value: telefono,
                                    onChange: (event)=>setTelefono(event.target.value),
                                    placeholder: "Tel\xe9fono",
                                    className: "registro-input"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "registro-fila",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "imagen",
                                    className: "registro-label",
                                    children: "Imagen de perfil"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "file",
                                    accept: "image/*",
                                    onChange: handleImagenSeleccionada,
                                    className: "registro-input"
                                }),
                                subiendoImagen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Subiendo imagen..."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            onClick: handleSubmit,
                            className: "registro-submit",
                            children: "Registrarse"
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 3773:
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [17], () => (__webpack_exec__(8485)));
module.exports = __webpack_exports__;

})();