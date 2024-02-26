import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; // Importar la imagen

const Logo = ({ variant }) => {
  const logoStyle = variant === 'dashboard' ? 'w-72px' : 'w-[72px] h-auto sm:w-[100px] sm:h-[100px]';

  return (
    <div className={logoStyle}>
      <Link to={"/"}><img src={logo} alt="Logo" /></Link>
    </div>
  );
};

export default Logo;
