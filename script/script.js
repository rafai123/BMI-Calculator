const weight = document.getElementById("weight");
const height = document.getElementById("height");
const errorWeight = document.getElementById("error-weight");
const errorHeight = document.getElementById("error-height");
const btnCalculate = document.querySelector("button");
const formBMI = document.getElementById("bmiCalculator");
const result = document.querySelector(".result");
// weight.value = 0

weight.addEventListener("input", () => {
  weight.value = parseInt(weight.value);

  if (weight.value > 300) {
    errorWeight.style.backgroundColor = "red";
    errorWeight.innerHTML = `Berat badan yang anda masukkan terlalu besar`;
    weight.style.border = "5px solid red";
    btnCalculate.setAttribute("class", "disabled")
    btnCalculate.setAttribute("disabled", "")
  } else if (weight.value == 0 || weight.value == "") {
    errorWeight.style.backgroundColor = "red";
    weight.style.border = "5px solid red";
    errorWeight.innerHTML = `Angka tidak boleh kosong`;
    btnCalculate.setAttribute("class", "disabled")
    btnCalculate.setAttribute("disabled", "")
  } else {
    weight.style.border = "";
    errorWeight.style.backgroundColor = "";
    errorWeight.innerHTML = ``;
  }
});

height.addEventListener("input", (event) => {
  height.value = parseInt(height.value);
  if (height.value > 250) {
    errorHeight.style.backgroundColor = "red";
    errorHeight.innerHTML = `Tinggi badan yang anda masukkan terlalu besar`;
    height.style.border = "5px solid red";
    btnCalculate.setAttribute("class", "disabled")
    btnCalculate.setAttribute("disabled", "")
  } else if (height.value == 0 || height.value == "") {
    errorHeight.style.backgroundColor = "red";
    height.style.borderColor = "5px solid red";
    errorHeight.innerHTML = `Angka tidak boleh kosong`;
    btnCalculate.setAttribute("class", "disabled")
    btnCalculate.setAttribute("disabled", "")
  } else {
    height.style.border = "";
    errorHeight.style.backgroundColor = "";
    errorHeight.innerHTML = ``;
  }
});

const calculateBMI = (event) => {
  event.preventDefault();
  let BMI = weight.value / (height.value / 100) ** 2;
  BMI = Math.round(BMI * 10) / 10;
  let isNormal = "";
  if (BMI <= 18.5) {
    isNormal = "Underweight";
  } else if (BMI > 18.5 && BMI <= 24.9) {
    isNormal = "Normal Weight";
  } else if (BMI >= 25 && BMI <= 30) {
    isNormal = "Over Weight";
  } else if (BMI > 30) {
    isNormal = "Obesity";
  }

  console.log(Math.round(BMI * 10) / 10);
  result.innerHTML = `Your BMI is <b>${BMI}</b> which means You are <b>${isNormal}<b/>`;
};

btnCalculate.onclick = calculateBMI;
