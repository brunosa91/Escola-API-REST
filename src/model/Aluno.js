import AlunoDao from "../DAO/Aluno_dao.js";
import AlunoSchema from "./schemas/AlunoSchema.js";

class Aluno {
  constructor(db) {
    this.dao = new AlunoDao(db);
  }

  buscaTodosAlunos = async () => {
    try {
      return await this.dao.buscaTodosAlunos();
    } catch (error) {
      throw new Error(error.mensagem);
    }
  };

  buscaMatricula = async (matricula) => {
    try {
      return await this.dao.buscaMatricula(matricula);
    } catch (error) {
      throw new Error(error.mensagem);
    }
  };
}

export default Aluno;
