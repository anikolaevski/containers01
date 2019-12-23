import { Character } from '../src/js/Character';
import { Team } from '../src/js/Team';

test('Test Team add()', () => {
  const myTeam = new Team();
  const obj = new Character({ name: 'Иван', health: '100', level: '80' });
  myTeam.add(obj);

  const expected = true;
  const result = myTeam.members.has(obj);

  expect(result).toBe(expected);
});

test('Test Team addAll()', () => {
  const myTeam = new Team();
  const obj1 = new Character({ name: 'Иван', health: '100', level: '80' });
  const obj2 = new Character({ name: 'Петр', health: '100', level: '80' });
  myTeam.addAll(obj1, obj2);

  const expected = 2;
  const result = myTeam.members.size;

  expect(result).toBe(expected);
});

test('Test Team toArray()', () => {
  const myTeam = new Team();
  const obj1 = new Character({ name: 'Иван', health: '100', level: '80' });
  const obj2 = new Character({ name: 'Петр', health: '100', level: '80' });
  myTeam.addAll(obj1, obj2);

  const expected = [obj1, obj2];
  const result = myTeam.toArray();

  expect(result).toEqual(expected);
});

test('Test Team delete()', () => {
  const myTeam = new Team();
  const obj1 = new Character({ name: 'Иван', health: '100', level: '80' });
  const obj2 = new Character({ name: 'Петр', health: '100', level: '80' });
  myTeam.addAll(obj1, obj2);
  myTeam.delete(obj2);
  const expected = false;
  const result = myTeam.members.has(obj2);

  expect(result).toBe(expected);
});

test('Test Team delete() non-existing', () => {
  const myTeam = new Team();
  const obj1 = new Character({ name: 'Иван', health: '100', level: '80' });
  const obj2 = new Character({ name: 'Петр', health: '100', level: '80' });
  const obj3 = new Character({ name: 'Сидор', health: '100', level: '80' });
  myTeam.addAll(obj1, obj2);
  myTeam.delete(obj3);
  const expected = 2;
  const result = myTeam.members.size;

  expect(result).toBe(expected);
});

test('Test Throw error on duplicate add', () => {
  function totest() {
    const myTeam = new Team();
    const obj1 = new Character({ name: 'Иван', health: '100', level: '80' });
    myTeam.add(obj1);
    myTeam.add(obj1);
  }
  expect(totest).toThrow();
});

test('Test Throw error on duplicate mass addition', () => {
  function totest() {
    const myTeam = new Team();
    const obj1 = new Character({ name: 'Иван', health: '100', level: '80' });
    myTeam.addAll(obj1, obj1);
  }
  expect(totest).toThrow();
});
