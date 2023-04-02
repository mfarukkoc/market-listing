import React from "react";
import Logo from "@/assets/svg/Logo.svg";
import HeaderShoppingCart from "@/features/Cart/Header/HeaderCart";

function Header() {
  return (
    <header className="flex h-20 justify-center bg-cyan-600">
      <div className="mx-6 grid h-full w-full max-w-[1232px] grid-cols-[repeat(3,_1fr)]">
        <div />
        <span className="mx-auto flex h-full w-fit items-center text-white ">
          <Logo />
        </span>
        <div className="flex justify-end">
          <HeaderShoppingCart />
        </div>
      </div>
    </header>
  );
}

export default Header;
