import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { useNavigate } from "react-router-dom";

function SearchId({ ruta }) {
  const navigate = useNavigate();
  const [errorId, setErrorId] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.idNumber.value;
    if (inputValue !== "") {
      navigate(`/dashboard-${ruta}/` + inputValue);
      event.target.idNumber.value = "";
    } else {
      setErrorId(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className=" flex text-black flex flex-wrap gap-2 sm:gap-4 w-full justify-center"
      >
        <TextInput
          placeholdertext={"Ingresa el código de envío"}
          type={"text"}
          name={"idNumber"}
        />
        <button
          className="py-2 px-4 bg-green rounded-[24px] hover:bg-green/80 hover:border-green/80 border-2 "
          type="submit"
        >
          Buscar
        </button>
      </form>
      {errorId && <p className="text-pink ml-11">Campo Obligatorio</p>}
    </div>
  );
}

export default SearchId;
