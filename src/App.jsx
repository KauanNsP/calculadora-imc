import { useState } from 'react'
import './App.css'

function App() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);

    const calcularIMC = () => {
      const alturaEmMetros = altura / 100; 
      const resultadoImc = peso / (alturaEmMetros * alturaMetros);
      setIMC(resultadoImc.toFixed(2));
    };

    const grauDoImc = () => {
      if (imc === null) return '';

      if (imc < 18.5) return 'Abaixo do peso';
      if (imc < 24.9) return 'Peso normal';
      if (imc < 29.9) return 'Sobrepeso';
      if (imc < 34.9) return 'Obesidade grau 1';
      if (imc < 39.9) return 'Obesidade grau 2';
      return 'Obesidade grau 3';
    };

    return (
      <div className="App">
        <img className='icon-imc' src="https://pt.calcuworld.com/wp-content/uploads/sites/6/2019/07/imc-.png" alt="." />
        <h1>Calculadora de IMC</h1>
        <div>
          <label>Altura (cm):</label>
          <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        {imc && (
          <div>
            <h2>Seu IMC é: {imc}</h2>
            <p>Sua classificação: {grauDoImc()}</p>
          </div>
        )}
      </div>
    );
  }

export default App;