CREATE DATABASE ng_movies_db;

USE ng_movies_db;

CREATE TABLE movie(
    ID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(180),
    Year INTEGER,
    Runtime VARCHAR(100),
    Genre VARCHAR(500),
    Director VARCHAR(100),
    Poster VARCHAR(500),
    Imdbid VARCHAR(100) UNIQUE
    );

RENAME TABLE movie to movies;

DESCRIBE movies;