import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import  contactUsRouter from "./routes/route.js";


//middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

//routes
app.use('/', contactUsRouter);

app.use('*', (req, res)=>{
    res.status(404).json({message: 'Not a valid request'});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The server is running on port http://127.0.0.1:${port}`)
});
