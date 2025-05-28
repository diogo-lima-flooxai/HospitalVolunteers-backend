require('dotenv').config();
const app = require('./src/app')

//PORTA
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`servidor rodando em ${PORT}!`)
})