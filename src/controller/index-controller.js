const indexController = (app) => {
  app.get("/", (req, res) => {
    res.send(`
        <h1 align="center">Projeto API-Rest Escola Mercúrio</h1>
        <h3 align="center">Link do repositório <a target="_blank" href="https://github.com/brunosa91/Escola-API-REST">aqui</a> </h3>
        `);
  });
};

export default indexController;
