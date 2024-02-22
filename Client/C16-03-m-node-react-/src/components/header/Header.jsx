import Logo from "../logo/Logo";

function Header() {
  return (
    <div className="flex top-0 w-full bg-Amethyst rounded-lg mb-1 ms:mb-2">
      <div className="min-w-80 max-w-screen-lg justify-start">
        <div className="p-2 ml-2">
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Header;
