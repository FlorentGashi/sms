import express from 'express';
import { sequelize } from './config/database';
import authRouter from './routes/auth'; 
import { userRouter } from './routes/user';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter); 
app.use('/api/users', userRouter);  

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const startApp = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connection successful!');

    await sequelize.sync({ force: false }); 
    console.log('Database synced successfully!');

    const PORT = process.env.PORT || 4012;
    console.log('Using port:', PORT);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startApp();
