//Made by Victor Alexis
//https://www.freecodecamp.org/VictorAlexisL

function diffArray(arr1, arr2) {
  const diff1 = arr1.filter(function(element) {return !arr2.includes(element)});
  const diff2 = arr2.filter(function(element) {return !arr1.includes(element)});
  const newArr = diff1.concat(diff2);
  console.log(newArr);
  return newArr;
};