import express from "express";

// instanciando meu express
const app = express();

// utilizando o json através do métdo use
app.use(express.json());

export default app;
