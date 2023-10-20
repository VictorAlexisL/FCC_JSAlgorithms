//Made by Victor Alexis
//https://www.freecodecamp.org/VictorAlexisL

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function correspondingLetter(str) {
  let correspondingLetter = alphabet.indexOf(str) + 13;
  if (correspondingLetter > 25) {
    correspondingLetter -= 26;
  };

  str = alphabet[correspondingLetter]
  return str;
};

const alphabetRegex = /[A-Z]/;

function rot13(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(alphabetRegex)) {
      str[i] = correspondingLetter(str[i]);
    }
  };

  str = str.join("");
  return str;
};