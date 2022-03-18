import Aluno from "../model/Aluno.js";

const alunoController = (app, bd) => {
  const alunoModel = new Aluno(bd);
  app.get("/aluno", async (req, res) => {
    try {
      const resposta = await alunoModel.buscaTodosAlunos();
      res.status(200).json({
        alunos: resposta,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.mensagem,
        erro: true,
      });
    }
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
