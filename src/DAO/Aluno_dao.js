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
        "SELECT * FROM ALUNOS WHERE MATRICULA = ?",
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
  insereDadosAluno = (novoAluno) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO ALUNOS (NOME,DATA_DE_NASCIMENTO, CPF, EMAIL, TELEFONE, TURMA, ANO, MATRICULA, RESPONSAVEL, RUA, NUMERO, CEP, CIDADE, BAIRRO) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        novoAluno.nome,
        novoAluno.dataDeNascimento,
        novoAluno.cpf,
        novoAluno.email,
        novoAluno.telefone,
        novoAluno.turma,
        novoAluno.ano,
        novoAluno.matricula,
        novoAluno.responsavel,
        novoAluno.rua,
        novoAluno.numero,
        novoAluno.cep,
        novoAluno.cidade,
        novoAluno.bairro,
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(`Aluno ${novoAluno.nome} foi registrado com sucesso`);
          }
        }
      );
    });
  };

  atualizaDadosAluno = (id, aluno) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE ALUNOS SET NOME = ?, DATA_DE_NASCIMENTO = ?, CPF = ?, EMAIL = ?, TELEFONE = ?, TURMA = ?, ANO = ?, MATRICULA = ?, RESPONSAVEL = ?, RUA = ?, NUMERO = ?, CEP = ?, CIDADE = ?, BAIRRO = ? WHERE ID = ? ",
        aluno.nome,
        aluno.dataDeNascimento,
        aluno.cpf,
        aluno.email,
        aluno.telefone,
        aluno.turma,
        aluno.ano,
        aluno.matricula,
        aluno.responsavel,
        aluno.rua,
        aluno.numero,
        aluno.cep,
        aluno.cidade,
        aluno.bairro,
        id,
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(`Informações do aluno foi atualizadas com sucesso`);
          }
        }
      );
    });
  };
  deletaAluno = (id) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM ALUNOS WHERE ID = ?", id, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve(`Aluno de ${id} foi deletado do sistema da escola`);
        }
      });
    });
  };
}

export default AlunoDao;
