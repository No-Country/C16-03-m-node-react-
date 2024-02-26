import TextInput from "../TextInput/TextInput";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";

function SearchId() {
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.idNumber.value;
    navigate("/dashboard-user/" + inputValue);
  };

  return (
    <form onSubmit={onSubmit} className="space-x-3">
      <TextInput
        placeholdertext={"ingresa el codigo de envio"}
        type={"text"}
        name={"idNumber"}
      />
      <button type="submit">buscar</button>
    </form>
  );
}

export default SearchId;
