import { validationResult } from 'express-validator';
import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';

let path;

    let Storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "./images");
        },
        filename: (req, file, callback) => {
            callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
        }
    });
    
    let upload = multer({
        storage: Storage
    }).single("image"); //Field name and max count

export default async (req, res) => {

    //server side form validation

       const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        const {from, subject, email_body, attachment} = req.body;

        //nodemailer 
        upload(req,res, (err) => {
            if(err){
                console.log(err)
                return res.end("Something went wrong!");
            }else{
                
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: process.env.USER_EMAIL_ADDRESS,
                      pass: process.env.USER_EMAIL_PASSWORD
                    }
                });
                
                let mailOptions = {
                  from: 'billclintonogot88@gmail.com',
                  to: from,
                  subject:subject,
                  text:email_body,
                  attachments: [  
                    {
                     path: path
                    }
                 ]
                };
                 transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                      res.status(200).json({message: "email has been sent"});
                      fs.unlink(path, (err) => {
                        if(err){
                            return res.end(err)
                        }else{
                            console.log("deleted")
                        }
                      })
                    }
                  });
            }
        })
    

}