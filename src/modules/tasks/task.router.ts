import express from 'express';
import logger from '../../logger/pino.logger';
import { getMockTask } from './task.mocks';

export const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
  logger.info('Получение задачи');
  console.log(req.query);
  const count = Number(req.query.count);
  const result = getMockTask(count);

  res.json(result);
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
