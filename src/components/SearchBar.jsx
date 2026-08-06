import React from "react";
import ChartIcon from "./icons/ChartIcon";
import MegaLogo from "./icons/MegaLogo";
import SearchIcon from "./icons/SearchIcon";
import VmIcon from "./icons/VmIcon";
import UserIcon from "./icons/UserIcon";
import CartIcon from "./icons/CartIcon";
function SearchBar() {
  return (
    <div className="w-full border-b border-[#EDEDED]">
      <div className="container mx-auto">
        <nav className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between py-4 capitalize">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F3F9FB] rounded-md">
              <a href="#" className="text-[#666666] text-[14px]">
                <ChartIcon />
              </a>
            </div>
            <div className="text-left text-[#008ECC] p-1 text-[14px]">
              <MegaLogo />
            </div>
          </div>

          <form className="flex w-full max-w-2xl items-center gap-3 rounded-full border border-gray-300 bg-[#F3F9FB] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F9FB]">
              <SearchIcon />
            </div>
            <input
              className="h-10 flex-1 border-0 bg-[#F3F9FB] px-2 text-[14px] placeholder-[#666666] outline-none"
              placeholder="Search essentials, groceries and more..."
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F9FB]">
              <VmIcon />
            </div>
          </form>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
            <a
              href="#"
              className="flex items-center gap-2 text-[14px] text-[#666666] hover:text-[#008ECC]"
            >
              <UserIcon />
              sign in/sign up
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[14px] text-[#666666] hover:text-[#008ECC]"
            >
              <CartIcon className="inline-block" />
              Cart
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SearchBar;
