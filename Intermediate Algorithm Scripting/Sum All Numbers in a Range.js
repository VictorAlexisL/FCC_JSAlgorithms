//Made by Victor Alexis
//https://www.freecodecamp.org/VictorAlexisL

function sumAll(arr) {
  arr.sort(function(a,b) {return a - b});
  let n = arr[1] - arr[0] + 1, a = arr[0] + arr [1];
  return n * a / 2
};