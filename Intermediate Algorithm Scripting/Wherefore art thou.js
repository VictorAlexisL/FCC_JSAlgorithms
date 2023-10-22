//Made by Victor Alexis
//https://www.freecodecamp.org/VictorAlexisL

function whatIsInAName(collection, source) {
  const returnArray = [];
  for(let element of Object.keys(source)) {
    console.log(element);
    console.log(source[element]);

    
    for(let item of collection) {
      console.log(item[element]);
      if(source[element] === item[element]){
        returnArray.push(item);
      }
    }
  }
  console.log(returnArray);
  return returnArray
}
