"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: "/", label: "דף הבית" },
        { href: "/branches", label: "סניפים" },
        { href: "/technology", label: "ציוד וטכנולוגיה" },
        { href: "/blog", label: "מאמרים" },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4 lg:order-2">
                        {/* Mobile Menu Button - Now on the right (first in flex) */}
                        <button
                            className="lg:hidden p-2 text-primary focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <div className="w-8 h-6 relative flex flex-col justify-between overflow-hidden">
                                <span className={`h-1 w-full bg-primary rounded-full transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
                                <span className={`h-1 w-full bg-primary rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 translate-x-10" : ""}`}></span>
                                <span className={`h-1 w-full bg-primary rounded-full transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
                            </div>
                        </button>

                        <a
                            href="https://wa.me/972549790938"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-primary font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-md group"
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="group-hover:scale-110 transition-transform">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L3 21l3.14-1.14C7.81 21.3 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-1c-1.1 0-2-.9-2-2v-1l-4-4c0 3.87 3.13 7 7 7zm5.6-3.2c.26-.81.4-1.67.4-2.3 0-3.87-3.13-7-7-7-1.06 0-2.06.23-2.96.65l1.46 1.46C8.96 5.39 9.46 5.3 10 5.3c3.08 0 5.6 2.34 5.97 5.33l1.63 1.67z"/>
                            </svg>
                            <span className="font-black">הזמן תור</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-12 lg:order-1">
                        <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
                            <Image
                                src="/LOGOCTRN.png"
                                alt="CT RN Logo"
                                width={280}
                                height={90}
                                className="h-14 md:h-20 w-auto object-contain"
                                priority
                            />
                        </Link>

                        <nav className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-bold text-primary hover:text-secondary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/doctors" className="px-6 py-2 bg-secondary/10 border-2 border-secondary text-primary rounded-full text-lg font-black hover:bg-secondary hover:text-white transition-all mr-4">
                                לרופאים
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-3xl font-black text-white hover:text-secondary transition-colors"
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/doctors"
                        className="mt-8 px-10 py-4 bg-secondary text-primary text-2xl font-black rounded-2xl hover:scale-105 transition-transform"
                        onClick={closeMenu}
                    >
                        מתחם רופאים
                    </Link>

                    {/* Social/Contact in menu */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-400 mb-4">צריכים עזרה?</p>
                        <a href="tel:0549790938" className="text-2xl font-bold text-white">054-9790938</a>
                    </div>
                </div>
            </div>
        </>
    );
}
