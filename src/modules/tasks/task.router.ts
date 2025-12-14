import express from 'express';
import logger from '../../logger/pino.logger';
import { getMockTask } from './task.mocks';

export const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
  logger.info('Получение рандомной задачи');
  console.log(req.query);
  const count = Number(req.query.count);
  const result = getMockTask(count);

  res.json(result);
});

// taskRouter.get('/favorites', (req, res) => {
//   logger.info(`Получение избранных задач`);
//   res.json({ message: 'Избранные задачи' });
// });

taskRouter.get('/:id', (req, res) => {
  logger.info(`Получение задачи с id=${req.params.id}`);

  const result = { ...getMockTask(), id: Number(req.params.id) };
  res.json(result);
});

taskRouter.post('/', (req, res) => {
  logger.info(`Создание задачи`);

  const result = {
    ...getMockTask(),
    id: req.body.id,
    executor: req.body.executor,
    executionDate: req.body.executionDate,
    name: req.body.name,
    taskText: req.body.taskText,
  };

  res.json(result);
});
