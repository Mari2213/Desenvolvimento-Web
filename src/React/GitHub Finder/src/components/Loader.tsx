import { FaSpinner } from "react-icons/fa6";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <FaSpinner className={style.loader} />
    </>
  );
};

export default Loader;
