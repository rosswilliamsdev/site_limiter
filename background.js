const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");
const sitesInput = document.getElementById("sites-input");
const numberInput = document.getElementById("number-input");

let limitedSites = [];
const numberOfVisits = numberInput.value;

function handleSaveButtonClick() {
  console.log("Number Input Value:", numberOfVisits);
}
saveBtn.addEventListener("click", handleSaveButtonClick);
