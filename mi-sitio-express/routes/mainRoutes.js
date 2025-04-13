const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

// Definir rutas y asociarlas con controladores
router.get("/", mainController.home);
router.get("/about", mainController.about);
router.get("/contact", mainController.contact);
router.get("/services", mainController.services);

// Ruta para procesar el formulario de contacto
router.post("/contact", (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log("Datos recibidos del formulario:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Email: ${email}`);
    console.log(`Mensaje: ${mensaje}`);
    res.send("Formulario enviado correctamente.");
});

module.exports = router;