"use client";

import {
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandTwitter,
    IconMail,
    IconPhoneCall,
    IconMapPin,
} from "@tabler/icons-react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-950 border-t dark:border-gray-800 text-gray-700 dark:text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <a
                        href="#"
                        className="relative z-20 mr-4 flex items-center space-x-2  py-1 text-sm font-normal text-black"
                    >
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={30}
                            height={30}
                        />
                        <span className="font-bold text-xl text-black dark:text-white">EverAfter</span>
                    </a>
                    <p className="mt-2 text-sm">
                        Capturing timeless wedding moments with elegance and authenticity. Let us frame your story.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#services" className="hover:text-pink-500">Services</a></li>
                        <li><a href="#portfolio" className="hover:text-pink-500">Gallery</a></li>
                        <li><a href="#pricing" className="hover:text-pink-500">Pricing</a></li>
                        <li><a href="#testimonials" className="hover:text-pink-500">Testimonials</a></li>
                        <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2"><IconPhoneCall size={16} /> +91 9876543210</li>
                        <li className="flex items-center gap-2"><IconMail size={16} /> hello@everafterstudio.in</li>
                        <li className="flex items-start gap-2">
                            <IconMapPin size={16} />
                            <span>123 Love Street, Wedding Nagar, Mumbai, India</span>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-pink-500"><IconBrandInstagram size={20} /></a>
                        <a href="#" className="hover:text-pink-500"><IconBrandFacebook size={20} /></a>
                        <a href="#" className="hover:text-pink-500"><IconBrandTwitter size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="border-t dark:border-gray-800 text-center text-sm py-4">
                © {new Date().getFullYear()} EverAfter Studio. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
