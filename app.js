const inputValues = { bill: 0, tipPercentage: 0, numberOfPeople };
document.getElementById("bill").addEventListener("input", (e) => {
  updateInputValue(e.target.value, e.target.id);
});
document.getElementById("numberOfPeople").addEventListener("input", (e) => {
  handleError(e.target.value, e.target);
  updateInputValue(e.target.value, e.target.id);
});
const tipOption = document.querySelectorAll(".tip-option");
const customTipItem = document.getElementById("customTipItem");
const customTipInput = document.getElementById("custom-tip-input");

for (let i = 0; i < tipOption.length; i++) {
  tipOption[i].addEventListener("change", function () {
    if (tipOption[i].value === "custom") {
      // hide label
      customTipItem.querySelector("label").classList.add("hidden");
      // add number input
      customTipInput.classList.remove("hidden");
      customTipInput.addEventListener("input", function (e) {
        tipPercentage = e.target.value;
        console.log(e.target.value);
        console.log(tipPercentage, "tipPercentage");
        updateInputValue(e.target.value, "tipPercentage");
      });
    } else {
      customTipItem.querySelector("label").classList.remove("hidden");
      customTipItem
        .querySelector('input[type="number"]')
        .classList.add("hidden");
      updateInputValue(tipOption[i].value, "tipPercentage");
    }
  });
}

const form = document.getElementById("form");
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  form.reset();

  for (const key in inputValues) {
    inputValues[key] = 0;
  }
  console.log(inputValues);
  handleUi();
});
function updateInputValue(enteredValue, elem) {
  inputValues[elem] = Number(enteredValue);
  calculteSplitter(inputValues);
}
function calculteSplitter({ bill, tipPercentage, numberOfPeople }) {
  const tipAmount = (tipPercentage * bill) / (numberOfPeople * 100);
  const total = tipAmount + bill / numberOfPeople;
  handleUi(tipAmount, total);
}

const tipAmountVal = document.getElementById("tipAmount");
const totalVal = document.getElementById("total");
function handleUi(tipAmount = 0, total = 0) {
  if (isFinite(tipAmount) && isFinite(total)) {
    tipAmountVal.textContent = `$ ${tipAmount.toFixed(2)}`;
    totalVal.textContent = `$ ${total.toFixed(2)}`;
  }
}
function handleError(inputValue, elem) {
  const formControl = elem.closest(".form-control");
  const errorElement = formControl.querySelector("#error");
  const inputElement = formControl.querySelector("input");
  if (Number(inputValue) === 0) {
    errorElement.classList.remove("hidden");
    errorElement.textContent = "Can't be zero";
    inputElement.classList.add("invalid-input");
  } else {
    errorElement.classList.add("hidden");
    inputElement.classList.remove("invalid-input");
  }
}
