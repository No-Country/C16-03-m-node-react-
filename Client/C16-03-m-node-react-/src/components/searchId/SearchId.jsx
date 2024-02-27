import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { useNavigate } from "react-router-dom";

function SearchId() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [errorId, setErrorId] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.idNumber.value;
    if (inputValue.trim() !== "") {
      navigate("/dashboard-user/" + inputValue);
    } else {
      setErrorId(true);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="space-x-3">
        <TextInput
          placeholdertext={"Ingresa el código de envío"}
          type={"text"}
          name={"idNumber"}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="py-2 px-4 bg-green rounded-[24px]" type="submit">
          Buscar
        </button>
      </form>
      {errorId && <p className="text-pink ml-11">Campo Obligatorio</p>}
    </div>
  );
}

export default SearchId;
