const express = require("express");
const router = express.Router();

const voluntarios = [];

router.post("/voluntarios", (req, res) => {
  console.log("Requisição recebida:", req.body);

  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const novoVoluntario = {
    id: voluntarios.length + 1,
    name,
    email,
    password,
    confirmPassword,
  };
  voluntarios.push(novoVoluntario);

  return res.status(201).json(novoVoluntario);
});

module.exports = router;
