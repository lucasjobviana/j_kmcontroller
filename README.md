# Controle de manutenção - Lucas Job Viana

Olá, este repósitorio é para armazenar o meu projeto kmcontroller, um sistema para gerênciar a manutenção de frotas. 

## Oque é e como funciona ?

O projeto consiste em um sistema web full-stack para gerenciar a manutenção de frotas. 

Foi desenvolvido para rodar em containers docker. Ao buildar/executar o docker-compose.yml na raiz do projeto, será criado três containers sem nome, utilizando as imagens j_kmcontroller_frontend, j_kmcontroller_backend e mysql:8.0.23. O banco mysql será criado com o nome database-jkc, com usuário root, porta 3306 e senha: 123456 atraves do sequelize do backend.

## Quais tecnologias foram utilizadas ? 

### Front-End
  - Typescript: React - Componentes Funcionais, React Router Dom, Context API, Unform.
  - Css: Material UI.
### Back-End
  - Node: Express, Sequelize, POO, JSON Web Tokens.
  - Banco de dados: Mysql.
  - Docker

## Tem algum pré-requisito para acessar o projeto ?

- Navegador de internet.
- Docker e docker-compose intalados na máquina.

## Como posso utilizar rodar esse projeto na minha máquina ?

    1. Clone ou fork este repositório.
    2. Navegue até o diretório do projeto: `cd nome-do-projeto`.
    3. Na raiz do projeto, execute o comando: docker-compose up --build.
    4. Acesse `http://localhost:5173/` pelo seu navegador.
    5. Crie um novo usuário e faça login no sistema.

<!-- ## Capturas -->

<!-- ![ texto](./img/blog.png) -->


