function TemperatureInput({ echelle, temperature, onTemperatureChange }) {
  const nomEchelle = echelle === 'c' ? 'Celsius' : 'Fahrenheit';

  return (
    <fieldset>
      <legend>Saisir en {nomEchelle} :</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder={`Température °${echelle.toUpperCase()}`}
      />
    </fieldset>
  );
}

export default TemperatureInput;