import ResultadoChurrasco from "../components/ResultadoChurrasco.tsx";
import bgimage from "../assets/img/emerson-vieira-cpkPJ-U9eUM-unsplash.jpg";
const Resultado = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        height: "100vh",
      }}
    >
      <h1 className="text-center text-white fw-bold pt-5">Resultado</h1>
      <ResultadoChurrasco />
    </div>
  );
};

export default Resultado;
