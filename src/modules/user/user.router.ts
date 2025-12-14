import express from 'express';
import logger from '../../logger/pino.logger';

export const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
  logger.info(`Регистрация нового пользователя`);
  console.log(req.body);
  res.json({ message: 'Регистрация' });
});

userRouter.post('/login', (req, res) => {
  logger.info(`Вход пользователя`);
  res.json({ message: 'Вход' });
});
