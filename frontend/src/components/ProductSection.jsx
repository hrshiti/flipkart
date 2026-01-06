
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { smartphoneDeals } from '../data/mockData';

const ProductSection = ({
    title = "Best deals on smartphones",
    items = smartphoneDeals,
    adImage = "https://loremflickr.com/300/450/smartphone,sale"
}) => {
    return (
        <div className="bg-gray-100 py-2">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-3">
                {/* Main Product Deal Section */}
                <div className="bg-white p-4 flex-1 shadow-sm relative">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
                        <button className="bg-[#2874f0] text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Horizontal Scroll Product List */}
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                        {items.map((item, index) => (
                            <div key={index} className="flex-none w-[160px] md:w-[200px] p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow cursor-pointer snap-start flex flex-col items-center text-center group">
                                <div className="h-[150px] md:h-[180px] w-full flex items-center justify-center mb-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-sm font-medium text-gray-800 mb-1">{item.name}</h3>
                                <p className="text-base font-bold text-black">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Ad Card (Visible on larger screens) */}
                <div className="hidden lg:block w-[300px] bg-white shadow-sm p-2 cursor-pointer hover:shadow-md transition-shadow">
                    <img
                        src={adImage}
                        alt="Ad"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
