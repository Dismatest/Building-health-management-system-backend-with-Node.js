import pool from '../configs/connection.db.js';
import { validationResult} from 'express-validator';

export default async (req, res) => {

       const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        const {client_name, email, query} = req.body;

        await pool.query(`SELECT * FROM reachus_form WHERE email=$1`, [email], (error, result) => {
            if (error){
                console.log("There was an erorr querying the database", error)
            }
            console.log(result.rows);
        })
         try {
            await pool.query(`INSERT INTO reachus_form (client_name, email, query) VALUES ($1, $2, $3) RETURNING reachus_form_id, email`, [client_name, email, query]);
            res.status(200).json({message: 'Your query has been submited successfully!, will respond soon'})

        } catch (error) {
            throw(error)
        }
    

}