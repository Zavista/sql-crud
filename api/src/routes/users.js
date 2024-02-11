import express from 'express';


const router = express.Router();


// User Routes

router.get('/', userController.getUsers);





export default router;