import React from 'react';
import image1 from './photos/s20.png'
import image2 from './photos/m13.png'
import image3 from './photos/m33.png'
import image4 from './photos/m53.png'
import image5 from './photos/s22.png'




const products = [
  {
    id: 1,
    name: "Galaxy S20 FE 5G",
  
    image: image1, 
    discount: "56% OFF",
    price: "32999",
    originalPrice: "74999",
    saveAmount: "32999",
  },
  {
    id: 2,
    name: "Galaxy M13 (4GB | 64 GB )",
    image: image2,
    discount: "56% OFF",
    price: "10499",
    originalPrice: "14999",
    saveAmount: "4500",

  },
  {
    id: 3,
    name: "Galaxy M33 (4GB | 64 GB )",
    image: image3,
    discount: "56% OFF",
    price: "16999",
    originalPrice: "24999",
    saveAmount: "8000",
  },
  {
    id: 4,
    name: "Galaxy M53 (4GB | 64 GB )",
    image: image4,
    discount: "56% OFF",
    price: "31999",
    originalPrice: "40999",
    saveAmount: "9000",
  },
  {
    id: 5,
    name: "Galaxy S22 Ultra",
    image: image5,
    discount: "56% OFF",
    price: "67999",
    originalPrice: "85999",
    saveAmount: "18000",
  },
];

const SmartPhones = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">

      <div className="flex justify-between items-center pb-3 mb-6 border-b border-gray-200">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700">
            Grab the best deal on <span className="text-sky-500">Smartphones</span>
          </h2>

          <div className="absolute -bottom-3 left-0 w-full h-0.75 bg-sky-500"></div>
        </div>
        
        <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-sky-500">
          View All 
          <span className="ml-1 text-xs"></span>
        </a>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}

            className="relative bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 hover:border-sky-400 hover:shadow-xl hover:scale-[1.02]"

          >

            <div className="relative bg-[#f6f6f6] p-6 flex items-center justify-center h-52">

              <div className="absolute top-0 right-3 bg-[#0096d6] text-white text-[11px] font-bold py-2 px-2 rounded-b-lg text-center leading-tight">
                {product.discount.split(' ')[0]} <br /> {product.discount.split(' ')[1]}
              </div>
              

              <img
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain"
              />
            </div>


            <div className="p-4 bg-white">
              <h3 className="text-sm font-semibold text-gray-800 truncate mb-2">
                {product.name}
              </h3>


              <div className="flex items-center space-x-2 text-sm border-b border-gray-100 pb-3 mb-2">
                <span className="font-bold text-gray-900">₹{product.price}</span>
                <span className="text-gray-400 line-through text-xs">
                  ₹{product.originalPrice}
                </span>
              </div>

              <div className="text-xs font-bold text-emerald-600">
                Save - ₹{product.saveAmount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartPhones;
