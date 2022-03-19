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
    const matricula = req.params.matricula;
    try {
      const resposta = await alunoModel.buscaMatricula(matricula);
      res.status(200).json({
        alunos: resposta,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        erro: true,
      });
    }
  });

  app.post("/aluno", async (req, res) => {
    const body = req.body;
    try {
      const resposta = await alunoModel.insereDadosAluno(body);
      res.status(201).json({
        alunos: resposta,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        erro: true,
      });
    }
  });

  app.put("/aluno/id/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
      const resposta = await alunoModel.atualizaDadosAluno(body);
      res.status(201).json({
        alunos: resposta,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        erro: true,
      });
    }
  });

  app.delete("/aluno/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const resposta = await alunoModel.deletaAluno(id);
      res.status(202).json({
        message: resposta,
        error: false,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  });
};

export default alunoController;
