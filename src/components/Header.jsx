import React from "react";
import Icon from "./icons/LocationIcon";
import LocationIcon from "./icons/LocationIcon";
import TruckIcon from "./icons/TruckIcon";
import OffersIcon from "./icons/OffersIcon";

function Header() {
  return (
    <div className="bg-[#F5F5F5] container mx-auto ">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:px-3.75 capitalize">
        <p className="text-left relative text-[#666666] w-full sm:w-1/2 p-1 text-[14px]">
          Welcome to worldwide Megamart!
        </p>
        <ul className="flex flex-wrap justify-end items-center gap-2 text-[14px] w-full sm:w-1/2">
          <li className="border-r border-[#D9D9D9] h-3.75 text-center flex items-center justify-center px-3">
            <a href="#" className="text-[#666666] flex items-center gap-2">
              <LocationIcon />
              deliver to <b className="text-[#666666]">423651</b>
            </a>
          </li>
          <li className="border-r border-[#D9D9D9] h-3.75 text-center flex items-center justify-center px-3">
            <a href="#" className="text-[#666666] flex items-center gap-2">
              <TruckIcon />
              track your order
            </a>
          </li>
          <li className="h-3.75 flex items-center justify-center px-3">
            <a href="#" className="text-[#666666] flex items-center gap-2">
              <OffersIcon />
              All Offers
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
