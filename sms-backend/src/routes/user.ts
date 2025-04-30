import { Router } from 'express';
import { User } from '../models/user';  

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll();  
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});


export { userRouter };

