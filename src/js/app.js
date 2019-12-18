/* eslint-disable no-console */
import { Team } from './Team';
import { Character } from './Character';

console.log('app started');

const myTeam = new Team();

const obj1 = new Character({ name: 'Иван', health: '100', level: '80' });
const obj2 = new Character({ name: 'Петр', health: '100', level: '80' });
const obj3 = new Character({ name: 'Сидор', health: '100', level: '80' });
const obj4 = new Character({ name: 'Матфей', health: '100', level: '80' });
const obj5 = new Character({ name: 'Лука', health: '100', level: '80' });
const obj6 = new Character({ name: 'Марк', health: '100', level: '80' });
const obj7 = new Character({ name: 'Иоанн', health: '100', level: '80' });

// add()
myTeam.add(obj1);
myTeam.add(obj2);
myTeam.add(obj3);

console.log(myTeam, myTeam.members.size);
// myTeam.add("Петр");

// addAll()
myTeam.addAll(obj4, obj5, obj6, obj7);
console.log(myTeam);

// toArray()
console.log(myTeam.toArray());

// delete()
myTeam.delete(obj3);
console.log(myTeam);

// throw error
myTeam.add(obj1);
