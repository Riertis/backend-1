import { fakerRU } from '@faker-js/faker';

type MockUser = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export const getMockUser = (): MockUser => {
  return {
    id: fakerRU.number.int({ min: 1, max: 1000 }),
    name: fakerRU.person.fullName(),
    email: fakerRU.internet.email(),
    password: fakerRU.internet.password(),
  };
};
