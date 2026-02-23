import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-9xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <a href="#" className="text-3xl font-bold ">
                        <span className="text-blue-400">BUILD</span>
                        <span className="text-white"> SPARK</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <a
                                href="#contact"
                                className="bg-blue-400 text-black px-6 py-2.5 rounded-full font-semibold 
                                hover:bg-blue-300 transition-all duration-300 hover:scale-105"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-gray-800">
                    <div className="px-6 pt-4 pb-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-gray-300 hover:text-blue-400 transition-colors font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="block text-center bg-blue-400 text-black px-6 py-2.5 rounded-full 
                            font-semibold hover:bg-blue-300 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
