Códigos do banco de dados

CREATE DATABASE seurl;

USE seurl;

CREATE TABLE Usuarios(
    id INTEGER NOT NULL auto_increment,
    nome VARCHAR(255),
    email VARCHAR(255),
    senha DATETIME,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE URLs (
    id INTEGER NOT NULL auto_increment,
    original_url VARCHAR(255),
    new_url VARCHAR(255),
    id_usuario_url INTEGER,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario_url) REFERENCES Usuarios(id)
);
