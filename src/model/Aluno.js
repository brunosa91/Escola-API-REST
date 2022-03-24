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

  atualizaDadosAluno = async (id, aluno) => {
    try {
      const atualizaAluno = new AlunoSchema(
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
      return await this.dao.atualizaDadosAluno(id, atualizaAluno);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  deletaAluno = async (id) => {
    try {
      return await this.dao.deletaAluno(id);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  _IdentificaMatricula = async (matricula) => {
    const identifica = await this.dao.buscaMatricula(matricula);
    if (identifica == undefined) {
      throw new Error(`Não há aluno com a ${matricula} no banco de dados`);
    }

    return identifica;
  };
}

export default Aluno;
