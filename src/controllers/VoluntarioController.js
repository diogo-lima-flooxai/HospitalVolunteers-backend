// src/controllers/VoluntarioController.js
const Voluntario = require("../models/Voluntario");
const voluntarioModel = new Voluntario();

module.exports = {
  create(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    // verificando se as senhas coincidem
    if(password !== confirmPassword) {
      return res.status(400).json({ error: "As senhas não coincidem." });
    }

    // verificando se o email já existe
    const emailExists = voluntarioModel.all().some(voluntario => voluntario.email === email);
    if (emailExists) {
      return res.status(400).json({ error: "Email já cadastrado." });
    }

    const novo = voluntarioModel.create({ name, email, password });
    return res.status(201).json(novo);
  },

  list(req, res) {
    return res.json(voluntarioModel.all());
  }
};
