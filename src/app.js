import express from "express";

//importando função alunoController

import alunoController from "./controller/aluno-controller.js";

// IMPORTANDO DATABASE

import db from "./database/sqlite-db.js";

// instanciando meu express
const app = express();

//instanciando database

const database = db;
// utilizando o json através do métdo use
app.use(express.json());

//Chamar aluno controller e passa como parâmetro app

alunoController(app, database);
export default app;
