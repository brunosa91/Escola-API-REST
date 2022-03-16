import app from "./app.js";
// definindo a porta
const porta = 3000;
//abrindo servidor na porta definida
app.listen(porta, () => {
  console.log(`servidor aberto na http://localhost:${porta}/`);
});
