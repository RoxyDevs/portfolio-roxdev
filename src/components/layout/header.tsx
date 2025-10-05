"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { href: '#home', label: 'INICIO' },
  { href: '#aboutme', label: 'SOBRE MÍ' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#portfolio', label: 'PORTFOLIO' },
  { href: '#ai-projects', label: 'PROYECTOS IA' },
  { href: '#tiktok', label: 'TIKTOK' },
  { href: '#contact', label: 'CONTACTO' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <header className="container mx-auto flex justify-between items-center p-4">
        <a href="#home" className="font-headline text-3xl font-bold text-primary">
          ROXDEV
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background p-0 w-[250px]">
              <div className="flex flex-col h-full">
                <div className="p-4 flex justify-between items-center border-b">
                   <a href="#home" className="font-headline text-2xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      ROXDEV
                    </a>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Cerrar menú</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col p-4 space-y-2">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                       <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                       >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
