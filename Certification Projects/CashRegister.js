const amountInPennies = {  
  'ONE HUNDRED': 10000,
  'TWENTY': 2000,
  'TEN': 1000,
  'FIVE': 500,
  'ONE': 100,
  'QUARTER': 25,
  'DIME': 10,
  'NICKEL': 5,
  'PENNY': 1
}

function checkCashRegister(price, cash, cid) {
  let changeObject = {status: "INSUFFICIENT_FUNDS", change: []}
  let changeDue = cash - price;
  let cidInPennies = cid.map(item => (item[1]*100)).reduce((acc, curr) => acc + curr);

  if (cidInPennies/100 < changeDue) {
    return changeObject

  } else if (cidInPennies/100 == changeDue) {
    changeObject.status = "CLOSED";
    changeObject.change = cid;
    return changeObject

  } else {
    var auxChange = changeDue * 100, auxCid = cid.map(item => ([item[0],item[1]*100])), arrayNotEmpty = false;
    for (let i = cid.length - 1; i >= 0; i--) {
    console.log(amountInPennies[auxCid[i][0]]); 
    console.log(auxChange);
      if (amountInPennies[auxCid[i][0]] = auxChange && auxChange <= cidInPennies){
        let changeValue = (auxChange/auxCid[i][1]) * amountInPennies[auxCid[i][0]];
        changeValue = Math.floor(changeValue.toFixed(2)) * amountInPennies[auxCid[i][0]]/100;
        changeObject.change.push([auxCid[i][0], changeValue])
        arrayNotEmpty = true;
        auxChange -= changeValue * 100;
        changeObject.status = "OPEN";
      }
  }
  if (arrayNotEmpty) {
    console.log(changeObject);
    let changeSum = changeObject.change.map(item => (item[1]*100)).reduce((acc, curr) => acc + curr)/100;
    if (changeSum < changeDue) {
      console.log(changeObject);
      changeObject.status = "INSUFFICIENT_FUNDS";
      changeObject.change = []; 
    } else {
      return changeObject
    }
  }
  console.log(changeObject);
  return changeObject
  }
}


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);