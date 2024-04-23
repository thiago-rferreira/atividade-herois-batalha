# Projeto: Gerenciamento de Heróis

![Banner](link_para_sua_imagem_banner.jpg)

## Introdução

O Projeto de Gerenciamento de Heróis é uma aplicação de backend desenvolvida para oferecer funcionalidades de CRUD (Create, Read, Update, Delete) relacionadas a heróis. Ele permite a criação, atualização, exclusão e recuperação de informações sobre heróis, bem como funcionalidades adicionais, como batalhas entre heróis e registro de histórico de batalhas.

## Funcionalidades

- Criação, leitura, atualização e exclusão (CRUD) de heróis.
- Realização de batalhas entre heróis.
- Registro e consulta de histórico de batalhas.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL

## Como Usar

1. Clone o repositório para o seu ambiente local.
2. Instale as dependências do projeto usando `npm install`.
3. Configure o banco de dados PostgreSQL com o nome `heroes_db` e execute o script `database.sql` para criar as tabelas necessárias.
4. Abra o arquivo `index.js` e ajuste as configurações do banco de dados conforme necessário (usuário, senha, host, porta).
5. Inicie o servidor executando `npm start`.
6. Acesse as diferentes rotas disponíveis conforme a documentação fornecida.

## Documentação e teste de rotas
**Testando as Rotas no Insomnia:**

Para testar cada rota individualmente, siga estas instruções:

```markdown
1. Rota para obter todos os heróis

- Método: GET
- URL: `http://localhost:6000/heroes`

2. Rota para adicionar um novo herói

- Método: POST
- URL: `http://localhost:6000/heroes`
- Corpo da Requisição (JSON):
  ```json
  {
      "name": "Nome do Herói",
      "power": "Poder do Herói",
      "level": 1,
      "hp": 100
  }
  ```

3. Rota para atualizar um herói

- Método: PUT
- URL: `http://localhost:6000/heroes/{id}`
  - Substitua `{id}` pelo ID do herói que deseja atualizar.
- Corpo da Requisição (JSON):
  ```json
  {
      "name": "Novo Nome do Herói",
      "power": "Novo Poder do Herói",
      "level": 2,
      "hp": 150
  }
  ```

4. Rota para deletar um herói

- Método: DELETE
- URL: `http://localhost:6000/heroes/{id}`
  - Substitua `{id}` pelo ID do herói que deseja deletar.

5. Rota para obter um herói específico

- Método: GET
- URL: `http://localhost:6000/heroes/{id}`
  - Substitua `{id}` pelo ID do herói que deseja recuperar.

6. Rota para obter todos os heróis de um determinado nível

- Método: GET
- URL: `http://localhost:6000/heroes/level/{level}`
  - Substitua `{level}` pelo nível desejado.

7. Rota para obter todos os heróis com um determinado poder

- Método: GET
- URL: `http://localhost:6000/heroes/power/{power}`
  - Substitua `{power}` pelo poder desejado.

8. Rota para realizar uma batalha entre dois heróis

- Método: GET
- URL: `http://localhost:6000/battles/{hero1_id}/{hero2_id}`
  - Substitua `{hero1_id}` e `{hero2_id}` pelos IDs dos heróis que deseja colocar para batalhar.

9. Rota para obter o histórico de batalhas

- Método: GET
- URL: `http://localhost:6000/battles`

10. Rota para obter o histórico de batalhas com os dados dos heróis

- Método: GET
- URL: `http://localhost:6000/battles/heroes`
```

**Aviso Importante:**

Este projeto destina-se exclusivamente a fins educacionais. Os dados de acesso ao banco de dados estão expostos neste projeto, pois é destinado a fins educacionais como projeto de estudo para alunos. Certifique-se de não utilizar informações sensíveis neste contexto.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar bugs, propor melhorias ou enviar pull requests.
