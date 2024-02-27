import TextLanding from "../textLanding/TextLanding";
import Logo from "../logo/Logo";
import LandingImage from "../landingImage/Image";
import Rating from "../rating/Rating";
import TextInput from "../TextInput/TextInput";
import Button from "../button/button";

function MainContainer() {
  return (
    <main className="w-full h-full lg:h-screen flex justify-between items-center bg-purple flex-wrap min-w-[360px] flex-1">
      <header className="w-full p-[25px] flex justify-between items-center">
        <Logo />
        <Button text="Clientes" bgcolor="bg-green" />
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
        <TextInput />
        <Button text="buscar" bgcolor="bg-green" />
      </section>
      <footer className="w-full p-[25px] flex justify-end items-center min-w-[360px]">
        <Rating />
      </footer>
    </main>
  );
}

export default MainContainer;
