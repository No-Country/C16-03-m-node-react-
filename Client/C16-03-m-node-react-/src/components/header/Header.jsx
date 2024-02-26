import Logo from "../logo/Logo";
import HamburguerMenu from "./HamburguerMenu";
import Button from "../button/button";
function Header() {
  return (
    <div className="flex items-center w-full h-[104px] bg-bgDashboard rounded-[24px] ">
      <div className="min-w-80 max-w-screen-lg  w-full">
        <div className=" flex items-center p-4 justify-between w-full">
          <Logo />

          <Button text="Botón 1" className="hidden ms:block" />
          <Button text="Botón 1" className="hidden ms:block" />
          <Button text="Botón 1" className="hidden ms:block" />

          <HamburguerMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
