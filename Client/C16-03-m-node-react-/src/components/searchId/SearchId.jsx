import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { useNavigate } from "react-router-dom";

function SearchId() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      navigate("/dashboard-user/" + inputValue);
    } else {
      // Aquí puedes agregar lógica para manejar el caso en que el campo esté vacío
      alert("ERROR");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="space-x-3">
      <TextInput
        placeholdertext={"Ingresa el código de envío"}
        type={"text"}
        name={"idNumber"}
        value={inputValue}
        onChange={handleChange}
      />
      <button className="py-2 px-4 bg-green rounded-[24px]" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchId;
