/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

function covert() {
  let getInput = inputEl.value;

  if (getInput == null || getInput == "") {
    lengthEl.innerHTML = "1 meter = 3.281 feets | 1 feet = 0.304 meters";
    volumeEl.innerHTML = "1 liter = 0.264 gallons | 1 gallons = 3.78 liters";
    massEl.innerHTML = "1 kilo = 2.204 pounds | 1 pound = 0.453 kilos ";
  } else {
    let feet = (getInput * 3.281).toFixed(3);
    let meter = (getInput / 3.281).toFixed(3);
    //volumn (liter/gallon) 1 liter = 0.264 gallon
    let gallon = (getInput * 0.264).toFixed(3);
    let liter = (getInput / 0.264).toFixed(3);
    //mass (kilogram/pound) 1 kilogram = 2.204 pound
    let pound = (getInput * 2.204).toFixed(3);
    let kilogram = (getInput / 2.204).toFixed(3);
    //display result
    lengthEl.innerHTML = `${getInput} meters = ${feet} feet | ${getInput} meters = ${meter} meters `;
    volumeEl.innerHTML = `${getInput} liters = ${gallon} gallons | ${getInput} gallons = ${liter} liters `;
    massEl.innerHTML = `${getInput} kilos = ${pound} pounds | ${getInput} pounds = ${kilogram} kilos `;
    //clear input field
    inputEl.value = "";
  }
  //length (meter/feet)  1 meter = 3.281 feet
}
//call func when button clicked
btnEl.addEventListener("click", covert);
covert();
