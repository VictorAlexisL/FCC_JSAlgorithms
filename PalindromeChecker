//https://www.freecodecamp.org/VictorAlexisL

function palindrome(str) {
  str = str.toLowerCase();
  let alphanumericRegex = /[a-z0-9]/gi;
  str = str.match(alphanumericRegex);
  let strRev = str.toReversed();
  str = str.join("");
  strRev = strRev.join("");
  if (str === strRev) {
    return true
  } else {
    return false
  }
}
