const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    try {
        //Buscando o usuário pelo email
      const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
        email,
      ]);

      if(rows.length === 0) {
        return res.status(401).json({error: "Credencias inválidas"})
      }

      const user = rows[0];

      //comparando a senha do user com a hash do banco
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if(!isPasswordValid) {
        return res.status(400).json({error: "Senha inválida"})
      }

      //Gerar Token
      const token = jwt.sign(
        { 
            id: user.id,
            email: user.email,
            role: user.role
        },
        JWT_SECRET,
        { expiresIn: "1h"}
      );

      return res.json({
        message: "Login realizado com sucesso",
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
      });

    } catch(error) {
        console.error(error);
        return res.status(500).json({error: "Erro no servidor"});
    }
  },
};
