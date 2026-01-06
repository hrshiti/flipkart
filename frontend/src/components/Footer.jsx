
import React from 'react';
import { Store, Star, Gift, HelpCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#172337] text-white mt-4 border-t border-gray-200 text-[12px]">
            <div className="max-w-[1600px] mx-auto p-10 pb-5">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
                    {/* Left Section: Links */}
                    <div className="flex flex-1 gap-12 overflow-x-auto">
                        <div className="flex flex-col gap-2 min-w-[100px]">
                            <h4 className="text-[#878787] text-[12px] font-normal mb-1">ABOUT</h4>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Contact Us</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">About Us</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Careers</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Kart Stories</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Press</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Corporate Information</a>
                        </div>
                        <div className="flex flex-col gap-2 min-w-[100px]">
                            <h4 className="text-[#878787] text-[12px] font-normal mb-1">GROUP COMPANIES</h4>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Myntra</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Cleartrip</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Shopsy</a>
                        </div>
                        <div className="flex flex-col gap-2 min-w-[100px]">
                            <h4 className="text-[#878787] text-[12px] font-normal mb-1">HELP</h4>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Payments</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Shipping</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Cancellation & Returns</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">FAQ</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Report Infringement</a>
                        </div>
                        <div className="flex flex-col gap-2 min-w-[100px]">
                            <h4 className="text-[#878787] text-[12px] font-normal mb-1">CONSUMER POLICY</h4>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Cancellation & Returns</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Terms Of Use</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Security</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Privacy</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Sitemap</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">Grievance Redressal</a>
                            <a href="#" className="hover:underline text-white font-medium text-[12px]">EPR Compliance</a>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-[1px] bg-[#454d5e] h-[150px]"></div>

                    {/* Right Section: Address */}
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 flex-1">
                        <div className="flex flex-col gap-2 flex-1">
                            <h4 className="text-[#878787] text-[12px] font-normal mb-1">Mail Us:</h4>
                            <p className="text-[12px] leading-relaxed">
                                Kart Internet Private Limited,<br />
                                Buildings Alyssa, Begonia &<br />
                                Clove Embassy Tech Village,<br />
                                Outer Ring Road, Devarabeesanahalli Village,<br />
                                Bengaluru, 560103,<br />
                                Karnataka, India
                            </p>

                            <div className="mt-4">
                                <h4 className="text-[#878787] text-[12px] font-normal mb-2">Social:</h4>
                                <div className="flex gap-4">
                                    {/* Generic SVG Icons for Social Media */}
                                    <svg className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                    <svg className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    <svg className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <h4 className="text-[#878787] text-[12px] font-normal mb-1">Registered Office Address:</h4>
                            <p className="text-[12px] leading-relaxed">
                                Kart Internet Private Limited,<br />
                                Buildings Alyssa, Begonia &<br />
                                Clove Embassy Tech Village,<br />
                                Outer Ring Road, Devarabeesanahalli Village,<br />
                                Bengaluru, 560103,<br />
                                Karnataka, India<br />
                                CIN : U51109KA2012PTC066107<br />
                                Telephone: <span className="text-blue-500 font-medium">044-45614700</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#454d5e] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                        <div className="flex items-center gap-2">
                            <Store className="w-3.5 h-3.5 text-[#ffc200]" />
                            <span className="text-white hover:underline cursor-pointer">Become a Seller</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 text-[#ffc200]" />
                            <span className="text-white hover:underline cursor-pointer">Advertise</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Gift className="w-3.5 h-3.5 text-[#ffc200]" />
                            <span className="text-white hover:underline cursor-pointer">Gift Cards</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HelpCircle className="w-3.5 h-3.5 text-[#ffc200]" />
                            <span className="text-white hover:underline cursor-pointer">Help Center</span>
                        </div>
                        <span className="text-white">© 2007-2024 Kart.com</span>
                    </div>

                    <div className="flex items-center">
                        <img
                            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
                            alt="Payment Methods"
                            className="h-4 sm:h-6 object-contain"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
