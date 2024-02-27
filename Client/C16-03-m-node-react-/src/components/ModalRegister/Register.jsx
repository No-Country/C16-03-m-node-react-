
import Logo from "../logo/Logo";
import Button from "../button/button";
import TextInput from "../TextInput/TextInput";
import TextLanding from "../textLanding/TextLanding";
import { IoMdArrowBack } from "react-icons/io";

function RegistrationModal({ onClose }) {
  const handleRegister = () => {};

  return (
    <div className="relative flex flex-col w-1/3 h-auto bg-white rounded-3xl min-w-[360px]">
      <div className="flex flex-col items-center gap-7 p-4 py-8">
        <Logo />
        <TextLanding
          titulo="Registro"
          parrafo="Introduzca sus datos para crear su cuenta"
          textColor="text-black"
          variant="form"
        />
        <button onClick={onClose} className="py-2 px-4 bg-green rounded">
          <IoMdArrowBack />
        </button>
        <div className="">
          <TextInput placeholdertext={"Ingresa tu nombre"} type={"text"} />
        </div>
        <div className="">
          <TextInput placeholdertext={"Ingresa tu email"} type={"email"} />
        </div>
        <div className="">
          <TextInput
            placeholdertext={"Ingresa tu contraseña"}
            type={"password"}
          />
        </div>
        <Button text="Registrate" onClick={handleRegister} bgcolor="bg-green" />
      </div>
    </div>
  );
}

export default RegistrationModal;
