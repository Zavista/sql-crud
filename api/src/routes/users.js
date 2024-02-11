import express from 'express';
import { getUsers } from '../controllers/users.js'


const router = express.Router();


// User Routes

router.get('/', getUsers);





export default router;