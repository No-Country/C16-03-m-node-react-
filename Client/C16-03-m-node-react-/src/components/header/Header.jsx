import { useState } from "react";
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
        <div className=" flex items-center p-4 justify-between w-full">
          <Link to="/">
            <Logo variant="dashboard" />
          </Link>
        </div>
        <div className="hidden ms:flex flex-grow items-center justify-center space-x-4">
          <Button text="Nuevo envío" onClick={openModal} />
          <Link to="/">
            <Button text="Volver a inicio" />
          </Link>
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
          <Link to="/">
            <Button text="Volver a inicio" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
