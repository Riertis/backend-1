import { fakerRU } from '@faker-js/faker';

type MockTask = {
  id: number;
  assignee: string;
  estimatedAt: Date;
  title: string;
  description: string;
};

export const getMockTask = (count?: number): MockTask | MockTask[] => {
  const generateMockTask = (): MockTask => ({
    id: fakerRU.number.int({ min: 1, max: 1000 }),
    assignee: fakerRU.person.fullName(),
    estimatedAt: fakerRU.date.soon(),
    title: fakerRU.lorem.words(2),
    description: fakerRU.lorem.paragraph(),
  });
  if (count && count > 1) {
    return Array.from({ length: count }, generateMockTask);
  }
  return generateMockTask();
};
