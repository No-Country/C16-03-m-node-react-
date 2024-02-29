import React, { useState } from "react";
import Logo from "../logo/Logo";
import HamburguerMenu from "./HamburguerMenu";
import Button from "../button/button";
import { Link } from "react-router-dom";

function Header({ openModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between w-full h-[104px] bg-bgDashboard rounded-[24px] p-4">
        <Link to="/">
          <Logo />
        </Link>

        <div className="hidden ms:flex flex-grow items-center justify-center space-x-4">
          <Button text="Nuevo envío" onClick={openModal} />
          <Button text="Cancelar envío" />
          <Button text="Botón 3" />
        </div>

        <HamburguerMenu onClick={toggleMenu} />

        <div
          className={`${isMenuOpen ? "block" : "hidden"} ms:hidden absolute  top-full left-0 right-100 bg-bgDashboard p-4 rounded-[24px] border border-gray-300`}
        >
          <Button
            text="Nuevo envío"
            onClick={openModal}
            className="block mb-2"
          />
          <Button text="Cancelar envío" className="block mb-2" />
          <Button text="Botón 3" className="block" />
        </div>
      </div>
    </div>
  );
}

export default Header;
