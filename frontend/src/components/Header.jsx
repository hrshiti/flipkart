import React from 'react';
import { Search, ShoppingCart, CircleUserRound, Store, MoreVertical, ChevronDown, Menu, Package, Heart, Gift, CreditCard } from 'lucide-react';
import logo from '../assets/flipkartlogo.jpeg';

const Header = () => {
    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
            <div className="max-w-[1600px] mx-auto px-4 lg:px-6 h-[64px] flex items-center justify-between gap-4">
                {/* Logo Section */}
                <div className="flex items-center gap-1 min-w-[120px]">
                    <div className="flex flex-col">
                        <img
                            src={logo}
                            alt="Kart"
                            className="h-14 object-contain min-w-[150px]" // Adjusted to match the "Explore Plus" new logo style
                        />
                    </div>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-[800px] relative">
                    <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <Search className="w-5 h-5" />
                    </button>
                    <input
                        type="text"
                        placeholder="Search for Products, Brands and More"
                        className="w-full bg-[#f0f5ff] text-base text-gray-800 rounded-lg py-2.5 pl-10 pr-4 outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400"
                    />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6 xl:gap-8">

                    {/* Login */}
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-blue-600 hover:text-white px-3 py-2 rounded-lg group relative transition-colors duration-200">
                        <CircleUserRound className="w-5 h-5 group-hover:text-white text-gray-700" />
                        <span className="text-base font-medium group-hover:text-white text-gray-800">Login</span>
                        <ChevronDown className="w-4 h-4 group-hover:text-white text-gray-700 group-hover:rotate-180 transition-transform duration-200" />

                        {/* Login Dropdown */}
                        <div className="absolute top-full left-0 mt-[1px] w-[280px] bg-white rounded shadow-xl border border-gray-100 hidden group-hover:block z-[60] cursor-default">
                            {/* Triangle Tip moved to CSS or simple layout adjustments if needed, usually just absolute positioning works */}

                            <div className="p-4 flex justify-between items-center border-b border-gray-100">
                                <span className="text-sm font-medium text-gray-900">New customer?</span>
                                <span className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">Sign Up</span>
                            </div>

                            <ul className="py-2">
                                <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm font-medium border-b border-gray-50 last:border-0">
                                    <CircleUserRound className="w-4 h-4 text-blue-600" />
                                    <span>My Profile</span>
                                </li>
                                <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm font-medium border-b border-gray-50 last:border-0">
                                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="Plus" className="w-4 h-4 object-contain" />
                                    <span>Kart Plus Zone</span>
                                </li>
                                <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm font-medium border-b border-gray-50 last:border-0">
                                    <Package className="w-4 h-4 text-blue-600" />
                                    <span>Orders</span>
                                </li>
                                <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm font-medium border-b border-gray-50 last:border-0">
                                    <Heart className="w-4 h-4 text-blue-600" />
                                    <span>Wishlist</span>
                                </li>
                                <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm font-medium border-b border-gray-50 last:border-0">
                                    <Gift className="w-4 h-4 text-blue-600" />
                                    <span>Rewards</span>
                                </li>
                                <li className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm font-medium">
                                    <CreditCard className="w-4 h-4 text-blue-600" />
                                    <span>Gift Cards</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Cart */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <ShoppingCart className="w-6 h-6 text-gray-800" />
                        <span className="text-base font-medium text-gray-800 hidden lg:block">Cart</span>
                    </div>

                    {/* Become a Seller */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Store className="w-6 h-6 text-gray-800" />
                        <span className="text-base font-medium text-gray-800 hidden xl:block">Become a Seller</span>
                    </div>

                    {/* More Menu */}
                    <div className="cursor-pointer p-1">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                    </div>
                </div>
            </div>

            {/* Mobile Search Bar (Visible only on small screens) */}
            <div className="md:hidden px-4 pb-3">
                <div className="relative">
                    <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <Search className="w-5 h-5" />
                    </button>
                    <input
                        type="text"
                        placeholder="Search for Products, Brands and More"
                        className="w-full bg-[#f0f5ff] text-base text-gray-800 rounded-lg py-2 pl-10 pr-4 outline-none"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
