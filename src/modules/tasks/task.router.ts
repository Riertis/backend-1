import express from 'express';
import logger from '../../logger/pino.logger';

export const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
  logger.info('Получение задачи');
  console.log(req.query);
  res.json({ message: 'Список задач' });
});

taskRouter.get('/favorites', (req, res) => {
  logger.info(`Получение избранных задач`);
  res.json({ message: 'Избранные задачи' });
});

taskRouter.get('/:id', (req, res) => {
  const id = req.params.id;

  logger.info(`Получение задачи с id=${id}`);
  res.json({ id });
});
