import Link from 'next/link';

const footerLinks = {
    Services: [
        { name: 'Secure', href: '/services/secure' },
        { name: 'Intelligence', href: '/services/intelligence' },
        { name: 'Recruitment', href: '/services/recruitment' },
        { name: 'All Services', href: '/services' }
    ],
    Industries: [
        { name: 'Financial Services', href: '/industries' },
        { name: 'Healthcare', href: '/industries' },
        { name: 'Technology', href: '/industries' },
        { name: 'Public Sector', href: '/industries' }
    ],
    Company: [
        { name: 'About Us', href: '/' },
        { name: 'Careers', href: '/careers' },
        { name: 'Insights', href: '/insights' },
        { name: 'Contact', href: '/contact' }
    ],
    Legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/privacy' }
    ]
};

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight mb-6 block">
                            mindssparc
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Empowering enterprises with strategic insights and digital innovation.
                            We help leaders navigate complexity and build the future.
                        </p>
                    </div>

                    {Object.entries(footerLinks).slice(0, 3).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-semibold mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Mindssparc Consulting. All rights reserved.</p>
                    <div className="flex gap-6">
                        {footerLinks.Legal.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
