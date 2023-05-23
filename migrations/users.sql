CREATE TABLE IF NOT EXISTS users (
    email TEXT NOT NULL PRIMARY KEY,
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