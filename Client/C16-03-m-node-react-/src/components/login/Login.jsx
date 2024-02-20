import React from "react";
import Logo from "../logo/Logo";
import Button from "../button/button";
import TextInput from "../TextInput/TextInput";
import { IoMdArrowBack } from "react-icons/io";

function Login({ onClose }) {
  const handleLogin = () => {
    
  };

  return (
    <div className="relative flex flex-col w-1/3 h-auto bg-white rounded-3xl min-w-[450px]">
      <div className="flex flex-col items-center gap-10 p-4 py-8">
        <Logo />
        <h1 className="text-lg font-bold">Log in</h1>
        <button onClick={onClose} className="py-2 px-4 bg-green rounded">
          <IoMdArrowBack />
        </button>
        <div className="mb-1">
          <TextInput placeholdertext="Ingresa tu correo" type="email" />
        </div>
        <div>
          <TextInput placeholdertext="Ingresa tu contraseña" type="password" />
        </div>
        <Button text="Ingresar" onClick={handleLogin} bgcolor="bg-green" />
      </div>
    </div>
  );
}

export default Login;
