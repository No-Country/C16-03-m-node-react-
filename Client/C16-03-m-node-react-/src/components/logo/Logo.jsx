import logo from "../../assets/logo.png"; // Importar la imagen

const Logo = () => {
  return (
    <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
