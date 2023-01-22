const menu = require('./menu');

describe('Given a number argument n', () => {
  describe('When I call hello and pass n in to it', () => {
    test("Then I expect to get 'greetings!' 1 times", () => {
      const result = menu.hello(1);
      expect(result).toBe('greetings!\n');
    });

    test("Then I expect to get 'greeings!' 2 times", () => {
      const result = menu.hello(2);
      expect(result).toBe('greetings!\ngreetings!\n');
    });
  });
});

describe('Given a list of french menu items', () => {
  describe('When I call translate', () => {
    test('Then I expect to get the correct english translation', () => {
      const result = menu.translate('pain au chocolat');
      expect(result).toBe('chocolate bread');
    });
  });
});
