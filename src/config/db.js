const mysql = require("mysql2/promise")
require("dotenv").config();

//conexão com o banco
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.getConnection()
  .then(() => console.log("✅ Conectado ao banco com sucesso!"))
  .catch(err => console.error("❌ Erro ao conectar no banco:", err));

module.exports = db;