function converterFahrenheit() {
  var grausFahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  var grausCelsius = parseFloat(document.getElementById("celsius").value);

  grausCelsius = (grausFahrenheit - 32) / 1.8;
  document.getElementById("celsius").value = grausCelsius.toFixed(2);
}

function converterCelsius() {
  var grausFahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  var grausCelsius = parseFloat(document.getElementById("celsius").value);

  grausFahrenheit = grausCelsius * 1.8 + 32;
  document.getElementById("fahrenheit").value = grausFahrenheit.toFixed(2);
}
//Isso é um comentário

//Revisão
//Variáveis, string, console.log, toFixed, operações matemáticas, concatenação

//Desafio 4. Criar um conversor de Fahrenheit para Celsius