import Logo from "../logo/Logo";
import Button from "../button/button";
import TextInput from "../TextInput/TextInput";
import { IoMdArrowBack } from "react-icons/io";
import services from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

function Login({ onClose }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { updateToken,token } = useToken();

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
      localStorage.setItem('token', token);
      updateToken(token);
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
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center gap-10 p-4 py-8"
      >
        <Logo register />
        <h1 className="text-lg font-bold text-green">Log in</h1>
        <button onClick={onClose} className="py-2 px-4 bg-green rounded">
          <IoMdArrowBack />
        </button>
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
        <Button text="Ingresar" bgcolor="bg-green" />
        {error && <p className="text-[#f00]"> {error} </p>}
      </form>
    </div>
  );
}

export default Login;
