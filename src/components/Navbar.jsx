import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <header className="sticky py-5 top-0 bg-gray-50 z-50">
      <nav className="flex justify-between items-center">
        <a
          href="#"
          className="font-poppins text-[25px] font-bold text-black cursor-pointer no-underline"
        >
          Firdaus K.
        </a>
        <Dropdown />
      </nav>
    </header>
  );
}

export default Navbar;
