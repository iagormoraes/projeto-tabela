import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import response from "./response.json";

import Tabela from "./Tabela";
import Titulo from "./Titulo";

function App() {
  const [lista, setList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setList(response);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <Titulo title="Escola Rogacionista" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Tabela lista={lista} />
          </div>
          <div className="col-12 col-md-6">
            <Tabela lista={lista} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
