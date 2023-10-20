//Made by Victor Alexis
//https://www.freecodecamp.org/VictorAlexisL

function destroyer(arr,...elem) {
  arr = arr.filter(function(element) {return !elem.includes(element)});
  console.log(arr);
  return arr;
};