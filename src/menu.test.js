const menu = require("./menu");

describe("Given a number argument n", () => {
  describe("When I call hello and pass n in to it", () => {
    test("Then I expect to get 'greetings!' 1 times", () => {
      const result = menu.hello(1);
      expect(result).toBe("greetings!\n");
    });

    test("Then I expect to get 'greeings!' 2 times", () => {
      const result = menu.hello(2);
      expect(result).toBe("greetings!\ngreetings!\n");
    });
  });
});

describe("Given french menu items", () => {
  describe("When I call translate with pain au chocolat", () => {
    test("Then I expect to get the correct english translation", () => {
      const result = menu.translate("pain au chocolat");
      expect(result).toBe("chocolate bread");
    });
  });

  describe("When I call translate with coq au vin", () => {
    test("Then I expect to get the correct english translation", () => {
      const result = menu.translate("coq au vin");
      expect(result).toBe("chicken in wine");
    });
  });

  describe("When I call translate with an unknown word", () => {
    test("Then I expect to get an error message", () => {
      const wordToTranslate = "boullionton";
      const result = menu.translate(wordToTranslate);
      expect(result).toBe(
        `I'm not familiar with that word, ${wordToTranslate}.`
      );
    });
  });
});
