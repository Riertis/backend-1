import express from 'express';
import logger from './logger/pino.logger';

const server = express();

const port = 2000;

server.get('/task', (req, res) => {
  res.json({ message: 'Задачки' });
});

server.post('/user/register', (req, res) => {
  logger.info(`Регистрация нового пользователя`);
  res.json({ message: 'Регистрация' });
});

server.post('/user/login', (req, res) => {
  logger.info(`Вход пользователя`);
  res.json({ message: 'Вход' });
});
server.listen(port, () => {
  logger.info(`Server is started on port ${port}...`);
});
