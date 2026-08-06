import React from "react";
import Mobile from './photos/s20.png'
import Cosmetics from './photos/Cosmetics.png'
import Elctronics  from './photos/electronics.png'
import Furniture from './photos/furniture.png'
import Watches from './photos/watches.png'
import Decor from './photos/decor.png'
import Accessories from './photos/accessories.png'

function Categories() {
  const categories = [
    { id: 1, name: "Mobile", image: Mobile },
    { id: 2, name: "Cosmetics", image: Cosmetics },
    { id: 3, name: "Electronics", image: Elctronics },
    { id: 4, name: "Furniture", image: Furniture },
    { id: 5, name: "Watches", image: Watches },
    { id: 6, name: "Decor", image: Decor },
    { id: 7, name: "Accessories", image: Accessories },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      <div className="flex justify-between items-center pb-3 mb-8 border-b border-gray-200">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700">
            Shop From <span className="text-sky-500">Top Categories</span>
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


      <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center group cursor-pointer min-w-25"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1 border-2 border-transparent group-hover:border-sky-500 transition-all duration-300 flex items-center justify-center">

              <div className="w-full h-full bg-[#f6f6f6] rounded-full p-4 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            <span className="mt-3 text-sm font-semibold text-gray-700 group-hover:text-sky-500 transition-colors text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
