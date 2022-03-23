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
    this.dataDeNascimento = this._validaData(dataDeNascimento);
    this.cpf = this._validaCpf(cpf);
    this.email = this._validaEmail(email);
    this.telefone = this._validaTelefone(telefone);
    this.turma = this._validaTurma(turma);
    this.ano = this._validaAno(ano);
    this.matricula = this._validaMatricula(matricula);
    this.responsavel = this._validaResponsavel(reponsavel);
    this.rua = this._verificaRua(rua);
    this.numero = this._validaNumero(numero);
    this.cep = this._validaCep(cep);
    this.cidade = this._verificaCidade(cidade);
    this.bairro = this._verificaBairro(bairro);
  }
  _validaData(nome) {
    if (nome != "") {
      return nome;
    } else {
      throw new Error(`É necessário preencher o campo nome`);
    }
  }
  _validaData(dataDeNascimento) {
    let regex = /^\d{2}\/\d{2}\/\d{4}$/;
    let resultado = regex.test(dataDeNascimento);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(
        `Data de Nascimento fora do padrão, digite números no formato xx/xx/xxxx`
      );
    }
  }
  _validaCpf(cpf) {
    let regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let resultado = regex.test(cpf);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(
        `CPF fora do padrão, digite números no formato xxx.xxx.xxx-xx`
      );
    }
  }

  _validaEmail(email) {
    if (email.indexOf("@") > 0 && email.indexOf(".com") > email.indexOf("@")) {
      return email;
    } else {
      throw new Error(`Email fora do padrão, digite no formato xxxx@xxxxx.com`);
    }
  }

  _validaTelefone(telefone) {
    let regex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
    let resultado = regex.test(telefone);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(
        `Tefone fora do padrão, digite no formato (xx)xxxx-xxxx ou (xx)xxxxx-xxxx,lembrando que no ddd não tem o número 0,números de telefone fixo não iniciam com 1;números de celular tem um dígito a mais que é o número 9.`
      );
    }
  }
  _validaTurma(turma) {
    let regex = /(manhã|tarde|noite)/gi; //
    let resultado = regex.test(turma);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(
        `turma não existe, por gentileza digitar manhã, tarde ou noite `
      );
    }
  }

  _validaAno(ano) {
    let regex = /[2-9]/;
    let resultado = regex.test(ano);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(`ano inválido, coloque anos entre 2 e 9`);
    }
  }
  _validaMatricula(matricula) {
    if (matricula.length === 6) {
      return matricula;
    } else {
      throw new Error(`Matrícula inválida, digite exatamente 6 caracteres`);
    }
  }

  _validaResponsavel(responsavel) {
    if (responsavel != "") {
      return responsavel;
    } else {
      throw new Error(`É necessário preencher o campo responsável`);
    }
  }
  _verificaRua(rua) {
    if (rua != "") {
      return rua;
    } else {
      throw new Error(`É necessário preencher o campo rua`);
    }
  }

  _validaNumero(numero) {
    if (numero != "") {
      return numero;
    } else {
      throw new Error(`É necessário preencher o campo número`);
    }
  }

  _validaCep(cep) {
    let regex = /\d{5}-\d{3}$/gi;
    let resultado = regex.test(cep);
    if (resultado === true) {
      return resultado;
    } else {
      throw new Error(
        `CEP fora do padrão, digite números no formato xxxxx-xxx`
      );
    }
  }

  _verificaCidade(cidade) {
    if (cidade != "") {
      return cidade;
    } else {
      throw new Error(`É necessário preencher o campo cidade`);
    }
  }

  _verificaBairro(bairro) {
    if (bairro != "") {
      return bairro;
    } else {
      throw new Error(`É necessário preencher o campo bairro`);
    }
  }
}

export default AlunoSchema;
