import React, { useState } from "react";
import Iphoneimg from "./photos/iphonLogo.png";
import Iphone from "./photos/iphon.png";
import Realme from "./photos/Realme.png";
import RealmeL from "./photos/RealmeLogo.png";
import Xiaomi from "./photos/Xiaomi.png";
import MiLogo from "./photos/MiLogo.png";

function Ebreands() {
  const [activeIndex, setActiveIndex] = useState(0);

  const brands = [
    {
      id: 1,
      name: "IPHONE",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      offer: "UP to 80% OFF",
      phoneImage: Iphone,
      bgColor: "bg-[#313131]",
      tagBg: "bg-white/10 text-gray-300",
      isLightText: true,
      type: "apple",
    },
    {
      id: 2,
      name: "REALME",
      logo: RealmeL,
      offer: "UP to 80% OFF",
      phoneImage: Realme,
      bgColor: "bg-[#fff3cc]",
      tagBg: "bg-[#f5e2a3] text-amber-900",
      isLightText: false,
      type: "realme",
    },
    {
      id: 3,
      name: "XIAOMI",
      logo: MiLogo,
      offer: "UP to 80% OFF",
      phoneImage: Xiaomi,
      bgColor: "bg-[#ffedd5]",
      tagBg: "bg-[#fde0c2] text-orange-950",
      isLightText: false,
      type: "xiaomi",
    },
  ];
  const activeBrand = brands[activeIndex];

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      <div className="flex justify-between items-center pb-3 mb-6 border-b border-gray-200">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700">
            Top <span className="text-sky-500">Electronics Brands</span>
          </h2>
          <div className="absolute -bottom-3 left-0 w-full h-0.75 bg-sky-500"></div>
        </div>

        <a
          href="#"
          className="flex items-center text-sm font-medium text-gray-600 hover:text-sky-500 transition-colors"
        >
          View All
          <span className="ml-1 text-xs"></span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            onMouseEnter={() => setActiveIndex(index)}
            className={`relative ${brand.bgColor} rounded-3xl p-7 h-60 flex justify-between items-center overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group`}
            style={{
              transition: "background-color 0.6s ease-in-out",
              backgroundColor:
                brand.id === activeBrand.id ? undefined : undefined,
            }}
          >
            <div className="flex flex-col justify-between h-full z-10 w-1/2">
              <span
                className={`text-[11px] font-bold tracking-widest px-3.5 py-1.5 rounded-lg w-fit uppercase ${brand.tagBg}`}
              >
                {brand.name}
              </span>

              <div>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`h-9 object-contain mb-4 ${brand.id === 1 ? "brightness-0 invert" : ""}`}
                />
                <h3
                  className={`text-2xl font-extrabold tracking-tight ${brand.isLightText ? "text-white" : "text-gray-950"}`}
                >
                  {brand.offer}
                </h3>
              </div>
            </div>

            <div className="h-full flex items-end justify-end z-10 w-1/2 -mb-8 -mr-4">
              <img
                src={brand.phoneImage}
                alt={brand.name}
                className="h-56 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full border border-black/3 pointer-events-none z-0"></div>
            <div className="absolute -right-5 -top-5 w-44 h-44 rounded-full border border-black/5 pointer-events-none z-0"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-10 pb-4">
        {brands.map((brand, index) => (
          <button
            key={brand.id}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-sky-500" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Ebreands;
