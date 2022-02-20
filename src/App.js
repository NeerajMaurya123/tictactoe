import { useState } from "react";
import "./App.css";
import Grid from "./Grid.js";
function App() {
  const [data, setData] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  const [turn, setTurn] = useState("cross");
  const [winner, setWinner] = useState(undefined);

  const winnerGrid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return (
    <div className="App">
      <Grid
        turn={turn}
        data={data}
        winner={winner}
        setGrid={(index) => {
          if (!data[index] && !winner) {
            const newData = data;
            newData[index] = turn;
            setData([...newData]);
            winnerGrid.forEach((winner) => {
              const [x, y, z] = winner;
              if (data[x] && data[x] === data[y] && data[x] === data[z]) {
                setWinner(true);
              }
            });
            setTurn(turn === "cross" ? "circle" : "cross");
          }
        }}
      />
    </div>
  );
}

export default App;
