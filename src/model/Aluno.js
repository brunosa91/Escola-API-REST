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
      const identifica = await this.dao.buscaMatricula(matricula);
      if (identifica.length != 0) {
        return identifica;
      } else {
        throw new Error(
          `Não há aluno com a matrícula ${matricula} no banco de dados`
        );
      }
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
      await this.verificandoId(id);
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
      await this.verificandoId(id);
      return await this.dao.deletaAluno(id);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  verificandoId = async (id) => {
    const verifica = await this.dao.verificaId(id);
    if (verifica.length != 0) {
      return verifica;
    } else {
      throw new Error(`Não há aluno com o id ${id} no banco de dados`);
    }
  };
}

export default Aluno;
