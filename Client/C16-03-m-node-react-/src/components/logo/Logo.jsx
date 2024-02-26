import logo from "../../assets/logo.png"; // Importar la imagen

const Logo = ({ variant }) => {
  const logoStyle = variant === 'dashboard' ? 'w-72px' : 'w-[72px] h-auto sm:w-[100px] sm:h-[100px]';

  return (
    <div className={logoStyle}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
