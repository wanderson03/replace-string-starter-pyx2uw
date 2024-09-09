// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test string length', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when myString is "Hello World!!!"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('Hello World!!!');

    jest.isolateModules(() => {
      const { myString, newString } = require('./replace-string');
      expect(myString).toBe('Hello World!!!');
      expect(newString).toBe('Hell0 W0rld!!!');
    });
  });
  test('when myString is empty', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('');

    jest.isolateModules(() => {
      const { myString, newString } = require('./replace-string');
      expect(myString).toBe('');
      expect(newString).toBe('');
    });
  });
  test('when myString is "o123"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('o123');

    jest.isolateModules(() => {
      const { myString, newString } = require('./replace-string');
      expect(myString).toBe('o123');
      expect(newString).toBe('0123');
    });
  });
  test('when myString is "oo100oo"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('oo100oo');

    jest.isolateModules(() => {
      const { myString, newString } = require('./replace-string');
      expect(myString).toBe('oo100oo');
      expect(newString).toBe('0010000');
    });
  });
});
