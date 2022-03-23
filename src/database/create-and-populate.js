/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from "sqlite3";
sqlite3.verbose();
// Serve para fixar um caminho do meu database
import { dirname } from "path";
import { fileURLToPath } from "url";
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";

// Criando o arquivo e/ou abrindo a "conexão" do meu database
const db = new sqlite3.Database(filePath);

const ALUNO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ALUNOS"(
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "DATA_DE_NASCIMENTO" varchar(64),
    "CPF"  varchar(64),
    "EMAIL" varchar(64),
    "TELEFONE" varchar(64),
    "TURMA" varchar(64),
    "ANO" varchar(64),
    "MATRICULA" varchar(64),
    "RESPONSAVEL" varchar(64),
    "RUA" varchar(64),
    "NUMERO" varchar(64),
    "CEP" varchar(64),
    "CIDADE" varchar(64),
    "BAIRRO" varchar(64)

);`;

const ADD_ALUNO_DATA = `
INSERT INTO ALUNOS (ID, NOME,DATA_DE_NASCIMENTO, CPF, EMAIL, TELEFONE, TURMA, ANO, MATRICULA, RESPONSAVEL, RUA, NUMERO, CEP, CIDADE, BAIRRO)
VALUES
(1,'Carlos','16/11/2000','111.111.111-11','carlito@gmail.com','(11)11111-1111','manhã','9','123456','Olavo','napomuceno','123','00000-020','Guarulhos','seródio')
(2,'Vanessa','16/11/2000','222.222.222-11','vanvan@gmail.com','(11)31111-1111','manhã','6','111111','Maria','Caipora','33','12300-020','Varninho','Forteazul')`;

function criaTabelaAluno() {
  db.run(ALUNO_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de alunos");
  });
}

function populaTabelaAluno() {
  db.run(ADD_ALUNO_DATA, (error) => {
    if (error)
      console.log(`${error.message}\n erro ao popular tabela de alunos`);
  });
}

db.serialize(() => {
  criaTabelaAluno();
  populaTabelaAluno();
});
