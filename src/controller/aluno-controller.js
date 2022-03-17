const alunoController = (app) => {
  app.get("/aluno", (req, res) => {
    res.send("foi");
  });
};

export default alunoController;
