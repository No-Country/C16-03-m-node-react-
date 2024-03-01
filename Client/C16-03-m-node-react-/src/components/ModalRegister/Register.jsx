import { useState } from "react";
import Logo from "../logo/Logo";
import Button from "../button/button";
import TextInput from "../TextInput/TextInput";
import TextLanding from "../textLanding/TextLanding";
import { IoMdArrowBack } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import services from "../../services/api";

function RegistrationModal({ onClose, onBack }) {
  const handleRegister = () => {};
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    text: "",
    error: false,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const target = event.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    try {
      await services.register({ email, password, name });
      setMessage({ text: "Registro exitoso", error: false });
    } catch (error) {
      error
        .json()
        .then((data) => setMessage({ text: data.message, error: true }));
    } finally {
      setLoading(false);
      setMessage({ text: "", error: false });
    }
  };

  return (
    <div className="relative flex flex-col w-1/3 h-auto bg-white rounded-3xl min-w-[360px]">
      <div className="flex flex-col items-center gap-4 p-4 py-8 ">
        <div className="absolute top-0 right-0 mr-4 mt-3 ">
          <button onClick={onClose}>
            <IoCloseCircleOutline className="text-[32px]" />
          </button>
        </div>
        <Logo register />
        <div className="flex flex-col gap-4">
          <TextLanding
            titulo="Registro"
            parrafo="Introduzca sus datos para crear su cuenta"
            textColor="text-black"
            variant="form"
          />

          <form
            action="#"
            onSubmit={onSubmit}
            className="space-y-5 w-full flex flex-col
                  justify-center items-center"
          >
            <TextInput
              placeholdertext={"Ingresa tu nombre"}
              type={"text"}
              name={"name"}
            />
            <TextInput
              placeholdertext={"Ingresa tu email"}
              type={"email"}
              name={"email"}
            />
            <TextInput
              placeholdertext={"Ingresa tu contraseña"}
              type={"password"}
              name={"password"}
            />
            {message.text && (
              <p
                className={`${message.error ? "text-red-500 " : "text-teal-500 "}  pt-2 w-3/4 text-xs`}
              >
                {message.text}
              </p>
            )}

            <div className="flex flex-col items-center">
              <Button
                text={loading ? "Registrando..." : "Registrate"}
                onClick={handleRegister}
                bgcolor="bg-green"
              />
            </div>
          </form>
        </div>

        <button onClick={onBack} className="py-2 px-4 bg-green rounded">
          <IoMdArrowBack />
        </button>
      </div>
    </div>
  );
}

export default RegistrationModal;
