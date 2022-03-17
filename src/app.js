import express from "express";

//importando função alunoController

import alunoController from "./controller/aluno-controller.js";

// instanciando meu express
const app = express();

// utilizando o json através do métdo use
app.use(express.json());

//Chamar aluno controller e passa como parâmetro app

alunoController(app);
export default app;
