import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertir(valeur, conversion) {
  const input = parseFloat(valeur);
  if (Number.isNaN(input)) return '';
  const output = conversion(input);
  return (Math.round(output * 100) / 100).toString();
}

function TemperatureConvertor() {
  const [temperature, setTemperature] = useState('');
  const [echelle, setEchelle] = useState('c');

  const handleCelsiusChange = (valeur) => {
    setEchelle('c');
    setTemperature(valeur);
  };

  const handleFahrenheitChange = (valeur) => {
    setEchelle('f');
    setTemperature(valeur);
  };

  const celsius = echelle === 'f' ? convertir(temperature, toCelsius) : temperature;
  const fahrenheit = echelle === 'c' ? convertir(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        echelle="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        echelle="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default TemperatureConvertor;