import React, { useState } from "react";
import ArrowIcon from "./icons/ArrowIcon";

function Navbar() {
  const [openCategory, setOpenCategory] = useState(null);
  const navCatigories = [
    { name: "Groceries", items: ["Fruits & Vegetables", "Dairy", "Bakery"] },
    {
      name: "Premium Fruits",
      items: ["Seasonal Fruits", "Exotic Fruits", "Fresh Juices"],
    },
    { name: "Home & Kitchen", items: ["Cookware", "Decor", "Storage"] },
    { name: "Fashion", items: ["Men", "Women", "Kids"] },
    { name: "Electronics", items: ["Phones", "Laptops", "Accessories"] },
    { name: "Beauty", items: ["Skincare", "Makeup", "Haircare"] },
    { name: "Home Improvement", items: ["Tools", "Lighting", "Hardware"] },
    {
      name: "Sports, Toys & Luggage",
      items: ["Sports", "Toys", "Travel Bags"],
    },
  ];

  return (
    <div className="border-b border-[#EDEDED]">
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-center gap-2 py-4">
          {navCatigories.map((category, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenCategory(category.name)}
              onMouseLeave={() => setOpenCategory(null)}
            >
              <div className="py-2">
                <button
                  className={`navLink ${openCategory === category.name ? "bg-[#008ECC] text-[#ffffff]" : "bg-[#F3F9FB] text-[#000000]"} hover:text-[#ffffff] hover:bg-[#008ECC] text-[14px] font-medium p-1.5 px-6 rounded-full transition-colors duration-300 whitespace-nowrap`}
                >
                  {category.name}
                  <ArrowIcon
                    className="ArrowIcon inline-block ml-2"
                    color={
                      openCategory === category.name ? "#ffffff" : "#000000"
                    }
                  />
                </button>
              </div>

              {openCategory === category.name && (
                <div className="absolute left-0 top-full z-20 mt-0 w-48 rounded-2xl border border-[#EDEDED] bg-white p-2 shadow-lg">
                  {category.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href="#"
                      className="block rounded-xl px-3 py-2 text-sm text-[#333] hover:bg-[#F3F9FB] hover:text-[#008ECC]"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
