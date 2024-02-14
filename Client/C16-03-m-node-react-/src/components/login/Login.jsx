import Logo from "../logo/Logo";
import TextInput from '../TextInput/TextInput';
import Button from '../button/button';

function Login() {
  return (
    <>
      <div className="w-80 bg-Amethyst flex flex-col items-center justify-center">
        <div className="p-5">
          <Logo />
        </div>
        <div className="p-5 flex flex-col items-center">
            <h1 className="text-lg font-bold">Log in</h1>
            <br />
            <TextInput placeholdertext="Ingresa tu correo" type="text" />
            <br />
            
            <TextInput placeholdertext="Ingresa tu contraseña" type="password" />
            <br />
            <Button text="Ingresar"/>
        </div>
      </div>
    </>
  );
}

export default Login;
