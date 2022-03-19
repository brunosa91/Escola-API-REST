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

  buscaMatricula = (matricula) => {
    return new Promise((resolve, reject) => {
      this.db.all(
        "SELECT * FROM ALUNO WHERE MATRICULA = ?",
        matricula,
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
