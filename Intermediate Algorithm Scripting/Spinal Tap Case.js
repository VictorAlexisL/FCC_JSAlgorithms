//Made by Victor Alexis
//https://www.freecodecamp.org/VictorAlexisL

function spinalCase(str) {
  str = str.replace(/\s/gi,"-")
  str = str.replace(/\_/gi,"")
  str = str.split("");
  let strInSpinalCase = [];
  
  for (let letter of str) {
    const upperCaseRegex = /[A-Z]/g;
    if (letter.match(upperCaseRegex)){
      letter = "-" + letter;
    }
    strInSpinalCase.push(letter);
  }

  strInSpinalCase = strInSpinalCase.join("");
  strInSpinalCase = strInSpinalCase.toLowerCase();

  if (strInSpinalCase[0] == "-") {
    strInSpinalCase = strInSpinalCase.slice(1,strInSpinalCase.length);
  }

  console.log(strInSpinalCase);
  return str;
}
