const express = require("express");
const app = express();
const path = require("path");

// Configurar el motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, "public")));

// Importar rutas
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// Para manejar errores 404
app.use((req, res) => {
    res.status(404).render("404", { title: "Error 404" });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));