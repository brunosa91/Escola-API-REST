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
      throw new Error(error.message);
    }
  };

  insereDadosAluno = async (aluno) => {
    try {
      const novoAluno = new AlunoSchema(
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
        aluno.bairro
      );
      return await this.dao.insereDadosAluno(novoAluno);
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export default Aluno;
