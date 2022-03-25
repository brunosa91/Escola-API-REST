import request from "supertest";
import app from "../app";

describe("GET /aluno", () => {
  test("se o status é 200", () => {
    return request(app)
      .get("/aluno")
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});
describe("POST /aluno", () => {
  test("Se o body existir", () => {
    return request(app)
      .post("/aluno")
      .send({
        nome: "Jean Carlos",
        dataDeNascimento: "16/11/2011",
        cpf: "111.222.111-44",
        email: "jr@gmail.com",
        telefone: "(11) 2111-1111",
        turma: "noite",
        ano: "2",
        matricula: "151515",
        responsavel: "Olavo Dumont",
        rua: "Guapé",
        numero: "520",
        cep: "08090-050",
        cidade: "Teresina",
        bairro: "Campinho",
      })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body.alunos).toBeTruthy();
      });
  });
});
describe("GET /aluno/matricula/:matricula", () => {
  test("se o status é 200", () => {
    return request(app)
      .get("/aluno/matricula/123456")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("POST /aluno", () => {
  test("Se o body existir", () => {
    return request(app)
      .post("/aluno")
      .send({
        nome: "Jean Carlos",
        dataDeNascimento: "16/11/2011",
        cpf: "111.222.111-44",
        email: "jr@gmail.com",
        telefone: "(11) 2111-1111",
        turma: "noite",
        ano: "2",
        matricula: "151515",
        responsavel: "Olavo Dumont",
        rua: "Guapé",
        numero: "520",
        cep: "08090-050",
        cidade: "Teresina",
        bairro: "Campinho",
      })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body.alunos).toBeTruthy();
      });
  });
});

describe("PUT /aluno/id", () => {
  test("Se erro for = false", () => {
    return request(app)
      .put("/aluno/id/3")
      .send({
        nome: "JOÃO",
        dataDeNascimento: "16/11/2011",
        cpf: "111.222.111-44",
        email: "jr@gmail.com",
        telefone: "(11) 2111-1111",
        turma: "noite",
        ano: "2",
        matricula: "151515",
        responsavel: "Olavo Dumont",
        rua: "Guapé",
        numero: "520",
        cep: "08090-050",
        cidade: "Teresina",
        bairro: "Campinho",
      })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.erro).toBe(false);
      });
  });
});

describe("DELETE aluno/id/", () => {
  test("Se o status for 202", () => {
    return request(app)
      .delete("/aluno/id/3")
      .then((response) => {
        expect(response.statusCode).toBe(202);
      });
  });
});
