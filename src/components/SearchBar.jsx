import React, { useState } from "react";
import ChartIcon from "./icons/ChartIcon";
import MegaLogo from "./icons/MegaLogo";
import SearchIcon from "./icons/SearchIcon";
import VmIcon from "./icons/VmIcon";
import UserIcon from "./icons/UserIcon";
import CartIcon from "./icons/CartIcon";

function SearchBar({ isMobileNavOpen, onToggleMobileNav }) {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <div className="w-full border-b border-[#EDEDED]">
      <div className="container mx-auto">
        <nav className="flex flex-col gap-4 py-4 capitalize lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onToggleMobileNav}
              className="flex h-12 w-12 items-center justify-center rounded-md bg-[#F3F9FB] lg:hidden"
              aria-label="Toggle categories"
            >
              <ChartIcon />
            </button>
            <div className="text-left text-[#008ECC] p-1 text-[14px]">
              <MegaLogo />
            </div>
          </div>

          <form
            className={`w-full max-w-2xl items-center gap-3 rounded-full border border-gray-300 bg-[#F3F9FB] p-3 ${
              isMobileSearchOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F9FB] lg:hidden"
              aria-label="Close search"
            >
              <SearchIcon />
            </button>

            <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#F3F9FB] lg:flex">
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
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F9FB] lg:hidden"
              aria-label="Toggle search"
            >
              <SearchIcon />
            </button>

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

      {isMobileNavOpen && (
        <div className="border-t border-[#EDEDED] bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="#"
              className="rounded-full bg-[#F3F9FB] px-4 py-2 text-sm text-[#000000]"
            >
              Groceries
            </a>
            <a
              href="#"
              className="rounded-full bg-[#F3F9FB] px-4 py-2 text-sm text-[#000000]"
            >
              Premium Fruits
            </a>
            <a
              href="#"
              className="rounded-full bg-[#F3F9FB] px-4 py-2 text-sm text-[#000000]"
            >
              Home & Kitchen
            </a>
            <a
              href="#"
              className="rounded-full bg-[#F3F9FB] px-4 py-2 text-sm text-[#000000]"
            >
              Fashion
            </a>
            <a
              href="#"
              className="rounded-full bg-[#F3F9FB] px-4 py-2 text-sm text-[#000000]"
            >
              Electronics
            </a>
            <a
              href="#"
              className="rounded-full bg-[#F3F9FB] px-4 py-2 text-sm text-[#000000]"
            >
              Beauty
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
