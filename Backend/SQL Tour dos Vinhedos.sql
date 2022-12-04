CREATE TABLE person (
        id SERIAL PRIMARY KEY,
        name varchar(255),
        email varchar(255),
        password varchar(255)
);


CREATE TABLE client (
        id SERIAL PRIMARY KEY,
        person_id INTEGER NOT NULL,
        country varchar(50),
        FOREIGN KEY (person_id)
        REFERENCES person(id)
);


CREATE TABLE employee (
        id SERIAL PRIMARY KEY,
        person_id INTEGER NOT NULL,
        job varchar(255),
        FOREIGN KEY (person_id)
        REFERENCES person(id)
);