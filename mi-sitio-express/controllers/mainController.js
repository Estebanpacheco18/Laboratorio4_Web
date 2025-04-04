const path = require("path");

const mainController = {
  home: (req, res) => {
    res.render("home", { title: "Inicio" });
  },
  about: (req, res) => {
    res.render("about", { title: "Acerca de" });
  },
  contact: (req, res) => {
    res.render("contact", { title: "Contacto" });
  },
  services: (req, res) => {
    res.render("services", { title: "Servicios" });
  }
};

module.exports = mainController;