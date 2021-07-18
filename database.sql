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

const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const validEmail = emailRegex.test(email);
    const emailParts = email.split('@');
    const domainParts = email[1].split(".");

    if (!client_name || !email || !query){
        res.status(404).json({message: 'All fields are required!'})
    };
    if (!validEmail){
        res.status(404).json({message: 'The email is not valid!'})

    };
    if (emailParts[0].length > 64){
        res.status(404).json({message: 'The email is not valid!'})
    }
    if (query.length > 1000){
        res.status(404).json({message: 'Your query should not exeed 1000 words!'})  
    }