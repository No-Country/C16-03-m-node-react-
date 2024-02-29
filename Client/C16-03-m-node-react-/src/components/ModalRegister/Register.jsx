import React, { useState } from "react";
import Logo from "../logo/Logo";
import Button from "../button/button";
import TextInput from "../TextInput/TextInput";
import TextLanding from "../textLanding/TextLanding";
import { IoMdArrowBack } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import services from "../../services/api";

function RegistrationModal({ onClose, onBack }) {
  const handleRegister = () => {};

  const onSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    console.log(name, email, password);
  };

  return (
    <div className="relative flex flex-col w-1/3 h-auto bg-white rounded-3xl min-w-[360px]">
      <div className="flex flex-col items-center gap-4 p-4 py-8">
        <div className="absolute top-0 right-0 mr-4 mt-3 ">
          <button onClick={onClose}>
            <IoCloseCircleOutline className="text-[32px]" />
          </button>
        </div>
        <Logo register />
        <TextLanding
          titulo="Registro"
          parrafo="Introduzca sus datos para crear su cuenta"
          textColor="text-black"
          variant="form"
        />

        <form action="#" onSubmit={onSubmit} className="space-y-5">
          <div className="">
            <TextInput
              placeholdertext={"Ingresa tu nombre"}
              type={"text"}
              name={"name"}
            />
          </div>
          <div className="">
            <TextInput
              placeholdertext={"Ingresa tu email"}
              type={"email"}
              name={"email"}
            />
          </div>
          <div className="">
            <TextInput
              placeholdertext={"Ingresa tu contraseña"}
              type={"password"}
              name={"password"}
            />
          </div>
          <div className="flex flex-col items-center">
            <Button
              text="Registrate"
              onClick={handleRegister}
              bgcolor="bg-green"
            />
          </div>
        </form>

        <button onClick={onBack} className="py-2 px-4 bg-green rounded">
          <IoMdArrowBack />
        </button>
      </div>
    </div>
  );
}

export default RegistrationModal;
