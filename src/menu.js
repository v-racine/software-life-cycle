function hello(n) {
  return "greetings!\n".repeat(n);
}

function translate(menuItem) {
  if (menuItem === "pain au chocolat") {
    return "chocolate bread";
  } else if (menuItem === "coq au vin") {
    return "chicken in wine";
  }
  return `I'm not familiar with that word, ${menuItem}.`;
}

module.exports = {
  hello: hello,
  translate: translate,
};
