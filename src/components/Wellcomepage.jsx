import React, { useEffect, useState } from "react";

const transitionClasses = "transition-all duration-700 ease-in-out";
import LeftArrow from "./icons/LeftArrow";
import Maskgroup from "./photos/Maskgroup.png";
import image2 from "./photos/image2.png";
import RightArrow from "./icons/RightArrow";

const slides = [
  {
    title: "SMART WEARABLE.",
    subtitle: "Best Deal Online on smart watches",
    offer: "UP to 80% OFF",
    image: image2,
    overlay: Maskgroup,
    background: "#212844",
  },
  {
    title: "FRESH EVERYDAY.",
    subtitle: "Top grocery deals for your home",
    offer: "Save up to 60%",
    image: image2,
    overlay: Maskgroup,
    background: "#1E5F74",
  },
  {
    title: "TECH FOR LESS.",
    subtitle: "Exciting offers on premium devices",
    offer: "Limited time deals",
    image: image2,
    overlay: Maskgroup,
    background: "#7A3E3E",
  },
];

function Wellcomepage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const changeSlide = (nextIndex, dir) => {
    setDirection(dir);
    setIsAnimating(true);
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((activeIndex + 1) % slides.length, "next");
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  const goToPrev = () => {
    changeSlide((activeIndex - 1 + slides.length) % slides.length, "prev");
  };

  const goToNext = () => {
    changeSlide((activeIndex + 1) % slides.length, "next");
  };

  const slide = slides[activeIndex];

  return (
    <div className="relative container mx-auto">
      <div className="rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 h-22.5 w-22.5 bg-[#ffffff] z-9 justify-center items-center flex align-middle">
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer bg-[#F3F9FB] w-20 h-20 z-10 justify-center items-center flex rounded-full"
        >
          <LeftArrow />
        </button>
      </div>
      <div className="mx-auto mt-50">
        <div
          className={`flex flex-col lg:flex-row h-auto sm:h-96 rounded-3xl overflow-hidden ${transitionClasses}`}
          style={{ backgroundColor: slide.background }}
        >
          <div
            className={`p-8 text-white font-sans max-w-xl w-full lg:w-1/2 flex flex-col justify-center items-center text-center mx-auto lg:items-start lg:text-left ${transitionClasses}`}
            style={{
              transform: isAnimating
                ? direction === "next"
                  ? "translateX(-18px)"
                  : "translateX(18px)"
                : "translateX(0)",
              opacity: isAnimating ? 0.85 : 1,
            }}
          >
            <p
              className={`text-xl font-medium tracking-wide text-gray-200 mb-2 text-center lg:text-left ${transitionClasses}`}
            >
              {slide.subtitle}
            </p>

            <h1
              className={`text-5xl md:text-6xl font-black tracking-wider text-[#ffffff] uppercase leading-tight mb-2 text-center lg:text-left ${transitionClasses}`}
            >
              {slide.title}
            </h1>

            <p
              className={`text-2xl font-bold tracking-wide text-white text-center lg:text-left ${transitionClasses}`}
            >
              {slide.offer}
            </p>
            <ol
              className={`z-10 mt-4 flex flex-row items-center justify-center lg:justify-start gap-4 text-white ${transitionClasses}`}
            >
              <li
                className={`h-3 ${activeIndex === 0 ? "w-5" : "w-3"} rounded-full bg-white`}
              ></li>
              <li
                className={`h-3 ${activeIndex === 1 ? "w-5" : "w-3"} rounded-full bg-white`}
              ></li>
              <li
                className={`h-3 ${activeIndex === 2 ? "w-5" : "w-3"} rounded-full bg-white`}
              ></li>
              <li className="h-3 w-3 rounded-full bg-white"></li>
            </ol>
          </div>
          <div
            className={`w-full lg:w-1/2 flex justify-center items-center relative ${transitionClasses}`}
            style={{
              transform: isAnimating
                ? direction === "next"
                  ? "translateX(18px)"
                  : "translateX(-18px)"
                : "translateX(0)",
              opacity: isAnimating ? 0.9 : 1,
            }}
          >
            <img
              src={slide.image}
              alt="image"
              className={`absolute h-full w-full object-contain scale-95 z-2 opacity-90 ${transitionClasses}`}
            />
            <img
              src={slide.overlay}
              alt="Mask group"
              className={`h-full absolute ${transitionClasses}`}
              style={{
                opacity: activeIndex === 0 ? 1 : 0,
                pointerEvents: activeIndex === 0 ? "auto" : "none",
              }}
            />
          </div>
        </div>
      </div>
      <div className="rounded-full absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 h-22.5 w-22.5 bg-[#ffffff] z-9 justify-center items-center flex">
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer bg-[#F3F9FB] w-20 h-20 z-10 justify-center items-center flex rounded-full"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
}

export default Wellcomepage;
