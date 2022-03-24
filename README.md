# API ESCOLA- MERCÚRIO - Resilia

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04.

Link do repositório no Heroku [aqui]().

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

Criando o banco de dados:

```
npm run create
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

- **DELETE /usuario/id/{id}**

  Schema da resposta

  ```
  {
      mensagem: <String>
      erro: <Boleano>
  }
  ```

---

## Rodando teste

Para rodar os teste, utilizando o framework `Jest` e o [`Supertest`](https://jestjs.io/pt-BR/docs/testing-frameworks#expressjs) basta rodar o comando abaixo:

```
npm test
```
