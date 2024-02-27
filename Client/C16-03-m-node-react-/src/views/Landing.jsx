import TextLanding from "../components/textLanding/TextLanding";
import Logo from "../components/logo/Logo";
import LandingImage from "../components/landingImage/Image";
import TextInput from "../components/TextInput/TextInput";
import Button from "../components/button/button";
import Rating from "../components/rating/Rating";
import InitSesion from "../components/InitSesion/InitSesion";
import { useState } from "react";
import SearchId from "../components/searchId/SearchId";

function Landing() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <main className="w-full h-full lg:h-[100vh] flex justify-between items-center bg-purple flex-wrap">
      <header className="w-full p-[25px] flex justify-between items-center">
        <Logo />
        <Button
          text="Clientes"
          bgcolor="bg-green"
          onClick={() => handleActive()}
        />
      </header>
      <section className="w-full  sm:flex sm:flex-row flex flex-col p-[25px] gap-2 justify-between items-center ">
        <div className=" p-2 sm:w-1/2 flex justify-center">
          <TextLanding />
        </div>
        <div className=" p-2 sm:w-1/2 flex justify-center">
          <LandingImage />
        </div>
      </section>
      <section className="w-full p-[25px] gap-3 flex  items-center">
        <SearchId ruta="user" />
      </section>
      <footer className="w-full p-[25px] flex justify-start items-center">
        <Rating />
      </footer>
      {active && <InitSesion handleActive={handleActive} />}
    </main>
  );
}

export default Landing;
