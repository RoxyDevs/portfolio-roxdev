import type { Metadata } from 'next';
import { Playfair_Display, PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import MusicPlayer from '@/components/layout/music-player';
import CustomCursor from '@/components/layout/custom-cursor';
import { cn } from '@/lib/utils';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

const title = 'RoxDev | Roxana Rolón - Desarrolladora FullStack Python en Rosario';
const description = 'Portfolio de Roxana Rolón (RoxDev), desarrolladora FullStack con 4 años de experiencia, especializada en Python, FastAPI, y tecnologías emergentes. Descubre mis proyectos y habilidades.';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ['Roxana Rolón', 'RoxDev', 'Desarrolladora FullStack', 'Python', 'FastAPI', 'Backend', 'Frontend', 'Portfolio', 'Rosario', 'Argentina', 'Freelancer', 'TikTok', 'Creadora de Contenido'],
  openGraph: {
    title: 'RoxDev | Portfolio de Roxana Rolón',
    description: 'Desarrolladora FullStack con especialización en Python y tecnologías emergentes.',
    images: [{ url: 'https://picsum.photos/seed/roxdev-og/1200/630', width: 1200, height: 630, alt: 'Roxana Rolón - Desarrolladora FullStack' }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={cn(
        "font-body antialiased custom-cursor-container",
        ptSans.variable,
        playfairDisplay.variable
      )}>
        <CustomCursor />
        <MusicPlayer />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
