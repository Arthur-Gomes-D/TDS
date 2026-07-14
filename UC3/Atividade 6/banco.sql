CREATE DATABASE lista_banco_relacional;
USE lista_banco_relacional;

CREATE TABLE departamentos(
    id_depto INT PRIMARY KEY AUTO_INCREMENT,
    nome_depto VARCHAR(100) NOT NULL
);

CREATE TABLE funcionarios(
    id_func INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2),
    id_depto INT,
    FOREIGN KEY (id_depto) REFERENCES departamentos(id_depto)
);

CREATE TABLE cursos(
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100) NOT NULL,
    carga_horaria INT
);

CREATE TABLE alunos(
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nota DECIMAL(10,2),
    cidade VARCHAR(50),
    id_curso INT,
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE clientes(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

CREATE TABLE pedidos(
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(200),
    valor DECIMAL(10,2),
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) ON DELETE CASCADE
);

INSERT INTO departamentos (nome_depto) VALUES 
("TI"),
("Financeiro"),
("Recursos Humanos");

INSERT INTO funcionarios (nome, salario, id_depto) VALUES
("Tito Vítor", 3400, 3),
("Paula Dulce", 5622, 2),
("Aníbal Salvador", 3400, 3),
("Marinalva Matilde", 3000, 1),
("Romário Jacó", 0, NULL),
("Enoque Romeu", 0, NULL);

INSERT INTO cursos (nome_curso, carga_horaria) VALUES
("Análise de Sistemas", 2000),
("Design Gráfico", 2520),
("Administração", 3000);

INSERT INTO alunos (nome, cidade, id_curso) VALUES
("Evandro Iria", "Rio de Janeiro", 3),
("Chico Saturnino", "São Paulo", 2),
("Bethânia Amadeu", "Aquidauana", 1),
("Argentina Messias", "Recursolândia", NULL),
("Urbano Luzia", "Jaçanã", 1),
("Torquato Julinha", "Pelotas", 3);

INSERT INTO clientes (nome, email) VALUES
("Ofélia Aurélia", "feliaaurelia@gmail.com"),
("Horácio Gael", "horagael@gmail.com"),
("Valmir Glória", NULL),
("Laurinda Gregório", "gregorioorio@gmail.com");