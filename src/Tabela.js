import "./Tabela.css";

import Titulo from "./Titulo";

function Tabela({ lista }) {
  const somarMedia = (item) => {
    return (item.p1 + item.p2 + item.p3 + item.p4) / 4;
  };

  const somarMediaTotal = (callback) => {
    return lista.reduce((acc, item) => acc + callback(item), 0) / lista.length;
  };

  const tratarNumeros = (numero) => {
    if (isNaN(numero) || !isFinite(numero)) return 0;

    return parseFloat(numero).toFixed(2);
  };

  if (!lista.length)
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );

  return (
    <div>
      <Titulo title={`Tabela de Media de Alunos ${new Date().getFullYear()}`} />
      <table className="tabela table table-primary">
        <thead>
          <tr className="table-info">
            <th>Nome</th>
            <th>Periodo 1</th>
            <th>Periodo 2</th>
            <th>Periodo 3</th>
            <th>Periodo 4</th>
            <th>Media</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
            <tr className="table-secondary">
              <td>{item.nome}</td>
              <td>{tratarNumeros(item.p1)}</td>
              <td>{tratarNumeros(item.p2)}</td>
              <td>{tratarNumeros(item.p3)}</td>
              <td>{tratarNumeros(item.p4)}</td>
              <td>{tratarNumeros(somarMedia(item))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="">
        <span className="display-4">
          Resultado:{" "}
          <span className="display-5 text-primary">
            {tratarNumeros(somarMediaTotal(somarMedia))}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Tabela;
