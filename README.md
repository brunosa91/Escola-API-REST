# API ESCOLA- MERCÚRIO - Resilia

<img src="./src/assets/escola.jpg">

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04.

Link do repositório no Heroku [aqui](https://escola-api-rest.herokuapp.com/).

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Objetivo

Esse projeto tem como objetivo criar uma API RESTful de uma ESCOLA, onde será possível aplicar as operações CRUD na entidade `aluno`.

## Pré-Requisitos

- Node.js v.16.14.0
- NPM v.8.3.1

## Pacotes utilizados

- [Express](https://www.npmjs.com/package/express) v.4.17.3
- [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
- [SQLite](https://www.npmjs.com/package/sqlite3) v.5.0.0
- [Jest](https://jestjs.io/docs/getting-started) v.27.5.1
- [Supertest](https://www.npmjs.com/package/supertest) v.6.2.2

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/brunosa91/Escola-API-REST.git
```

Entrando na pasta:

```
cd Escola_API-REST
```

Instalando os pacotes:

```
npm install
```

Iniciando o servidor:

```
npm start
```

---

## Rotas implementadas

### aluno

- **GET /aluno**

  Schema da resposta segue exemplo da resposta

  ```
  {
      usuarios: [
          {
  	        "ID": 1,
  		      "NOME": "Carlos",
  		      "DATA_DE_NASCIMENTO": "16/11/2000",
  		      "CPF": "111.111.111-11",
  		      "EMAIL": "carlito@gmail.com",
  		      "TELEFONE": "(11)11111-1111",
  		      "TURMA": "manhã",
  		      "ANO": "9",
  		      "MATRICULA": "123456",
  		      "RESPONSAVEL": "Olavo",
  		      "RUA": "napomuceno",
  		      "NUMERO": "123",
  		      "CEP": "00000-020",
  		      "CIDADE": "Guarulhos",
  		      "BAIRRO": "seródio"
        }

      erro: <Boleano>

  }
  ```

- **GET /aluno/matricula/{matricula}**

  Schema da resposta

  ```
  {
            	"aluno": [
  {
  	        "nome":"Jean Carlos",
  	        "dataDeNascimento": "16/11/2011",
  	        "cpf" : "459.333.333-22",
  	        "email":"jj@gmail.com",
  	        "telefone":"(11) 2151-1111",
  	        "turma":"tarde",
  	        "ano":"6 ano",
  	        "matricula":"151515",
  	        "responsavel":"Olavo Dumonts",
  	        "rua":"guararapes",
  	        "numero":"555",
  	        "cep":"45450-020",
  	        "cidade":"Teresina",
  	        "bairro":"Campinho"
        },
      erro: <Boleano>  aluno: [


  }
  ```

- **POST /aluno**

  Schema da requisição

  ```
        {
  	        "nome":"Jean Carlos",
  	        "dataDeNascimento": "16/11/2011",
  	        "cpf" : "459.333.333-22",
  	        "email":"jj@gmail.com",
  	        "telefone":"(11) 2151-1111",
  	        "turma":"tarde",
  	        "ano":"6 ano",
  	        "matricula":"151515",
  	        "responsavel":"Olavo Dumonts",
  	        "rua":"guararapes",
  	        "numero":"555",
  	        "cep":"45450-020",
  	        "cidade":"Teresina",
  	        "bairro":"Campinho"
        }
  ```

  Schema da resposta

  ```
  {
  	"alunos": "Aluno Jean foi registrado com sucesso",
  	"erro": false
  }

  	{
  	"mensagem": "mensagem do erro e como corrigir",
  	"erro": true
  }


  ```

- **PUT /aluno/id/{id}**

  Schema da requisição

  ```
       {
          "nome":"Fabio Azevedo",
          "dataDeNascimento": "16/11/2011",
          "cpf" : "459.333.333-22",
          "email":"jj@gmail.com",
          "telefone":"(11) 2151-1111",
          "turma":"tarde",
          "ano":"6 ano",
          "matricula":"151515",
          "responsavel":"Olavo Dumonts",
          "rua":"guararapes",
          "numero":"555",
          "cep":"45450-020",
          "cidade":"Teresina",
          "bairro":"Campinho"
      }
  ```

  Schema da resposta

  ```
  {
  	"alunos": "Informações do aluno foi atualizadas com sucesso",
  	"erro": false
  }

  	{
  	"mensagem": "mensagem do erro e como corrigir",
  	"erro": true
  }
  ```

- **DELETE /aluno/id/{id}**

  Schema da resposta

  ```
  {
    {
  	"message": "Aluno de 3 foi deletado do sistema da escola",
  	"error": false
  }
  {
  	"message": "Não há aluno com o id 5 no banco de dados",
  	"error": true
  }
  }
  ```

---

## Rodando teste

Para rodar os teste, utilizando o framework `Jest` e o [`Supertest`](https://jestjs.io/pt-BR/docs/testing-frameworks#expressjs) basta rodar o comando abaixo:

```
npm test
```
