
import React, { useState } from 'react';
import { categories } from '../data/mockData';

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const showFashionMegaMenu = activeCategory === 'Fashion';

    return (
        <div
            className="bg-white border-b border-gray-200 py-3 relative"
            onMouseLeave={() => setActiveCategory(null)}
        >
            <div className="max-w-[1400px] mx-auto px-4 overflow-x-auto scrollbar-hide">
                <div className="flex justify-between min-w-[800px] md:min-w-0 md:justify-around gap-6 md:gap-4">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 group cursor-pointer min-w-[64px]"
                            onMouseEnter={() => setActiveCategory(cat.name)}
                        >
                            <div className="relative">
                                <img
                                    src={cat.icon}
                                    alt={cat.name}
                                    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <span
                                className={`text-sm font-medium text-center whitespace-nowrap transition-colors ${activeCategory === cat.name ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'
                                    }`}
                            >
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fashion Mega Menu (desktop only) */}
            {showFashionMegaMenu && (
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-2 z-40">
                    <div className="bg-white shadow-xl border border-gray-200 rounded-sm flex min-w-[650px]">
                        {/* Left column */}
                        <div className="w-[260px] border-r border-gray-100 py-3">
                            <div className="px-4 py-2 bg-blue-50 font-medium text-sm text-blue-600">
                                Men's Top Wear
                            </div>
                            <ul className="text-sm text-gray-800">
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Bottom Wear</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Ethnic</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Footwear</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Watches and Accessories</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Women Western</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Bags, Suitcases &amp; Luggage</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Kids</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Essentials</li>
                            </ul>
                        </div>

                        {/* Right column */}
                        <div className="flex-1 py-3">
                            <div className="px-4 py-2 font-medium text-sm text-gray-900 border-b border-gray-100">
                                More in Men's Top Wear
                            </div>
                            <ul className="text-sm text-gray-800 max-h-[320px] overflow-y-auto">
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">All</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's T-Shirts</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Casual Shirts</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Formal Shirts</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Kurtas</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Ethnic Sets</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Blazers</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Raincoat</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Windcheaters</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Suit</li>
                                <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Men's Fabrics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;
