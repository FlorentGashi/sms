'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { School, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-2">
          <School className="h-6 w-6 text-primary" />
            <Link href="/">
              <span className="text-xl font-bold">SMS</span>
            </Link>
        </div>
        <button className="block md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-primary">Home</Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">About</Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Features</Link>
          <Link href="/resources" className="text-sm font-medium text-muted-foreground hover:text-primary">Resources</Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login"><Button variant="outline">Log In</Button></Link>
          <Link href="#"><Button>Get Started</Button></Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link href="/resources" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Link href="/login"><Button variant="outline" className="w-full">Log In</Button></Link>
              <Link href="#"><Button className="w-full">Get Started</Button></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
