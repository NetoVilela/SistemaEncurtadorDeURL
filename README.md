# Sistema Encurtador de URL - SEURL

## Sistema feito com NodeJS e ReactJS para cadastro/login de usuários e encurtamentos de URLS.

![Badge](https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT)
![Badge](https://img.shields.io/static/v1?label=node&message=&color=green&style=for-the-badge&logo=NODE)

![Badge](https://img.shields.io/github/issues/NetoVilela/SistemaEncurtadorDeURL)
![Badge](https://img.shields.io/github/forks/NetoVilela/SistemaEncurtadorDeURL)
![Badge](https://img.shields.io/github/stars/NetoVilela/SistemaEncurtadorDeURL)
![Badge](https://img.shields.io/github/license/NetoVilela/SistemaEncurtadorDeURL)

> Status do Projeto: Em desenvolvimento :warning:

# Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
      * [Pre Requisitos](#pre-requisitos)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
      * [Combo](#combo)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)
<!--te-->

### Funcionalidades
    - Encurtamento de URLs
    - Cadastro de usuários
    - Login de usuários
    - Listagem de URLs encurtadas por usuário



### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/), [ReactJS](https://pt-br.reactjs.org/), [MySQL](https://www.mysql.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Banco de dados

Usando o script do MySQL disponível no arquivo db.sql localizado em [backend](https://github.com/NetoVilela/SistemaEncurtadorDeURL/tree/master/backend) para criar o banco de dados e as tabelas.

### Variáveis de ambiente

Foi disponibilizado no [backend](https://github.com/NetoVilela/SistemaEncurtadorDeURL/tree/master/backend) e no [frontend](https://github.com/NetoVilela/SistemaEncurtadorDeURL/tree/master/frontend) os arquivos '.env' (não foi engano). Neles estão contidas as variáveis ambientes necessárias para:
    - .env do backend
        - Nome do banco de dados (DB_NAME)
        - Nome do usuário MySQL (DB_USER)
        - Senha do banco de dados (DB_PASSWORD)
        - URL do frontend com a respectiva porta (BASE_URL_FRONT)

    - .env do frontend
        - URL do backend com a respectiva porta (REACT_APP_API)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone todo o repositório
$ git clone <https://github.com/NetoVilela/SistemaEncurtadorDeURL>

# Acesse a pasta do bacakend através do terminal
$ cd backend

# Instale as dependências
$ npm install

# Execute a aplicação 
$ node src/index.js

# O servidor inciará na porta:8081 


```

### 🎲 Rodando o Front End
```bash
# Acesse a pasta do frontend através do terminal
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O frontend inciará na porta:3000

```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [MySQL](https://www.mysql.com/)
