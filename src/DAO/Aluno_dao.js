class AlunoDao {
  constructor(db) {
    this.db = db;
  }

  buscaTodosAlunos = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM ALUNOS", (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  };

  buscaMatricula = (email) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM ALUNOS WHERE MATRICULA = ?",
        email,
        (error, rows) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows);
          }
        }
      );
    });
  };
}

export default AlunoDao;
