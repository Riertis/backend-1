import express from 'express';
import logger from './logger/pino.logger';

const server = express();

const port = 2000;

server.use(express.json());

server.get('/task', (req, res) => {
  logger.info('Получение задачи');
  console.log(req.query);
  res.json({ message: 'Список задач' });
});

server.get('/task/favorites', (req, res) => {
  logger.info(`Получение избранных задач`);
  res.json({ message: 'Избранные задачи' });
});

server.get('/task/:id', (req, res) => {
  const id = req.params.id;

  logger.info(`Получение задачи с id=${id}`);
  res.json({ id });
});

server.post('/user/register', (req, res) => {
  logger.info(`Регистрация нового пользователя`);
  console.log(req.body);
  res.json({ message: 'Регистрация' });
});

server.post('/user/login', (req, res) => {
  logger.info(`Вход пользователя`);
  res.json({ message: 'Вход' });
});
server.listen(port, () => {
  logger.info(`Server is started on port ${port}...`);
});
