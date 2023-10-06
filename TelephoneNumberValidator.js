let number = "1(55)0)010 0001"
const regex = /[0-9()+-]/gi

function checkForInvalidCharacters(num) {
  for (let i = 0; i < num.length; i++) {
    if (!num[i].match(regex)){
      return false
    } else {
      return true
    }
  }
}

function checkCountryCode(str) {
  if (str[0] == "+") {
    if (str[1] == '1'){
      return true
    } else {
      return false
    }
  } else if (str[0] == '1') {
    return true
  } else {
  return false
  }
}

function checkForValidAreaFormat(str) {
  if (str[0] == '(') {
    if (str[4] != ')') {
      return false
    } else {
      return true
    }
  }
}

function removeParentheses(str) {
  str = str.replace(/[(,)]/g, "");
  return str
} 

function telephoneCheck(str) {
  str = str.replace(/ /g, "")
  console.log()
  if (!checkForInvalidCharacters(str) || !checkCountryCode(str)) {
    return false
  } else {
    str = removeParentheses(str);
    return checkForValidNumberFormat(str)
  }
}

telephoneCheck("555-555-5555");
console.log(telephoneCheck(number));
