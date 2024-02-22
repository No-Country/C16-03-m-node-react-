import Logo from "../logo/Logo";

function Header() {

  return (
    <div className="flex top-0 w-full bg-Amethyst">
        <div className="min-w-80 max-w-screen-lg justify-start">
            <Logo />
        </div>
    </div>
  );
}

export default Header;
