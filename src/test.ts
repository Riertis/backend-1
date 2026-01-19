import { readFileSync } from 'fs';
// Задание 1
/*
import { readFileSync } from 'fs';
const poem: string = readFileSync('../text.txt', 'utf8');

const rows: string[] = poem.split('\r\n');

for (const row of rows) {
  console.log(`(${row.length}) ${row}`);
}
*/
// Задание 2

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const userList = readFileSync('../user.csv', 'utf8').split('\r\n');

const users: User[] = [];

for (let i = 1; i < userList.length - 1; i++) {
  const [id, name, email, age] = userList[i].split(',');

  users.push({ id: Number(id), name, email, age: Number(age) });
}
console.log(users);
