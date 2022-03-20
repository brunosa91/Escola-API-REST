class AlunoSchema {
  constructor(
    nome,
    dataDeNascimento,
    cpf,
    email,
    telefone,
    turma,
    ano,
    matricula,
    reponsavel,
    rua,
    numero,
    cep,
    cidade,
    bairro
  ) {
    this.nome = nome;
    this.dataDeNascimento = dataDeNascimento;
    this.cpf = this._validaCpf(cpf);
    this.email = this._validaEmail(email);
    this.telefone = telefone;
    this.turma = turma;
    this.ano = ano;
    this.matricula = matricula;
    this.reponsavel = reponsavel;
    this.rua = rua;
    this.numero = numero;
    this.cep = cep;
    this.cidade = cidade;
    this.bairro = bairro;
  }

  _validaCpf(cpf) {
    let regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let resultado = regex.test(cpf);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(`cpf fora do padrão ${console.log(resultado)}`);
    }
  }

  _validaEmail(email) {
    if (email.indexOf("@") > 0 && email.indexOf(".com") > email.indexOf("@")) {
      return email;
    } else {
      throw new Error(`email fora do padrão ${console.log(email)}`);
    }
  }
}

export default AlunoSchema;
