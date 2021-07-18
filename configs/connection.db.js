import pg from "pg"
import dotenv from 'dotenv';
dotenv.config();
const pool = new pg.Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE

});
pool.connect((err) =>{
    if(err){
        console.log("could not connect to the database", err);
    }
    console.log("The connection to the database has been established sucessfully");
})


export default pool;