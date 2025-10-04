import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Construction } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 'project-api',
    title: 'API REST de Gestión de Contactos',
    tech: ['FastAPI', 'SQLite', 'Pydantic'],
    image: PlaceHolderImages.find(p => p.id === 'project1'),
    github: 'https://github.com/RoxyDevs/fastapi-contact-api',
    alt: 'API REST de Contactos con FastAPI'
  },
  {
    id: 'project-pandas',
    title: 'Sistema de Gestión de Contactos',
    tech: ['Python', 'Pandas', 'CSV'],
    image: PlaceHolderImages.find(p => p.id === 'project2'),
    github: 'https://github.com/RoxyDevs/PythonDesdeCero',
    alt: 'Script de gestión de contactos con Python y Pandas'
  },
  {
    id: 'project-pygame',
    title: 'Juego de Memoria con Pygame',
    tech: ['Python', 'Pygame'],
    image: PlaceHolderImages.find(p => p.id === 'project3'),
    github: 'https://github.com/RoxyDevs/memory-game-python.git',
    alt: 'Juego de Memoria con Python y Pygame'
  },
  {
    id: 'project-chatbot',
    title: 'Web Emprendimiento Familiar',
    tech: ['HTML', 'CSS', 'JS', 'ChatBot'],
    image: PlaceHolderImages.find(p => p.id === 'project4'),
    github: null,
    alt: 'Web para emprendimiento con chatbot y formulario'
  },
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-headline text-center mb-12">Portfolio</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} className="group overflow-hidden border-border/50 relative bg-card">
                            <CardContent className="p-0">
                                <div className="relative aspect-[16/10]">
                                    {project.image && (
                                         <Image
                                            src={project.image.imageUrl}
                                            alt={project.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            data-ai-hint={project.image.imageHint}
                                        />
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-6 text-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h3 className="font-headline text-2xl font-bold mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        {project.tech.map((t) => (
                                            <Badge key={t} variant="secondary" className="bg-white/20 text-white border-none">{t}</Badge>
                                        ))}
                                    </div>
                                    {project.github ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
                                            <Github className="h-4 w-4" />
                                            Ver Código
                                        </a>
                                    ) : (
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground text-primary-foreground cursor-default">
                                            <Construction className="h-4 w-4" />
                                            En Desarrollo
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
