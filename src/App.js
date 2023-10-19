import logo from "./logo.svg";
import SocketService from "./socket";
import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(1);
  const socket = new SocketService();

  return (
    <div className="App">
      <button onClick={(e) => setState((s) => s + 1)}>{state}</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
