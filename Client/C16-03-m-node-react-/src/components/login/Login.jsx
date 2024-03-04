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
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    try {
      setLoading(true);
      setError("");
      const res = await services.signIn({ formData });
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
      error.json().then((res) => {
        setError(res.message);
      });
    } finally {
      setLoading(false);
      setError("");
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
          {error && <p className="text-red-500 text-xs py-2"> {error} </p>}
          <div className="flex flex-col items-center my-2">
            <Button
              text={loading ? "Cargando..." : "Ingresar"}
              bgcolor="bg-green"
            />
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
