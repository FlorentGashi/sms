import { Router, Request, Response } from 'express';
import { User } from '../models/user'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const authRouter = Router();

const loginUser = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );
  
    return res.json({ message: 'Login successful', token });
  };
  

authRouter.post('/', loginUser);

export default authRouter;
