# users_api_postgres

Estudo de desenvolvimento de API Rest com banco de dados Postgres

- endpoints GET/POST/PUT/DELETE
- Documentação utilizando swagger.
- docker/compose.
- postgres.

</br>

## Regras

- Javascript.
- Salvar (email, senha).
- Cada usuário deverá ter um ID único
- Gravar as informações no banco.
- Validações.
- Knex
- Express
- Postgres

serviço de API RESTFUL usando nodejs express

| HTTP   | ROUTE                 | BODY               | DESCRIÇÃO              |
| ------ | --------------------- | ------------------ | ---------------------- |
| GET    | /api/v1/users         |                    | Listar todos usuarios  |
| GET    | /api/v1/users/user_id |                    | Listar único usuário   |
| POST   | /api/v1/users         | JSON (email,senha) | Criar único usuário    |
| PUT    | /api/v1/users/user_id | JSON (email,senha) | Alterar único usuário  |
| DELETE | /api/v1/users         |                    | Deletar todos usuarios |
| DELETE | /api/v1/users/user_id |                    | Deletar único usuário  |
