
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/mockData';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <div className="bg-gray-100 py-3">
            <div className="relative w-[98%] max-w-[1600px] mx-auto bg-white shadow-sm overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px]">
                {/* Slides */}
                <div
                    className="flex transition-transform duration-500 ease-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {heroSlides.map((slide) => (
                        <div key={slide.id} className="min-w-full h-full relative cursor-pointer">
                            <img
                                src={slide.image}
                                alt={slide.title || "Banner"}
                                className="w-full h-full object-cover object-center"
                            />
                            {/* Optional Text Overlay if needed, usually baked into image for Kart banners, but we can add accessible text */}
                            {/* <div className="absolute top-10 left-10 md:left-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900">{slide.title}</h2>
              </div> */}
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons (Visible on hover usually, but keeping visible for usability) */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white text-gray-800 p-2 md:p-3 rounded-r-lg backdrop-blur-sm transition-all shadow-md z-10"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white text-gray-800 p-2 md:p-3 rounded-l-lg backdrop-blur-sm transition-all shadow-md z-10"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/60 hover:bg-white'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
