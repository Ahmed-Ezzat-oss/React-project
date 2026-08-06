import React from "react";
import dailyImg from "./photos/daily-essentials.png";
import vegImg from "./photos/vegetables.png";
import fruitsImg from "./photos/fruits.png";
import strawberryImg from "./photos/strawberry.png";
import mangoImg from "./photos/mango.png";
import cherryImg from "./photos/cherry.png";

function Essentials() {
  const essentials = [
    {
      id: 1,
      name: "Daily Essentials",
      discount: "UP to 50% OFF",
      image: dailyImg,
    },
    { id: 2, name: "Vegitables", discount: "UP to 50% OFF", image: vegImg },
    { id: 3, name: "Fruits", discount: "UP to 50% OFF", image: fruitsImg },
    {
      id: 4,
      name: "Strowberry",
      discount: "UP to 50% OFF",
      image: strawberryImg,
    },
    { id: 5, name: "Mango", discount: "UP to 50% OFF", image: mangoImg },
    { id: 6, name: "Cherry", discount: "UP to 50% OFF", image: cherryImg },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      <div className="flex justify-between items-center pb-3 mb-6 border-b border-gray-200">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700">
            Daily <span className="text-sky-500">Essentials</span>
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {essentials.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="w-full bg-[#f6f6f6] rounded-2xl p-4 aspect-square flex items-center justify-center border border-transparent group-hover:border-sky-400 group-hover:shadow-lg transition-all duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="text-center mt-3">
              <span className="block text-xs font-medium text-gray-500 mb-0.5">
                {item.name}
              </span>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-sky-500 transition-colors">
                {item.discount}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Essentials;
