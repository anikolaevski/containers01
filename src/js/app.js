/* eslint-disable no-console */
// TODO: write code here
import {
  Bowman,
} from './Character';

console.log('app.js bundled');

const obj = new Bowman({ name: 'Лучник', health: 10, level: 80 });
console.log('Oblect created:');
console.table(obj.curProps());

obj.levelUp();
console.log('Oblect levelUp:');
console.table(obj.curProps());

obj.powerMode = true;
console.log('Oblect set powerMode:');
console.table(obj.curProps());

// eslint-disable-next-line no-plusplus
for (let i = 1; i <= 3; i++) {
  obj.doAttack();
}
console.log('Oblect attacks 3 times:');
console.table(obj.curProps());

obj.powerMode = true;
console.log('Oblect set powerMode again:');
console.table(obj.curProps());
