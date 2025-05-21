const app = require('./src/app')

//PORTA
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`servidor rodando em ${port}!`)
})