
import React from 'react';
import { featuredGridItems } from '../data/mockData';

const FeaturedGrid = ({ items = featuredGridItems }) => {
    return (
        <div className="bg-white py-2">
            <div className="max-w-[1600px] mx-auto px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="relative h-[220px] bg-gradient-to-b from-[#e9f4fd] to-[#d6f7f1] border border-[#d6f7f1] rounded-sm p-5 flex items-center justify-between overflow-hidden cursor-pointer hover:shadow-md transition-shadow group"
                        >

                            {/* Decorative background grid/confetti simulation */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none"
                                style={{
                                    backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)',
                                    backgroundSize: '20px 20px'
                                }}
                            ></div>

                            {/* Text Content */}
                            <div className="flex flex-col justify-center z-10 w-[60%] h-full">
                                <span className="text-gray-600 text-base md:text-[15px] font-normal mb-1">
                                    {item.tag}
                                </span>
                                <h3 className="text-gray-900 text-lg md:text-[20px] font-normal leading-tight truncate w-full mb-2" title={item.title}>
                                    {item.title}
                                </h3>
                                <span className="text-black text-xl md:text-[22px] font-bold">
                                    {item.offer}
                                </span>
                            </div>

                            {/* Image Section */}
                            <div className="z-10 w-[140px] h-[140px] flex items-center justify-center bg-transparent group-hover:scale-105 transition-transform duration-300">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedGrid;
