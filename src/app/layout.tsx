import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <script async src="https://www.tiktok.com/embed.js"></script>
      </head>
      <body className="font-body antialiased">
        <iframe 
            width="0" 
            height="0" 
            src="https://www.youtube.com/embed/WRRnqqQZcjA?autoplay=1&loop=1&playlist=WRRnqqQZcjA&si=tATFKQXd_HHz3IWj" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            style={{ display: 'none' }}
        ></iframe>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
