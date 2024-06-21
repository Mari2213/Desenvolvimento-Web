import CalculadoraChurrasco from "../components/CalculadoraChurrasco.tsx";
import bgimage from "../assets/img/emerson-vieira-_aR4l6fj6wQ-unsplash.jpg";

const Calculadora = () => {
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
      <h1 className="text-center text-white fw-bold pt-5">
        Calculadora de Churrasco
      </h1>
      <CalculadoraChurrasco />
    </div>
  );
};

export default Calculadora;
