import Link from 'next/link';
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
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
                        MindsSparc
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile menu button (placeholder functionality) */}
                <div className="md:hidden">
                    <button className="p-2 text-gray-600">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
