import Logo from "../logo/Logo";
import Button from "../button/button";
import TextInput from "../TextInput/TextInput";
import { IoMdArrowBack } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import services from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserConfig from "../../hooks/useUserConfig";

function Login({ onClose, onBack }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setConfig } = useUserConfig();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      const res = await services.signIn({ formData });
      setError("");
      const { userRole, token } = res;
      localStorage.setItem("token", token);
      setConfig(token, userRole);
      if (userRole === "userBase") {
        return navigate("/dashboard-admin");
      }
      if (userRole === "user") {
        return navigate("/dashboard-client");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative flex flex-col w-1/3 h-auto bg-white rounded-3xl min-w-[360px]">
      <div className="absolute top-0 right-0 mr-4 mt-3 ">
        <button onClick={onClose}>
          <IoCloseCircleOutline className="text-[32px]" />
        </button>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center gap-4 p-4 py-8"
      >
        <Logo register />
        <h1 className="text-lg font-bold text-green">Log in</h1>

        <div className="mb-1">
          <TextInput
            placeholdertext="Ingresa tu correo"
            type="email"
            name="email"
          />
        </div>
        <div>
          <TextInput
            placeholdertext="Ingresa tu contraseña"
            type="password"
            name="password"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center my-2">
            <Button text="Ingresar" bgcolor="bg-green" />
            {error && <p className="text-red-500"> {error} </p>}
          </div>
          <button onClick={onBack} className="py-2 px-4 bg-green rounded">
            <IoMdArrowBack />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
