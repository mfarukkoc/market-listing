import React from "react";
import Logo from "@/assets/svg/Logo.svg";
import HeaderShoppingCart from "@/features/Cart/Header/HeaderCart";

function Header() {
  return (
    <header className="z-10 flex h-20 justify-center bg-cyan-600">
      <div className="grid h-full w-full max-w-[1232px] grid-cols-[repeat(2,_1fr)] sm:mx-6 sm:grid-cols-[repeat(3,_1fr)]">
        <div className="hidden sm:block" />
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
