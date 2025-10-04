import { Button } from '@/components/ui/button';
import { ChevronsUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card py-10 text-center relative">
      <div className="container mx-auto px-4">
        <a href="#home" aria-label="Volver arriba" className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-transform hover:scale-110">
          <ChevronsUp className="h-6 w-6" />
        </a>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://github.com/RoxyDevs" target="_blank" aria-label="GitHub" className="p-3 rounded-full border border-foreground hover:bg-primary hover:border-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/roxana-rolon" target="_blank" aria-label="LinkedIn" className="p-3 rounded-full border border-foreground hover:bg-primary hover:border-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:roxdev2023@gmail.com" aria-label="Email" className="p-3 rounded-full border border-foreground hover:bg-primary hover:border-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Roxana Rolón (RoxDev). Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
