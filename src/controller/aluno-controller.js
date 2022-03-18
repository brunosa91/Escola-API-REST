const alunoController = (app) => {
  app.get("/aluno", async (req, res) => {
    await res.send("foi");
  });
};

export default alunoController;
