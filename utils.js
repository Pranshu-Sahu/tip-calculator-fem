const tipAmountVal = document.getElementById("tipAmount");
const totalVal = document.getElementById("total");
function calculteSplitter({ bill, tip, numberOfPeople }) {
  const tipAmount = (tip * bill) / (numberOfPeople * 100);
  const total = tipAmount + bill / numberOfPeople;
  displayAmount(tipAmount, total);
}


function displayAmount(tipAmount, total) {
  tipAmountVal.textContent = `$ ${tipAmount}`;
  totalVal.textContent = `$ ${total}`;
}