'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// ---WILL BE REPLACED LATER --- will use navlinks from the CMS further in. 
const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
];

function Navbar() {
    const pathname = usePathname();
    const [NavOpen, setNavOpen] = useState(false);

    return (
        <header className="relative flex content-center justify-between">
            <div>
                <Link className="flex" href="/">
                    <img className="h-10 w-10 object-contain" src="/logo.webp" alt="Logo" />
                    <span className="font-playfair font-medium text-xl content-center mx-1">
                        Isac Zetterström
                    </span>
                </Link>
            </div>

            {/* Nav for mobile */}
            {NavOpen && (
                <nav>
                    <ul className="absolute top-full right-0 bg-white shadow-md p-2">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                {
                                    <Link href={link.path}>{link.label}</Link>
                                }
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            <button
                className="md:hidden material-icons-outlined"
                onClick={() => setNavOpen(!NavOpen)}
            >
                {NavOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            {/* Nav for desktop */}
            <nav className="hidden md:block content-center justify-center">
                <ul className="flex space-x-6">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            {
                                <Link
                                    className={`font-playfair font-medium text-xl ${pathname === link.path
                                        ? "underline decoration-4 underline-offset-4 font-bold text-blue-900"
                                        : "text-black hover:underline"
                                        }`}
                                    href={link.path}
                                >
                                    {link.label}
                                </Link>
                            }
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;