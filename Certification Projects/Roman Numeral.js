//Made by Victor Alexis
//https://www.freecodecamp.org/VictorAlexisL

function convertToRoman(num) {
  let romanNumeral = [];

  if (num > 3999) {
    return "The highest number in Roman Numerals is 3999, please try another number."
  };

  if (num > 999) {
    do {
      num -= 1000;
      romanNumeral.push("M");
    } while (num > 999) 
  };

  if (num > 899) {
    num -= 900;
    romanNumeral.push("CM");
  };

  if (num > 499) {
    num -= 500;
    romanNumeral.push("D");
  };

  if (num > 399) {
    num -= 400;
    romanNumeral.push("CD");
  };

  while (num > 99) {
  num -= 100;
  romanNumeral.push("C");
  };

  if (num > 89) {
    num -= 90;
    romanNumeral.push("XC");
  };

  if (num > 49) {
    num -= 50;
    romanNumeral.push("L");
  };

  if (num > 39) {
    num -= 40;
    romanNumeral.push("XL");
  };

  while (num > 9) {
    num -= 10;
    romanNumeral.push("X");
  };

   while (num > 99) {
  num -= 100;
  romanNumeral.push("C");
  };

  if (num > 8) {
    num -= 9;
    romanNumeral.push("IX");
  };

  if (num > 4) {
    num -= 5;
    romanNumeral.push("V");
  };

  if (num > 3) {
    num -= 4;
    romanNumeral.push("IV");
  };

  while (num > 0) {
    num -= 1;
    romanNumeral.push("I");
  };

 romanNumeral = romanNumeral.join("");
 console.log(romanNumeral);
 return romanNumeral;
};
