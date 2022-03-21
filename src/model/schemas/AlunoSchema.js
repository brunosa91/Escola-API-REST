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
    this.nome = _validaNome(nome);
    this.dataDeNascimento = dataDeNascimento;
    this.cpf = this._validaCpf(cpf);
    this.email = this._validaEmail(email);
    this.telefone = this._validaTelefone(telefone);
    this.turma = this._validaTurma(turma);
    this.ano = this._validaAno(ano);
    this.matricula = this._validaMatricula(matricula);
    this.reponsavel = this._validaResponsavelreponsavel;
    this.rua = this._verificaRua(rua);
    this.numero = this._validaNumero(numero);
    this.cep = this._validaCep(cep);
    this.cidade = this._verificaCidade(cidade);
    this.bairro = this._verificaBairro(bairro);
  }
  _validaNome(nome) {
    if (nome === String) {
      return nome;
    } else {
      throw new Error(`nome fora do padrão ${console.log(nome)}`);
    }
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

  _validaTelefone(telefone) {
    let regex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
    let resultado = regex.test(telefone);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(`telefone fora do padrão ${console.log(telefone)}`);
    }
  }
  _validaTurma(turma) {
    let regex = /(manhã|tarde|noite)/gi;
    let resultado = regex.test(turma);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(`turma não existe ${console.log(resultado)}`);
    }
  }

  _validaAno(ano) {
    let regex = /[2-9]/;
    let resultado = regex.test(ano);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(`ano inválido ${console.log(resultado)}`);
    }
  }
  _validaMatricula(matricula) {
    if (matricula.length === 6) {
      return matricula;
    } else {
      throw new Error(`matricula inválida ${console.log(resultado)}`);
    }
  }

  _validaResponsavel(responsavel) {
    if (responsavel === String) {
      return responsavel;
    } else {
      throw new Error(`responsavel fora do padrão ${console.log(responsavel)}`);
    }
  }
  _verificaRua(rua) {
    if (rua != "") {
      return rua;
    } else {
      throw new Error(`coloque uma rua ${console.log(rua)}`);
    }
  }

  _validaNumero(numero) {
    if (numero === Number) {
      return resultado;
    } else {
      throw new Error(`NUMERO fora do padrão ${console.log(numero)}`);
    }
  }

  _validaCep(cep) {
    let regex = /\d{5}-\d{3}$/gi;
    let resultado = regex.test(cep);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(`cep fora do padrão ${console.log(resultado)}`);
    }
  }

  _verificaCidade(cidade) {
    if (cidade != "") {
      return cidade;
    } else {
      throw new Error(`coloque uma cidade ${console.log(cidade)}`);
    }
  }

  _verificaBairro(bairro) {
    if (bairro != "") {
      return bairro;
    } else {
      throw new Error(`coloque uma rua ${console.log(bairro)}`);
    }
  }
}

export default AlunoSchema;
