import express from 'express';
import serviceRequestControler from '../controlers/serviceRequestControlers.js';
import reachUsControler from '../controlers/reachUsControlers.js';
import homeShema from '../models/reachUsSchema.js';
import serviceRequestSchema from '../models/requestserviceSchema.js';
const router = express.Router();


router.post('/home/api/v1/reach-us/', homeShema, reachUsControler);

router.post('/home/api/v1/request-service/', serviceRequestSchema, serviceRequestControler);


export default router;