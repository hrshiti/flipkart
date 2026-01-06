
import React from 'react';
import { categories } from '../data/mockData';

const Categories = () => {
    return (
        <div className="bg-white border-b border-gray-200 py-3">
            <div className="max-w-[1400px] mx-auto px-4 overflow-x-auto scrollbar-hide">
                <div className="flex justify-between min-w-[800px] md:min-w-0 md:justify-around gap-6 md:gap-4">
                    {categories.map((cat, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer min-w-[64px]">
                            <div className="relative">
                                <img
                                    src={cat.icon}
                                    alt={cat.name}
                                    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Some categories might have dropdown arrows in actual Flipkart, but ignoring for basic visual clone unless specified */}
                            </div>
                            <span className="text-sm font-medium text-gray-800 text-center whitespace-nowrap group-hover:text-blue-600">
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
