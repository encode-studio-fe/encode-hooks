import * as encodeHooks from '..';

describe('encodeHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(encodeHooks).forEach((module) => {
      expect(encodeHooks[module]).toBeDefined();
    });
  });
});
