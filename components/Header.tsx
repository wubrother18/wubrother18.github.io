"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold gradient-text">WakuWaku Lab</Link>
        <nav className="hidden md:flex gap-6">
          {nav.map(item => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative transition-colors ${active ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all ${active ? 'w-full bg-brand-400' : 'w-0 group-hover:w-full bg-white/60'}`}></span>
              </Link>
            );
          })}
        </nav>
        <details className="md:hidden">
          <summary className="list-none cursor-pointer text-gray-300">選單</summary>
          <div className="absolute left-0 right-0 mt-2 bg-dark/95 backdrop-blur border border-white/10 rounded-lg p-3 mx-4 space-y-2 z-50">
            {nav.map(item => (
              <Link key={item.name} href={item.href} className="block text-gray-200 hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}

