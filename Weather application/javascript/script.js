function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusResult = document.getElementById("result");
  
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
  
    if (!isNaN(fahrenheitValue)) {
      const celsiusValue = (fahrenheitValue - 32) * (5 / 9);
      celsiusResult.textContent = `Celsius: ${celsiusValue.toFixed(2)}°C`;
    } else {
      celsiusResult.textContent = "Please enter a valid Fahrenheit value.";
    }
  }
  
  function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitResult = document.getElementById("result");
  
    const celsiusValue = parseFloat(celsiusInput.value);
  
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
      fahrenheitResult.textContent = `Fahrenheit: ${fahrenheitValue.toFixed(2)}°F`;
    } else {
      fahrenheitResult.textContent = "Please enter a valid Celsius value.";
    }
  }
  