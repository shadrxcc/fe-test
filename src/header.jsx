import { CloseCircle, HambergerMenu } from "iconsax-react";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(true); // Toggle the menu state
    console.log("oopen menu");
  }

  function closeMenu() {
    setMenu(false);
  }

  return (
    <div className="flex items-center relative px-4 sm:px-10 lg:px-60 py-6 justify-between">
      <p className="font-bold text-xl text-lemon">LOGO</p>
      <div
        id="navbar"
        className={`${
          menu ? "#navbar active" : "#navbar"
        } absolute py-5 flex flex-col z-10 top-[-30em] h-fit px-4 justfify-center lg:py-0 lg:px-0 left-0 right-0 bg-lemon sm:bg-inherit w-full sm:w-min sm:relative sm:top-0 sm:flex-row items-center text-sm gap-8`}
      >
        <CloseCircle
          onClick={closeMenu}
          className="flex place-self-end sm:hidden right-5 top-5"
          size="32"
          color="#1a1d1f"
        />
        <p className="cursor-pointer text-dark sm:text-white">Features</p>
        <p className="cursor-pointer">News</p>

        <div className="sm:hidden flex flex-col gap-y-5">
          <button className="py-2.5 px-6 bg-none border border-dark text-dark text-base">
            Sign up
          </button>
          <button className="py-2.5 px-6 text-base bg-dark text-lemon">
            Log in
          </button>
        </div>
      </div>


      <div className="hidden sm:flex items-center leading-[20px] tracking-[-1%] gap-x-4">
        <button className="py-2.5 px-6 bg-none border border-lemon text-lemon text-base">
          Sign up
        </button>
        <button className="py-2.5 px-6 text-base bg-lemon text-dark">
          Log in
        </button>
      </div>

      <div onClick={openMenu} className="sm:hidden">
        <button>
          <HambergerMenu size="32" color="#e1f16b" />
        </button>
      </div>
    </div>
  );
};

export default Header;
