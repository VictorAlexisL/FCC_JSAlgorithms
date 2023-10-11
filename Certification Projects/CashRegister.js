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
    let auxChange = changeDue.toFixed(2) * 100, auxCid = cid.map(item => ([item[0],(item[1]*100).toFixed(2)]));

    for (let i = cid.length - 1; i >= 0; i--) {
      if (amountInPennies[auxCid[i][0]] <= auxChange) {
        let accumulator = 0;
        while (auxCid[i][1] >= amountInPennies[auxCid[i][0]] && auxChange >= amountInPennies[auxCid[i][0]]) {
          auxCid[i][1] -= amountInPennies[auxCid[i][0]];
          auxChange -= amountInPennies[auxCid[i][0]];
          accumulator += amountInPennies[auxCid[i][0]];
        }
        accumulator /= 100;
        changeObject.change.push([auxCid[i][0], accumulator]);
        changeObject.status = "OPEN";
    } 
  } 
  let changeSum = changeObject.change.map(item => (item[1]*100)).reduce((acc, curr) => acc + curr)/100;
    if (changeSum < changeDue) {
      console.log(changeObject);
      changeObject.status = "INSUFFICIENT_FUNDS";
      changeObject.change = [];
      return changeObject
  }

  console.log(changeObject);
  return changeObject
}
}


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);