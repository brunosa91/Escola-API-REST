import Aluno from "../model/Aluno.js";

const alunoController = (app) => {
  app.get("/aluno", async (req, res) => {
    await res.send("foi");
  });
  //
  app.get("/aluno/matricula/:matricula", async (req, res) => {
    await res.send("peguei matricula");
  });

  app.post("/aluno", async (req, res) => {
    //vai receber o corpo da requisição;
  });
  app.delete("/aluno/id:id", async (req, res) => {
    //usa o parametro de filtro e depois deleta
    await res.send("foi");
  });
  app.put("/aluno/id:id", async (req, res) => {
    //usa o parametro de filtro e depois atualiza
    await res.send("foi");
  });
};

export default alunoController;
