
import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const SimpleProductSlider = ({ title, items, bgColor = "bg-white" }) => {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className={`${bgColor} py-2`}>
            <div className="max-w-[1600px] mx-auto px-2 relative group">
                <div className="bg-white p-4 shadow-sm border border-gray-100 mb-2">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-[20px] font-medium text-black">{title}</h2>
                        <button className="bg-[#2874f0] text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all hidden md:block">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide py-2"
                    >
                        {items.map((item, index) => (
                            <div key={index} className="flex-none w-[170px] flex flex-col items-center gap-2 cursor-pointer group/item">
                                <div className="w-[150px] h-[150px] flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover/item:scale-105">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-[14px] font-medium text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-[170px] mb-1" title={item.name}>
                                        {item.name}
                                    </h3>
                                    <p className="text-[14px] font-bold text-black">
                                        {item.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Float Nav Button for larger screens on hover */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg px-3 py-6 rounded-l-md hidden lg:group-hover:block z-10"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SimpleProductSlider;
