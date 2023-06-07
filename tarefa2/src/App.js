import React, { useState, useEffect } from 'react';
import * as C from "./styles";
import GlobalStyle from "./global";

// Tamanho do tabuleiro
const numRows = 10;
const numCols = 10;

// Gera um tabuleiro vazio
const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

function App() {
  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [running, setRunning] = useState(false);

  // Verifica se um índice está dentro dos limites do tabuleiro
  const isIndexValid = (row, col) => {
    return row >= 0 && row < numRows && col >= 0 && col < numCols;
  };

  // Retorna o número de vizinhos vivos para uma célula
  const countLivingNeighbors = (grid, row, col) => {
    const directions = [
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
    ];

    let count = 0;
    for (let i = 0; i < directions.length; i++) {
      const [dirRow, dirCol] = directions[i];
      const newRow = row + dirRow;
      const newCol = col + dirCol;
      if (isIndexValid(newRow, newCol) && grid[newRow][newCol] === 1) {
        count++;
      }
    }
    return count;
  };

  // Executa uma iteração do Jogo da Vida
  const runSimulation = () => {
    setGrid((prevGrid) => {
      return prevGrid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const neighbors = countLivingNeighbors(prevGrid, rowIndex, colIndex);

          if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
            // Regra: qualquer célula viva com menos de dois vizinhos vivos morre de solidão
            // Regra: qualquer célula viva com mais de três vizinhos vivos morre de superpopulação
            return 0;
          } else if (cell === 0 && neighbors === 3) {
            // Regra: qualquer espaço vazio com exatamente três vizinhos vivos se torna uma célula viva
            return 1;
          } else {
            // Regra: qualquer célula viva com dois ou três vizinhos vivos continua viva para a próxima geração
            return cell;
          }
        })
      );
    });
  };

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(runSimulation, 1000);
      return () => clearInterval(intervalId);
    }
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleClear = () => {
    setGrid(generateEmptyGrid());
    setRunning(false);
  };


  return (
    <C.Container>
      <GlobalStyle />
      <h2>Jogo da Vida de Conway</h2>
      <div
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => {
                // Troca o estado da célula entre 0 e 1 ao clicar
                if (!running) {
                  const newGrid = [...grid];
                  newGrid[rowIndex][colIndex] = newGrid[rowIndex][colIndex] ? 0 : 1;
                  setGrid(newGrid);
                }
              }}
              style={{
                width: 20,
                height: 20,
                cursor: 'pointer',
                backgroundColor: grid[rowIndex][colIndex] ? 'green' : 'white',
                border: 'solid 1px black',
              }}
            />
          ))
        )}
      </div>
      <div className="buttons">
        <button onClick={handleStart}><i class="fa-solid fa-play"></i>Iniciar</button><br/>
        <button onClick={handleStop}><i class="fa-solid fa-pause"></i>Pausar</button><br/>
        <button onClick={handleClear}><i class="fa-solid fa-trash"></i>Limpar</button>
      </div>
    </C.Container>
  );
}

export default App;
