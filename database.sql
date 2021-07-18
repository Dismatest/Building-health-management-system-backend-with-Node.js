CREATE DATABASE IF NOT EXISTS scalable-systems;


CREATE TABLE IF NOT EXISTS reachus_form (
    reachUs_form_id SERIAL PRIMARY KEY,
    client_name VARCHAR(255),
    email VARCHAR(255),
    query VARCHAR(255)
)

CREATE TABLE IF NOT EXISTS about_us (
    about_us_id SERIAL PRIMARY KEY,
    about_us_description VARCHAR(255)
)

