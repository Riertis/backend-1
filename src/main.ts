import express from 'express';
import { logRoutes } from './bootstrap/log-routes';
import logger from './logger/pino.logger';
import { taskRouter } from './modules/tasks/task.router';
import { userRouter } from './modules/user/user.router';

const server = express();
const port = 2000;
server.use(express.json());

server.use('/tasks', taskRouter);
server.use('/user', userRouter);

server.post('/payload', (req, res) => {
  logger.info(`Выполнен запрос`);

  console.log(req.body);
  res.json({ message: 'реквест выполнен' });
});

logRoutes(server);

server.listen(port, () => {
  logger.info(`Server is started on port ${port}...`);
});
