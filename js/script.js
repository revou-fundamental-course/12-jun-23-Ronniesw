// Fungsi untuk mengkonversi suhu dari Celsius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Fungsi untuk mengkonversi suhu dari Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Mendapatkan referensi ke elemen formulir dan elemen tabel
const form = document.getElementById("temperatureForm");
const resultTable = document.querySelector("#resultTable tbody");
const exampleTable = document.querySelector("#exampleTable tbody");
const solutionParagraph = document.getElementById("solutionParagraph");

// Menangani pengiriman formulir
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah halaman mengirimkan formulir secara default

  // Mendapatkan nilai suhu dan unit suhu dari formulir
  const temperatureInput = parseFloat(form.temperature.value);
  const unit = form.unit.value;

  // Validasi input suhu
  if (isNaN(temperatureInput)) {
    alert("Masukkan suhu yang valid.");
    return;
  }

  // Mengkonversi suhu sesuai unit yang dipilih
  let result;
  let formula;
  if (unit === "celsius") {
    const fahrenheit = celsiusToFahrenheit(temperatureInput);
    result = fahrenheit.toFixed(2) + " °F";
    formula = "(" + temperatureInput + " °C × 9/5) + 32";
  } else if (unit === "fahrenheit") {
    const celsius = fahrenheitToCelsius(temperatureInput);
    result = celsius.toFixed(2) + " °C";
    formula = "(" + temperatureInput + " °F - 32) × 5/9";
  }

  // Menambahkan hasil konversi ke dalam tabel hasil
  const resultRow = document.createElement("tr");
  const resultFromCell = document.createElement("td");
  const resultFormulaCell = document.createElement("td");
  const resultToCell = document.createElement("td");
  resultFromCell.textContent = temperatureInput + " " + unit.toUpperCase();
  resultFormulaCell.textContent = formula;
  resultToCell.textContent = result;
  resultRow.appendChild(resultFromCell);
  resultRow.appendChild(resultFormulaCell);
  resultRow.appendChild(resultToCell);
  resultTable.appendChild(resultRow);

  // Menambahkan contoh penyelesaian ke dalam tabel contoh
  const exampleRow = document.createElement("tr");
  const exampleUnitCell = document.createElement("td");
  const exampleInputCell = document.createElement("td");
  const exampleFormulaCell = document.createElement("td");
  const exampleResultCell = document.createElement("td");
  exampleUnitCell.textContent = unit.toUpperCase();
  exampleInputCell.textContent = temperatureInput + " " + unit.toUpperCase();
  exampleFormulaCell.textContent = formula;
  exampleResultCell.textContent = result;
  exampleRow.appendChild(exampleUnitCell);
  exampleRow.appendChild(exampleInputCell);
  exampleRow.appendChild(exampleFormulaCell);
  exampleRow.appendChild(exampleResultCell);
  exampleTable.appendChild(exampleRow);

  // Menampilkan penyelesaian sesuai input
  const solution =
    "Penyelesaian: " +
    temperatureInput +
    " " +
    unit.toUpperCase() +
    " = " +
    formula +
    " = " +
    result;
  solutionParagraph.textContent = solution;

  form.reset(); // Mengatur ulang formulir setelah pengiriman
});

// Menambahkan event listener untuk tombol reset
document.getElementById("resetButton").addEventListener("click", function () {
  form.reset();
  resultTable.innerHTML = ""; // Menghapus semua hasil konversi dari tabel
  exampleTable.innerHTML = ""; // Menghapus semua contoh penyelesaian dari tabel
  solutionParagraph.textContent = ""; // Menghapus paragraf penyelesaian
});

// Membalikkan unit suhu saat tombol Reverse diklik
document.getElementById("reverseButton").addEventListener("click", function () {
  const unit = form.unit.value;
  form.unit.value = unit === "celsius" ? "fahrenheit" : "celsius";
});

// Fungsi untuk mengkonversi suhu dari Celsius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Fungsi untuk mengkonversi suhu dari Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Mendapatkan rumus konversi berdasarkan unit suhu
function getConversionFormula(unit) {
  if (unit === "celsius") {
    return "(°C × 9/5) + 32";
  } else if (unit === "fahrenheit") {
    return "(°F - 32) × 5/9";
  }
}

// Mengubah tampilan rumus konversi pada halaman
function updateConversionFormula(unit) {
  const conversionFormula = getConversionFormula(unit);
  const formulaElement = document.getElementById("conversionFormula");
  formulaElement.textContent = conversionFormula;
}

// Mengambil referensi elemen unit suhu
const unitElement = document.getElementById("unit");

// Mengubah tampilan rumus konversi saat halaman dimuat
updateConversionFormula(unitElement.value);

// Mengubah tampilan rumus konversi saat unit suhu berubah
unitElement.addEventListener("change", function () {
  updateConversionFormula(unitElement.value);
});
