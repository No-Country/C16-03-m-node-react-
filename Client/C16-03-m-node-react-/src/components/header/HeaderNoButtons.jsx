import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Button from "../button/button";

function HeaderNoButtons() {
  return (
    <div className="flex items-center w-full h-[104px] bg-bgDashboard rounded-[24px] ">
      <div className=" flex items-center p-4 justify-between w-full">
        <Link to="/">
          <Logo variant={"dashboard"} />
        </Link>
        <Link to={"/"}>
          <Button text="Volver a inicio" />
        </Link>
      </div>
    </div>
  );
}

export default HeaderNoButtons;
