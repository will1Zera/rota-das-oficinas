import React, { useState } from 'react';
import * as C from "./styles";
import GlobalStyle from "./global";


function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Modifica qualquer valor do input para caixa alta
  const handleInputChange = (e) => {
    setInput(e.target.value.toUpperCase());
  };

  const convertToArabic = () => {
    const romanToArabic = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000
    };

    let arabicNumber = 0;
    let i = 0;

    while (i < input.length) {
      const currentSymbol = input[i];
      const nextSymbol = input[i + 1];

      if (nextSymbol && romanToArabic[currentSymbol + nextSymbol]) {
        arabicNumber += romanToArabic[currentSymbol + nextSymbol];
        i += 2;
      } else {
        arabicNumber += romanToArabic[currentSymbol];
        i++;
      }
    }

    setResult(arabicNumber);
  };

  const convertToRoman = () => {
    const arabicToRoman = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    };

    let romanNumber = '';
    let num = parseInt(input, 10);

    for (let i = Object.keys(arabicToRoman).length - 1; i >= 0; i--) {
      const arabic = Object.keys(arabicToRoman)[i];
      const roman = arabicToRoman[arabic];

      while (num >= arabic) {
        romanNumber += roman;
        num -= arabic;
      }
    }

    setResult(romanNumber);
  };

  return (
    <C.Container>
      <GlobalStyle />
      <h2>Conversor de Números</h2>
      <h3>Romanos e Arábicos</h3>
      <input type="text" value={input} onChange={handleInputChange} placeholder="Digite um número ou letra" />
      <button onClick={convertToArabic}><i class="fa-solid fa-right-left"></i>Arábico</button>
      <button onClick={convertToRoman}><i class="fa-solid fa-right-left"></i>Romano</button>
      <p>Resultado: {result}</p>
    </C.Container>
  );
}

export default App;
