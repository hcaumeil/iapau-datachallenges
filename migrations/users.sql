CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email TEXT NOT NULL,
    surname TEXT,
    name TEXT,
    password TEXT NOT NULL,
    salt TEXT, 
    level INT,
    study_level TEXT,
    town TEXT,
    school TEXT,
    role TEXT,
    id_team UUID,
    FOREIGN KEY (id_team) REFERENCES team (id)
);

INSERT INTO users (email, surname, name, password, salt, level, study_level, town, school, role) VALUES ('a@a.a', 'a', 'a', 'a', 'a', 1, 'a', 'a', 'a', 'a');
INSERT INTO users (email, surname, name, password, salt, level, study_level, town, school, role) VALUES ('b@b.b', 'b', 'b', 'b', 'b', 1, 'b', 'b', 'b', 'b');
INSERT INTO users (email, surname, name, password, salt, level, study_level, town, school, role) VALUES ('c@c.c', 'c', 'c', 'c', 'c', 1, 'c', 'c', 'c', 'c');
INSERT INTO users (email, surname, name, password, salt, level, study_level, town, school, role) VALUES ('d@d.d', 'd', 'd', 'd', 'd', 1, 'd', 'd', 'd', 'd');