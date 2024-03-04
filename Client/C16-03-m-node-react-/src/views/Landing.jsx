import TextLanding from "../components/textLanding/TextLanding";
import Logo from "../components/logo/Logo";
import LandingImage from "../components/landingImage/Image";
import Button from "../components/button/button";
import Rating from "../components/rating/Rating";
import InitSesion from "../components/InitSesion/InitSesion";
import { useState } from "react";
import SearchId from "../components/searchId/SearchId";
import useUserConfig from "../hooks/useUserConfig";
import { useNavigate } from "react-router";

import HamburguerMenu from "../components/header/HamburguerMenu";

function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { role, clearConfig } = useUserConfig();

  const handleActive = () => {
    setActive(!active);
  };

  const redirect = () => {
    navigate(`/dashboard-${dashboard}`);
  };

  const dashboard = role === "userBase" ? "admin" : "client";

  return (
    <main className="w-full h-full min-h-[100vh] flex justify-start items-center bg-purple flex-wrap">
      <header className="w-full p-[25px] flex justify-between items-center">
        <Logo />
        <div className=" hidden ms:flex space-x-4">
          {role ? (
            <div className="space-x-4">
              <Button
                cursor="pointer"
                text={"Panel"}
                bgcolor="bg-green"
                onClick={redirect}
              />
              <Button
                cursor="pointer"
                text="Logout"
                bgcolor="bg-green"
                onClick={clearConfig}
              />
            </div>
          ) : (
            <Button
              cursor="pointer"
              text="Clientes"
              bgcolor="bg-green"
              className="bg-green"
              onClick={() => handleActive()}
            />
          )}
        </div>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} ms:hidden absolute h-auto top-0 left-0 right-100  bg-bgDashboard p-4 rounded-[10px] border border-gray-300`}
        >
          {role ? (
            <div className=" flex flex-col gap-4">
              <Button
                cursor="pointer"
                text={"Panel"}
                bgcolor="bg-green"
                onClick={redirect}
              />
              <Button
                cursor="pointer"
                text="Logout"
                bgcolor="bg-green"
                onClick={clearConfig}
              />
            </div>
          ) : (
            <Button
              cursor="pointer"
              text="Clientes"
              bgcolor="bg-green"
              className="bg-green"
              onClick={() => handleActive()}
            />
          )}
        </div>
        <HamburguerMenu onClick={toggleMenu} />
      </header>
      <section className="w-full  ms:flex ms:flex-row flex flex-col p-[25px] gap-2 justify-between items-center ">
        <div className=" p-10 ms:w-3/5 flex justify-center">
          <TextLanding />
        </div>
        <div className=" p-2 ms:w-2/5 flex justify-center">
          <LandingImage />
        </div>
      </section>
      <section className="w-full p-4 ms:pl-12 gap-3 flex items-center justify-center ms:justify-start">
        <SearchId ruta="user" />
      </section>
      <footer className="w-full p-4 ms:pl-12 gap-3 flex items-center justify-center ms:justify-start">
        <Rating />
      </footer>
      {active && <InitSesion handleActive={handleActive} />}
    </main>
  );
}

export default Landing;
