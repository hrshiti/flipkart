
import React, { useState } from 'react';
import { categories, categoryDropdowns } from '../data/mockData';

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(null);



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
            {/* Mega Menu (desktop only) */}
            {activeCategory && categoryDropdowns[activeCategory] && (
                <div className="hidden md:block absolute left-0 right-0 top-full z-40">
                    <div className="bg-white shadow-xl border border-gray-200 mx-auto max-w-[1400px]">
                        <div className="flex p-2">
                            {categoryDropdowns[activeCategory].sections.map((section, idx) => (
                                <div key={idx} className={`w-[260px] py-3 ${idx < categoryDropdowns[activeCategory].sections.length - 1 ? 'border-r border-gray-100' : ''}`}>
                                    <div className="px-4 py-2 font-medium text-sm text-gray-500 mb-1">
                                        {section.heading}
                                    </div>
                                    <ul className="text-sm text-gray-800">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="px-4 py-1.5 hover:bg-gray-50 cursor-pointer hover:font-medium hover:text-blue-600 transition-colors">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;
