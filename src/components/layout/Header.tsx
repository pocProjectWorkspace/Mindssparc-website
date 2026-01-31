'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

// Navigation Data Structure
const navItems = [
    {
        name: 'Who we are',
        dropdown: true,
        items: [
            { name: 'Vision & Mission', href: '/about' },
            { name: 'Our Team', href: '/about#leadership' }
        ]
    },
    {
        name: 'What we do',
        mega: true,
        columns: [
            {
                title: 'Capabilities',
                items: [
                    { name: 'MindsSparc Secure', href: '/services/secure' },
                    { name: 'MindsSparc Intelligence', href: '/services/intelligence' },
                    { name: 'MindsSparc Talent', href: '/services/recruitment' }
                ]
            },
            {
                title: 'Industries',
                items: [
                    { name: 'Global Capability Centres', href: '/industries/gcc' },
                    { name: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
                    { name: 'Manufacturing', href: '/industries/manufacturing' },
                    { name: 'Education', href: '/industries/education' }
                ]
            }
        ]
    },
    {
        name: 'What we think',
        dropdown: true,
        items: [
            { name: 'Insights', href: '/insights' }
        ]
    },
    { name: 'Careers', href: '/careers' }
];

export function Header() {
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute w-full z-50">
            {/* Main Navbar */}
            <nav
                className="bg-gray-950/95 backdrop-blur-md border-b border-white/10 relative z-50"
                onMouseLeave={() => setHoveredNav(null)}
            >
                <div className="container mx-auto px-6 h-32 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="relative h-28 w-auto aspect-[180/40]">
                                <Image
                                    src="/logos/MindsSparc_Logo_Dark.png"
                                    alt="MindsSparc"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 h-full">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="h-full flex items-center"
                                onMouseEnter={() => item.dropdown || item.mega ? setHoveredNav(item.name) : setHoveredNav(null)}
                            >
                                {item.dropdown || item.mega ? (
                                    <button
                                        className={`flex items-center gap-1 text-sm font-medium transition-colors ${hoveredNav === item.name ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                                    >
                                        {item.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredNav === item.name ? 'rotate-180' : ''}`} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href || '#'}
                                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <Link
                            href="/contact"
                            className="ml-4 px-6 py-3 bg-white text-gray-950 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-300 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mega Menu / Dropdown Content */}
                <AnimatePresence>
                    {hoveredNav && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-full bg-gray-950 border-t border-white/10 shadow-2xl py-12"
                            onMouseEnter={() => setHoveredNav(hoveredNav)}
                            onMouseLeave={() => setHoveredNav(null)}
                        >
                            <div className="container mx-auto px-6">
                                {navItems.map((item) => {
                                    if (item.name !== hoveredNav) return null;

                                    // Render Mega Menu Columns
                                    if (item.mega && item.columns) {
                                        return (
                                            <div key={item.name} className="flex gap-24">
                                                <div className="w-1/4">
                                                    <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm leading-relaxed">
                                                        Explore our capabilities and the industries we serve.
                                                    </p>
                                                </div>
                                                <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-12">
                                                    {item.columns.map((col) => (
                                                        <div key={col.title}>
                                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                                                                {col.title}
                                                            </h4>
                                                            <ul className="space-y-4">
                                                                {col.items.map((subItem) => (
                                                                    <li key={subItem.name}>
                                                                        <Link
                                                                            href={subItem.href}
                                                                            className="text-gray-300 hover:text-blue-400 font-medium transition-colors block py-1"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    }

                                    // Render Simple Dropdown
                                    if (item.dropdown && item.items) {
                                        return (
                                            <div key={item.name} className="flex gap-16">
                                                <div className="w-1/4">
                                                    <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                        {item.name}
                                                    </h3>
                                                </div>
                                                <ul className="space-y-4 min-w-[200px]">
                                                    {item.items.map((subItem) => (
                                                        <li key={subItem.name}>
                                                            <Link
                                                                href={subItem.href}
                                                                className="text-lg text-gray-300 hover:text-blue-400 font-medium transition-colors block"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile Menu Backdrop */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-gray-950 pt-32 px-6 overflow-y-auto">
                    <div className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <div key={item.name} className="border-b border-white/10 pb-4">
                                <div className="text-xl font-bold text-white mb-4">{item.name}</div>
                                {item.items && (
                                    <ul className="pl-4 space-y-3">
                                        {item.items.map(subItem => (
                                            <li key={subItem.name}>
                                                <Link href={subItem.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-400 block py-2">
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {item.columns && item.columns.map(col => (
                                    <div key={col.title} className="pl-4 mb-4">
                                        <h4 className="text-gray-500 text-sm font-bold uppercase mb-2">{col.title}</h4>
                                        <ul className="pl-2 space-y-3">
                                            {col.items.map(subItem => (
                                                <li key={subItem.name}>
                                                    <Link href={subItem.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-400 block py-1">
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                {!item.items && !item.columns && (
                                    <Link href={item.href || '#'} onClick={() => setMobileMenuOpen(false)} className="text-gray-400 block py-2">
                                        Open Link
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
