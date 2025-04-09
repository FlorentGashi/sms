import { sequelize } from './config/database';

const startApp = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connection successful!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startApp();
