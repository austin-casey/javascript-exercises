const convertToCelsius = function(farenheitTemp) {
  let f2cTemp = (farenheitTemp - 32) * 5/9;
  let f2cTempRounded = Math.round(f2cTemp * 10) / 10;
  return f2cTempRounded;
};

const convertToFahrenheit = function(celsiusTemp) {
  let c2fTemp = ((celsiusTemp * 9/5) + 32);
  let c2fTempRounded =  Math.round(c2fTemp * 10) / 10;
  return c2fTempRounded;
};

console.log(convertToCelsius(6))
console.log(convertToFahrenheit(1))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// (32°F − 32) × 5/9 = 0°C

// (0°C × 9/5) + 32 = 32°F
