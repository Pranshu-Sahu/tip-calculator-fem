const customTipItem = document.getElementById("customTipItem");
const tipOption = document.querySelectorAll(".tip-option");
const customTipInput = document.getElementById("custom-tip-input");
for (let i = 0; i < tipOption.length; i++) {
  tipOption[i].addEventListener("change", function () {
    
    if (this.value === "custom") {
      // hide label
      customTipItem.querySelector("label").classList.add("hidden");
      // add number input
      customTipInput
        .classList.remove("hidden");
      
    } else {
      customTipItem.querySelector("label").classList.remove("hidden");
      customTipItem
        .querySelector('input[type="number"]')
        .classList.add("hidden");
    }
  });
}
let tipPercentage = 0;

  for (let i = 0; i < tipOption.length; i++) {
    tipOption[i].addEventListener("change", function () {
      if (tipOption[i].value === 'custom') { 
        customTipInput.addEventListener('input', function (e) { 
          tipPercentage = e.target.value;
          console.log(e.target.value)
          console.log(tipPercentage,'tipPercentage')
        })
      }
      else {
        tipPercentage = tipOption[i].value;
      }
      console.log(tipPercentage,' tipPercentage');
    })
  }
let bill = 0;
document.getElementById('bill').addEventListener('input', (e) => {
  bill = e.target.value;
  console.log('bill ',bill);
});
let numberOfPeople = 0;
document.getElementById('numberOfPeople').addEventListener('input', (e) => {
  numberOfPeople = e.target.value;
  console.log('numberOfPeople ',numberOfPeople);;
});
