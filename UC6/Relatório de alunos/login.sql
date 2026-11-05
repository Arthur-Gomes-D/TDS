USE escola_electron;

CREATE TABLE IF NOT EXISTS usuarios (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 usuario VARCHAR(100) NOT NULL UNIQUE,
 senha CHAR(32) CHARACTER SET ascii
  COLLATE ascii_bin NOT NULL
);

INSERT INTO usuarios ( usuario, senha ) VALUES(
     'admin', MD5('Aula@123')
);

GRANT SELECT ON escola_electron.usuarios
TO 'crud_app'@'localhost';

SELECT id, usuario FROM usuarios;