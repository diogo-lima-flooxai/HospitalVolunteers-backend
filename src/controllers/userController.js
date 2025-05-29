const bcrypt = require("bcryptjs");
const db = require("../config/db");

module.exports = {
  async register(req, res) {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    // Verifica se o email já existe
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ error: "Email já cadastrado." });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    await db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, role || "voluntario"]
    );

    return res.status(201).json({ message: "Usuário registrado com sucesso!" });
  },

   async getAll(req, res) {
    try {
      const [rows] = await db.query("SELECT id, name, email, role FROM users");
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários." });
    }
  },

  
};
