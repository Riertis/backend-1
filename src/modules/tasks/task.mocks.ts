import { fakerRU } from '@faker-js/faker';

type MockTask = {
  id: number;
  executor: string;
  executionDate: string;
  name: string;
  taskText: string;
};

const createMockTask = (): MockTask => ({
  id: fakerRU.number.int({ min: 1, max: 1000 }),
  executor: fakerRU.person.fullName(),
  executionDate: `${fakerRU.date.soon()}`,
  name: fakerRU.lorem.words(2),
  taskText: fakerRU.lorem.paragraph(),
});

export const getMockTask = (count?: number) =>
  count ? Array.from({ length: count }, createMockTask) : createMockTask();
