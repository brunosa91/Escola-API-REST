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
    this.cpf = cpf;
    this.email = email;
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
}

export default AlunoSchema;
