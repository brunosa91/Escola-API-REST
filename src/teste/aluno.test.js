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

describe("GET /aluno/matricula/:matricula", () => {
  test("se o status é 200", () => {
    return request(app)
      .get("/aluno/matricula/3")
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
        nome: "jean",
        dataDenascimento: "16/11/2011",
        cpf: "111.222.111-44",
        email: "br@gmail.com",
        telefone: "(11) 2111-1111",
        turma: "NOITe",
        ano: "2",
        matricula: "151515",
        responsavel: "olavo",
        rua: "guapé",
        numero: "520",
        cep: "08090-050",
        cidade: "teresina",
        bairro: "campinho",
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
      .put("/aluno/id/5")
      .send({
        nome: "JOÃO",
        dataDenascimento: "16/11/2011",
        cpf: "111.222.111-44",
        email: "br@gmail.com",
        telefone: "(11) 2111-1111",
        turma: "NOITe",
        ano: "2",
        matricula: "151515",
        responsavel: "olavo",
        rua: "guapé",
        numero: "520",
        cep: "08090-050",
        cidade: "teresina",
        bairro: "campinho",
      })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body.erro).toBe(false);
      });
  });
});

describe("DELETE aluno/id/1", () => {
  test("Se o status for 202", () => {
    return request(app)
      .delete("/aluno/id/2")
      .then((response) => {
        expect(response.statusCode).toBe(202);
      });
  });
});
