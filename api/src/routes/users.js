import express from 'express';
import { getUsers, addUser, updateUser, deleteUser} from '../controllers/users.js'


const router = express.Router();


// User Routes

router.get('/', getUsers);

router.post('/', addUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);






export default router;