import express from 'express';
import logger from '../../logger/pino.logger';
import { getMockUser } from './user.mocks';

export const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
  logger.info(`Регистрация нового пользователя email=${req.body.email}`);

  const result = { ...getMockUser(), email: req.body.email, password: req.body.password };

  res.json(result);
});

userRouter.post('/login', (req, res) => {
  logger.info(`Вход пользователя email=${req.body.email}`);

  const result = { ...getMockUser(), name: req.body.name, email: req.body.email, password: req.body.password };

  res.json(result);
});
