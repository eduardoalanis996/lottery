import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [value, setValue] = useState("");
  const [boards, setBoards] = useState([]);
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setValue(value);
  };

  useEffect(() => {
    const board = JSON.parse(localStorage.getItem("BOARD"));
    if (board) setBoards(board);
  }, []);

  const generateBoard = async () => {
    const response = await fetch(
      `http://localhost:3333/boards/${value}`,
    );
    const BOARD = await response.json();
    localStorage.setItem("BOARD", JSON.stringify(BOARD));
    setBoards(BOARD);
  };
  const deleteBoard = () => {
    localStorage.clear();
    setBoards([]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Escribe el numero de tableros quieres"
          onChange={handleChange}
          value={value}
        />
        <button type="button" onClick={generateBoard}>
          Generar tableros
        </button>
        <button type="button" onClick={deleteBoard}>
          Eliminar tableros
        </button>
      </header>
      <main className="App-main">
        {boards?.map((board) => (
          <Board key={board.id} cards={board.cards} />
        ))}
      </main>
    </div>
  );
}

export default App;
