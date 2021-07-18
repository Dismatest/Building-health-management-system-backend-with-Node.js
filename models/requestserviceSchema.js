import { body } from 'express-validator';

const requestServiceSchema = [
    body('from').isEmail().normalizeEmail(),
    body('subject').isLength({ max: 100 }).not().isEmpty().trim().escape(),
    body('email_body').isLength({ max: 100 }).not().isEmpty().trim().escape(),
    body('attachment').not().isEmpty()
]

export default requestServiceSchema;
