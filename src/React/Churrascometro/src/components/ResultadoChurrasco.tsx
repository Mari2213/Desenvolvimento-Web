import { Alimento, nomesAlimentos, quantidadePessoas } from "../types.ts";
import { useLocation, useNavigate } from "react-router-dom";

type ResultadosChurrasco = {
  pessoas: number;
  alimentosSelecionados: Alimento[];
};

const ResultadoChurrasco = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as ResultadosChurrasco;

  const totalPorAlimento = state.alimentosSelecionados.reduce(
    (acc, alimento) => {
      acc[alimento] = (quantidadePessoas[alimento] * state.pessoas) / 1000;
      return acc;
    },
    {} as Record<Alimento, number>,
  );

  const reiniciar = () => {
    navigate("/");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center flex-column text-center w-50 mt-5 p-4 bg-white border rounded">
      <h2 className="fw-bold">Resultado para {state.pessoas} pesssoas</h2>
      <div className="container d-flex justify-content-start flex-column fs-5">
        {state.alimentosSelecionados.map((alimento) => (
          <p key={alimento}>
            {nomesAlimentos[alimento]}: {totalPorAlimento[alimento]} Kg
          </p>
        ))}
      </div>
      <button className="btn btn-primary w-25 fw-bold fs-5" onClick={reiniciar}>
        Reiniciar
      </button>
    </div>
  );
};

export default ResultadoChurrasco;
