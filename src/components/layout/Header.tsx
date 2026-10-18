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
            { name: 'Our Leadership', href: '/about#leadership' }
        ]
    },
    {
        name: 'What we do',
        dropdown: true,
        groups: [
            {
                label: 'Services',
                items: [
                    { name: 'MindsSparc Secure', href: '/services/secure' },
                    { name: 'MindsSparc Intelligence', href: '/services/intelligence' },
                    { name: 'MindsSparc Talent', href: '/services/recruitment' }
                ]
            },
            {
                label: 'Industries',
                items: [
                    { name: 'Global Capability Centres', href: '/industries/gcc' },
                    { name: 'Healthcare', href: '/industries/healthcare' },
                    { name: 'Manufacturing', href: '/industries/manufacturing' },
                    { name: 'Education', href: '/industries/education' }
                ]
            },
            {
                label: 'Solutions',
                items: [
                    { name: 'Explore our solutions', href: '/solutions' }
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
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    // Flatten grouped items for rendering
    const getDropdownItems = (item: typeof navItems[number]) => {
        if (item.groups) return item.groups;
        if (item.items) return [{ label: null, items: item.items }];
        return [];
    };

    return (
        <header className="absolute w-full z-50">
            <nav
                className="bg-gray-950/95 backdrop-blur-md border-b border-white/10 relative z-50"
                onMouseLeave={() => setHoveredNav(null)}
            >
                <div className="container mx-auto px-4 sm:px-6 h-28 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-40 w-40 shrink-0">
                                <Image
                                    src="/logos/MindsSparc_Logo_Dark.png"
                                    alt="MindsSparc"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">MindsSparc</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 h-full">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative h-full flex items-center"
                                onMouseEnter={() => item.dropdown ? setHoveredNav(item.name) : setHoveredNav(null)}
                                onMouseLeave={() => setHoveredNav(null)}
                            >
                                {item.dropdown ? (
                                    <button
                                        className={`flex items-center gap-1 text-sm font-medium transition-colors ${hoveredNav === item.name ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                                    >
                                        {item.name}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${hoveredNav === item.name ? 'rotate-180' : ''}`} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href || '#'}
                                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {/* Dropdown Panel */}
                                <AnimatePresence>
                                    {item.dropdown && hoveredNav === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.15, ease: 'easeOut' }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                                        >
                                            <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 py-2 min-w-[240px]">
                                                {getDropdownItems(item).map((group, gi) => (
                                                    <div key={gi}>
                                                        {gi > 0 && (
                                                            <div className="mx-4 my-2 border-t border-gray-100" />
                                                        )}
                                                        {group.label && (
                                                            <div className="px-4 pt-2 pb-1">
                                                                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                                                                    {group.label}
                                                                </span>
                                                            </div>
                                                        )}
                                                        {group.items.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors font-medium"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed inset-0 z-40 bg-gray-950 pt-24 px-4 sm:px-6 overflow-y-auto"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                                                className="w-full flex items-center justify-between py-4 border-b border-white/10"
                                            >
                                                <span className="text-lg font-semibold text-white">{item.name}</span>
                                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileExpanded === item.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {mobileExpanded === item.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="py-2 pl-4">
                                                            {getDropdownItems(item).map((group, gi) => (
                                                                <div key={gi}>
                                                                    {group.label && (
                                                                        <div className="pt-3 pb-1">
                                                                            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                                                                                {group.label}
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                    {group.items.map((subItem) => (
                                                                        <Link
                                                                            key={subItem.name}
                                                                            href={subItem.href}
                                                                            onClick={() => setMobileMenuOpen(false)}
                                                                            className="block py-3 text-gray-400 hover:text-teal-400 transition-colors"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href || '#'}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-4 text-lg font-semibold text-white border-b border-white/10"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-6 px-6 py-4 bg-white text-gray-950 text-center font-bold rounded-full"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
