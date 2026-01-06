
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { furnitureBestDeals, homeDecor } from '../data/mockData';

const SectionColumn = ({ title, items, hasButton = true }) => {
    return (
        <div className="bg-white p-4 shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-[19px] font-medium text-black">{title}</h3>
                {hasButton && (
                    <button className="bg-[#2874f0] text-white rounded-full p-1 shadow-md hover:shadow-lg transition-all">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                )}
            </div>
            <div className="grid grid-cols-2 gap-4">
                {items.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1 cursor-pointer">
                        <div className="w-full h-[150px] flex items-center justify-center p-2 rounded-sm border border-gray-50 hover:shadow-sm transition-shadow">
                            <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="mt-1">
                            <p className="text-[14px] text-gray-500 font-normal truncate" title={item.name}>{item.name}</p>
                            <p className="text-[16px] text-[#388e3c] font-medium mt-[-2px]">{item.offer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Renaming the component to be Generic but keeping the filename or adding an alias is fine. 
// For now, I'll keep the name `FurnitureDeals` but make it accept props to override default behavior.
// Ideally usage of `FurnitureDeals` would be `<ThreeColumnLayout ... />` but sticking to file name.
const FurnitureDeals = ({
    col1Title = "Best Deals on Furniture",
    col1Items = furnitureBestDeals,
    col2Title = "Home Decor & Furnishing",
    col2Items = homeDecor,
    bannerTitle = "Find furnitures that speak to you",
    bannerDesc = "Discover our Premium Furniture Collection!",
    bannerBtnText = "See Collection",
    bannerBgColor = "bg-[#fdf0e6]",
    bannerTextColor = "text-[#5e3a12]"
}) => {
    return (
        <div className="bg-transparent py-2">
            <div className="max-w-[1600px] mx-auto px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {/* Column 1 */}
                    <SectionColumn
                        title={col1Title}
                        items={col1Items}
                    />

                    {/* Column 2 */}
                    <SectionColumn
                        title={col2Title}
                        items={col2Items}
                    />

                    {/* Column 3: Custom Banner */}
                    <div className={`${bannerBgColor} p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-full relative overflow-hidden group cursor-pointer`}>
                        <div className="relative z-10">
                            <h3 className={`text-[28px] leading-tight font-medium ${bannerTextColor} mb-1`}>
                                {bannerTitle.split(' ').slice(0, 2).join(' ')} <br /> {bannerTitle.split(' ').slice(2).join(' ')}
                            </h3>
                            <p className="text-[15px] opacity-80 mb-6 font-medium" style={{ color: bannerTextColor }}>
                                {bannerDesc}
                            </p>
                        </div>

                        <div className="flex gap-2 items-end mb-16 relative z-10 justify-between">
                            <div className="w-1/3 h-[100px] bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                                <img src="https://picsum.photos/seed/furniture-1/150/100" className="object-contain h-full" alt="Modern sofa" />
                            </div>
                            <div className="w-1/3 h-[120px] bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden mb-[-10px]">
                                <img src="https://picsum.photos/seed/furniture-2/150/120" className="object-contain h-full" alt="Dining table" />
                            </div>
                            <div className="w-1/3 h-[100px] bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                                <img src="https://picsum.photos/seed/furniture-3/150/100" className="object-contain h-full" alt="Armchair" />
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <button className={`bg-[#fae2c5] ${bannerTextColor} text-sm font-bold py-2 px-4 rounded-sm flex items-center gap-1 hover:brightness-95 transition-colors`}>
                                {bannerBtnText} <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FurnitureDeals;
