const cashValues = [  
  ['ONE HUNDRED',100],
  ['TWENTY',20],
  ['TEN', 10],
  ['FIVE', 5],
  ['ONE', 1],
  ['QUARTER', 0.25],
  ['DIME', 0.1],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]]

function checkCashRegister(price, cash, cid) {
  let change = {status: null, change: []}
  let changeDue = cash - price;
  let cashInRegister = cid.map(item => (item[1]*100)).reduce((acc, curr) => acc + curr)/100;

  if (cashInRegister < changeDue) {
    change.status = "INSUFFICIENT_FUNDS"
    return change

  } else if (cashInRegister == changeDue) {
    change.status = "CLOSED";
    change.change = cid;
    return change
  }
  return null
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);