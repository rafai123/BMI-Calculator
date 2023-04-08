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
  } else if (weight.value == 0 || weight.value == "") {
    errorWeight.style.backgroundColor = "red";
    errorWeight.innerHTML = `Angka tidak boleh kosong`;
  } else {
    errorWeight.style.backgroundColor = "";
    errorWeight.innerHTML = ``;
  }
});

height.addEventListener("input", (event) => {
  height.value = parseInt(height.value);
  if (height.value > 250) {
    errorHeight.style.backgroundColor = "red";
    errorHeight.innerHTML = `Tinggi badan yang anda masukkan terlalu besar`;
  } else if (height.value == 0 || height.value == "") {
    errorHeight.style.backgroundColor = "red";
    errorHeight.innerHTML = `Angka tidak boleh kosong`;
  } else {
    errorHeight.style.backgroundColor = "";
    errorHeight.innerHTML = ``;
  }
});

const calculateBMI = (event) => {
//   event.defaultPrevented();
  let BMI = weight.value / (height.value / 100) ** 2;
  alert(BMI);
};

btnCalculate.onclick = calculateBMI;
