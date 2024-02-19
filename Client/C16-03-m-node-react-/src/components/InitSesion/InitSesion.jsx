import React, { useState } from "react";
import Button from "../button/button";
import Logo from "../logo/Logo";
import TextLanding from "../textLanding/TextLanding";
import RegistrationModal from "../ModalRegister/Register";
import Login from "../login/Login";

function InitSesion({ handleActive }) {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };
  const handleRegisterClick = () => {
    setShowRegistrationModal(true);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center transition-opacity bg-bgForm">
      {showLoginModal ? (
        <Login onClose={closeLoginModal} />
      ) : showRegistrationModal ? (
        <RegistrationModal onClose={closeRegistrationModal} />
      ) : (
        <div className="relative flex flex-col w-1/3 h-auto bg-white rounded-3xl min-w-[450px]">
          <div className="absolute top-0 right-0 mr-4 mt-2">
            <button onClick={() => handleActive()}>x</button>
          </div>
          <div className="flex flex-col items-center gap-16 p-4 py-8">
            <div>
              <Logo />
            </div>
            <div>
              <TextLanding
                titulo="Paqueteria profesional"
                parrafo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                textColor="text-black"
                variant="form"
              />
            </div>
            <div className="flex flex-col gap-6 items-center">
              <Button
                text="Iniciar Sesion"
                bgcolor="bg-green"
                onClick={handleLoginClick}
              />
              <p className="">
                No tienes cuenta?{" "}
                <a
                  className="font-bold text-green"
                  onClick={handleRegisterClick}
                >
                  Registrate
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InitSesion;