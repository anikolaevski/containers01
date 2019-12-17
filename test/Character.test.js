import {
  Character,
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
