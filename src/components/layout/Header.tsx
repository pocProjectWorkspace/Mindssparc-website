import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/careers' },
];

export function Header() {
    return (
        <header className="fixed w-full bg-primary/95 backdrop-blur-md z-50 border-b border-white/10">
            <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <div className="relative h-8 w-auto aspect-[180/40]">
                            <Image
                                src="/logos/MindsSparc Logo Light.png"
                                alt="MindsSparc"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-white text-primary text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile menu button (placeholder functionality) */}
                <div className="md:hidden">
                    <button className="p-2 text-gray-300 hover:text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
