# Sistema Encurtador de URL - SEURL

## Sistema feito com NodeJS e ReactJS para cadastro/login de usuários e encurtamentos de URLS.

![Badge](https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT)
![Badge](https://img.shields.io/static/v1?label=node&message=Ambiente-de-execução&color=green&style=for-the-badge&logo=NODE)

![Badge](https://img.shields.io/github/issues/NetoVilela/SistemaEncurtadorDeURL)
![Badge](https://img.shields.io/github/forks/NetoVilela/SistemaEncurtadorDeURL)
![Badge](https://img.shields.io/github/stars/NetoVilela/SistemaEncurtadorDeURL)
![Badge](https://img.shields.io/github/license/NetoVilela/SistemaEncurtadorDeURL)

> Status do Projeto: Concluído :heavy_check_mark:

# Tabela de conteúdos
=================
<!--ts-->
   * [Funcionalidades](#Funcionalidades)
   * [Tabela de Conteudo](#Tabela-de-Conteúdo)
   * [Pré requisitos](#Pré-requisitos)
      * [Banco de Dados](#Banco-de-dados)
      * [Configuração das variáveis de ambiente](#Configuração-das-variáveis-de-ambiente)
   * [Instalação](#Instalação)
      * [Rodando o backend](#Rodando-o-Back-End)
      * [Rodando o frontend](#Rodando-o-Front-End)
   * [Tecnologias](#Tecnologias)
   * [Autor](#Autor)
<!--te-->

# Funcionalidades
    - Encurtamento de URLs
    - Cadastro de usuários
    - Login de usuários
    - Listagem de URLs encurtadas por usuário


# Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/), [ReactJS](https://pt-br.reactjs.org/), [MySQL](https://www.mysql.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Banco de dados

Usando o script do MySQL disponível no arquivo db.sql localizado em [backend](https://github.com/NetoVilela/SistemaEncurtadorDeURL/tree/master/backend), crie o banco de dados e as tabelas no seu banco de dados local.


## Configuração das variáveis de ambiente

Foi disponibilizado no [backend](https://github.com/NetoVilela/SistemaEncurtadorDeURL/tree/master/backend) e no [frontend](https://github.com/NetoVilela/SistemaEncurtadorDeURL/tree/master/frontend) os arquivos '.env' (não foi engano), pois nesses arquivos você poderá alterar as variáveis de ambiente com seus dados locais.
Substitua o ip local presente nas variáveis de ambiente pelo ip da sua máquina na rede local.

#### Variáveis de ambiente no arquivo .env do backend
    - DB_NAME = "Nome do banco de dados"
    - DB_USER = "Nome do usuário MySQL"
    - DB_PASSWORD = "Senha do banco de dados"
    - BASE_URL_FRONT = "URL do frontend com a respectiva porta"

#### Variáveis de ambiente no arquivo .env do frontend
    - REACT_APP_API = URL do backend com a respectiva porta
    - REACT_APP_FRONT = URL do frontend com a respectiva porta

# Instalação

## Rodando o Back End

```bash
# Clone todo o repositório
$ git clone https://github.com/NetoVilela/SistemaEncurtadorDeURL.git

# Quando estiver na raíz do projeto acesse a pasta do backend através do terminal
$ cd backend

# Instale as dependências
$ npm install

# Execute o servidor 
$ node src/index.js

# O servidor inciará na porta 8081 

```
Para saber se a conexão com o banco de dados foi estabelecida com sucesso, vá até o arquivo [connection.js](https://github.com/NetoVilela/SistemaEncurtadorDeURL/blob/master/backend/src/config/connection.js) e descomente as linhas que mostrarão no console as mensagems de sucesso ou falha para a conexão com o banco de dados (linhas 15 a 21 no arquivo). Certifique-se também de que o host seja o endereço da sua máquina, por padrão estará 'localhost':
```bash
# Linha 5 do arquivo connection.js
$ host: 'localhost',
```
Se no seu console estiver a mensagem "Conexão com banco de dados estabelecida com sucesso" você estará pronto para o próximo passo.

### Rodando o Front End
```bash
# Quando estiver na raíz do projeto acesse a pasta do frontend através do terminal
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O frontend inciará na porta 3000 
```

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [VSCode](https://code.visualstudio.com/) (IDE utilizada)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [MySQL](https://www.mysql.com/)


# Autor
 [Neto Vilela](https://www.instagram.com/neto.vilela.f/)
 #### Projeto construído com ânimo, paixão e vontade de aprender. :heart: :blush:
