const indexController = (app) => {
  app.get("/", (req, res) => {
    res.send(`
        <h1>API-REST-ESCOLA-MERCÚRIO PROJETO da equipe 2 da Turma 11 da Resilia</h1>
        <h3>Link do repositório <a target="_blank" href="https://github.com/brunosa91/Escola-API-REST">aqui</a> </h3>
        `);
  });
};

export default indexController;
