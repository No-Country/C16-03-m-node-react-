import { Link } from "react-router-dom";
import logo from "../../assets/logo-landing.svg";
import registerLogo from "../../assets/logo-modal.svg";


const Logo = ({ variant, register = false }) => {
  const logoStyle =
    variant === "dashboard"
      ? "w-72px"
      : "w-[72px] h-auto sm:w-[100px] sm:h-[100px]";
  
  const logoToUse = register ? registerLogo : logo;

  return (
    <div className={logoStyle}>
      <img src={logoToUse} alt="Logo" />
    </div>
  );
};

export default Logo;
