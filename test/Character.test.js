import {
  Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../src/js/Character';

test('Test Character', () => {
  const sourceData = {
    name: 'Персонаж', health: 10, level: 2,
  };

  const result = new Character(sourceData);

  const expected = {
    name: 'Персонаж',
    health: 10,
    level: 2,
  };

  expect(result).toEqual(expected);
});

test('Test Bowman', () => {
  const sourceData = {
    name: 'Лучник', health: 10, level: 2,
  };

  const result = new Bowman(sourceData);

  const expected = {
    name: 'Лучник',
    health: 10,
    level: 2,
    attack: 25,
    defense: 25,
  };

  expect(result).toEqual(expected);
});

test('Test Swordsman ', () => {
  const sourceData = {
    name: 'Меченосец', health: 10, level: 2,
  };

  const result = new Swordsman(sourceData);

  const expected = {
    name: 'Меченосец',
    health: 10,
    level: 2,
    attack: 40,
    defense: 10,
  };

  expect(result).toEqual(expected);
});

test('Test Magician', () => {
  const sourceData = {
    name: 'Маг', health: 10, level: 2,
  };

  const result = new Magician(sourceData);

  const expected = {
    name: 'Маг',
    health: 10,
    level: 2,
    attack: 10,
    defense: 40,
  };

  expect(result).toEqual(expected);
});

test('Test Undead', () => {
  const sourceData = {
    name: 'Бессмертный', health: 10, level: 2,
  };

  const result = new Undead(sourceData);

  const expected = {
    name: 'Бессмертный',
    health: 10,
    level: 2,
    attack: 25,
    defense: 25,
  };

  expect(result).toEqual(expected);
});

test('Test Zombie', () => {
  const sourceData = {
    name: 'Зомби', health: 10, level: 2,
  };

  const result = new Zombie(sourceData);

  const expected = {
    name: 'Зомби',
    health: 10,
    level: 2,
    attack: 40,
    defense: 10,
  };

  expect(result).toEqual(expected);
});

test('Test Daemon', () => {
  const sourceData = {
    name: 'Демон', health: 10, level: 2,
  };

  const result = new Daemon(sourceData);

  const expected = {
    name: 'Демон',
    health: 10,
    level: 2,
    attack: 10,
    defense: 40,
  };

  expect(result).toEqual(expected);
});
