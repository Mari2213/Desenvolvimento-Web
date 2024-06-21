import { useNavigate } from "react-router-dom";
import { nomesAlimentos } from "../types.ts";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const esquemaValidacao = Yup.object().shape({
  pessoas: Yup.number()
    .required("Campo obrigatório")
    .min(1, "Mínimo de 1 pessoa"),
  selecaoAlimentos: Yup.array()
    .of(Yup.string())
    .test(
      "check-selecaoAlimentos",
      "Selecione pelo menos um alimento",
      (array) => array !== null && array!.length > 0,
    ),
});

const CalculadoraChurrasco = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex align-items-center justify-content-center bg-white text-center w-auto border rounded">
      <Formik
        initialValues={{ pessoas: 0, selecaoAlimentos: [] }}
        validationSchema={esquemaValidacao}
        onSubmit={(values) => {
          navigate("/resultado", {
            state: {
              pessoas: values.pessoas,
              alimentosSelecionados: values.selecaoAlimentos,
            },
          });
        }}
      >
        {({ errors, touched }) => (
          <Form className="container p-3">
            <div className="container w-50 mb-3">
              <label className="fs-3 form-label mx-4" htmlFor="pessoas">
                Número de pessoas:
              </label>
              <Field
                className="rounded border pb-1"
                name="pessoas"
                type="number"
              />
              {errors.pessoas && touched.pessoas ? (
                <p className="alert alert-danger mt-3">{errors.pessoas}</p>
              ) : null}
            </div>
            <h2>Selecione os alimentos para o churrasco:</h2>
            {Object.keys(nomesAlimentos).map((alimento) => (
              <div className="container d-flex align-items-center justify-content-center">
                <div className="container w-25 d-flex justify-content-start">
                  <Field
                    name="selecaoAlimentos"
                    type="checkbox"
                    value={alimento}
                    className="form-check"
                  />
                  <label
                    htmlFor="selecaoAlimentos"
                    className="form-label px-2 pt-2 fs-5"
                  >
                    {nomesAlimentos[alimento]}
                  </label>
                </div>
              </div>
            ))}
            {errors.selecaoAlimentos ? (
              <p className="alert alert-danger mt-3">
                {errors.selecaoAlimentos}
              </p>
            ) : null}
            <button
              className="btn btn-success mt-3 w-50 fw-bold fs-5"
              type="submit"
            >
              Calcular
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CalculadoraChurrasco;
