import { body} from 'express-validator';

const homeShema = [
    body('client_name').isLength({ min: 5 }),
    body('query').isLength({ max: 1000 }).not().isEmpty().trim().escape(),
    body('email').isEmail().normalizeEmail()
]

export default homeShema;