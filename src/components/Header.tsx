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
                            href="tel:0549790938"
                            className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-primary font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-md group"
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="group-hover:rotate-12 transition-transform">
                                <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            <span className="hidden sm:inline">054-9790938</span>
                            <span className="sm:hidden text-base">054-9790938</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-12 lg:order-1">
                        <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
                            <Image
                                src="/LOGOCTRN.png"
                                alt="CT RN Logo"
                                width={160}
                                height={50}
                                className="h-10 md:h-12 w-auto object-contain"
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
