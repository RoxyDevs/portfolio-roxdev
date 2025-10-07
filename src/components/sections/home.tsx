import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center text-white py-20">
      <Image
        src="https://images.unsplash.com/photo-1555680510-34daedadbdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMGNvZGV8ZW58MHx8fHwxNzU5NTc3MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Fondo abstracto de tecnología"
        fill
        className="object-cover -z-20"
        priority
        data-ai-hint="abstract code"
      />
      <div className="absolute inset-0 bg-background/90 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="bg-card/70 backdrop-blur-sm p-8 md:p-10 rounded-3xl max-w-lg mx-auto border border-border/50 shadow-2xl">
          <Image
              src="/profile-roxana.jpg"
              alt="Foto de perfil de Roxana Rolón, Desarrolladora FullStack"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-primary object-cover"
              data-ai-hint="woman portrait red hair"
              unoptimized={true}
            />
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Roxana Rolón</h1>
          <h2 className="mt-2 text-xl text-foreground/80">Desarrolladora FullStack | Especialista en Python</h2>
          
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-bold transition-transform hover:scale-105">
            <a href="#contact">Contáctame</a>
          </Button>

          <div className="flex justify-center space-x-4 mt-8">
            <a href="https://github.com/RoxyDevs" target="_blank" aria-label="GitHub" className="p-3 rounded-full border border-foreground hover:bg-primary hover:border-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/roxana-rolon" target="_blank" aria-label="LinkedIn" className="p-3 rounded-full border border-foreground hover:bg-primary hover:border-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:roxdev2023@gmail.com" aria-label="Email" className="p-3 rounded-full border border-foreground hover:bg-primary hover:border-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
