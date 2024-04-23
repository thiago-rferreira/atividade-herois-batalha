CREATE DATABASE heroes_db;

\c heroes_db;

CREATE TABLE IF NOT EXISTS heroes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    power VARCHAR(255) NOT NULL,
    level INT NOT NULL,
    hp INT NOT NULL
);

CREATE TABLE IF NOT EXISTS battles (
    id SERIAL PRIMARY KEY,
    hero1_id INT NOT NULL,
    hero2_id INT NOT NULL,
    winner_id INT NOT NULL,
    FOREIGN KEY (hero1_id) REFERENCES heroes(id),
    FOREIGN KEY (hero2_id) REFERENCES heroes(id),
    FOREIGN KEY (winner_id) REFERENCES heroes(id)
);

INSERT INTO heroes (name, power, level, hp) VALUES ('Homem de Ferro', 'Armadura Tecnológica', 10, 100);
INSERT INTO heroes (name, power, level, hp) VALUES ('Homem-Aranha', 'Sentido Aranha', 10, 90);
INSERT INTO heroes (name, power, level, hp) VALUES ('Thor', 'Mjolnir', 10, 95);
INSERT INTO heroes (name, power, level, hp) VALUES ('Capitão América', 'Escudo Indestrutível', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Hulk', 'Força Descomunal', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Viúva Negra', 'Habilidades de Espionagem', 10, 90);
INSERT INTO heroes (name, power, level, hp) VALUES ('Pantera Negra', 'Traje de Vibranium', 10, 95);
INSERT INTO heroes (name, power, level, hp) VALUES ('Doutor Estranho', 'Magia das Artes Místicas', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Capitã Marvel', 'Poderes Cósmicos', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Gavião Arqueiro', 'Precisão de Tiro', 10, 90);
INSERT INTO heroes (name, power, level, hp) VALUES ('Feiticeira Escarlate', 'Manipulação de Realidade', 10, 95);
INSERT INTO heroes (name, power, level, hp) VALUES ('Homem-Formiga', 'Encolhimento', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Vespa', 'Voo e Ataques de Energia', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Doutor Destino', 'Magia Negra', 10, 90);
INSERT INTO heroes (name, power, level, hp) VALUES ('Falcão', 'Asas e Habilidades de Voo', 10, 95);
INSERT INTO heroes (name, power, level, hp) VALUES ('Máquina de Combate', 'Armadura de Combate', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Mercúrio', 'Super Velocidade', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Noturno', 'Teleportação e Agilidade', 10, 90);
INSERT INTO heroes (name, power, level, hp) VALUES ('Colossus', 'Força e Resistência Sobre-Humanas', 10, 95);
INSERT INTO heroes (name, power, level, hp) VALUES ('Gambit', 'Carga Cinética', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Ciclope', 'Visão de Raio-X', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Jean Grey', 'Telepatia e Telecinese', 10, 90);
INSERT INTO heroes (name, power, level, hp) VALUES ('Tempestade', 'Controle do Clima', 10, 95);
INSERT INTO heroes (name, power, level, hp) VALUES ('Wolverine', 'Fator de Cura e Garras de Adamantium', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Senhor das Estrelas', 'Líder dos Guardiões da Galáxia', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Rocket Raccoon', 'Engenhocas e Armas', 10, 90);
INSERT INTO heroes (name, power, level, hp) VALUES ('Groot', 'Regeneração e Manipulação de Plantas', 10, 95);
INSERT INTO heroes (name, power, level, hp) VALUES ('Gamora', 'Habilidades de Combate', 10, 85);
INSERT INTO heroes (name, power, level, hp) VALUES ('Drax, o Destruidor', 'Força e Habilidades de Combate', 10, 85);

