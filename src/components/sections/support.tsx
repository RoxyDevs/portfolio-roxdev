import { Button } from '@/components/ui/button';
import { PaypalIcon } from '@/components/icons';

export default function SupportSection() {
    return (
        <section id="support" className="py-20 bg-card">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-headline mb-4">Apoya Mis Proyectos</h2>
                <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
                    Si te gusta mi trabajo y quieres apoyarme para que siga creando y compartiendo proyectos, puedes invitarme un café virtual. ¡Cada colaboración es un gran impulso!
                </p>
                <Button asChild size="lg" className="group relative bg-transparent border-2 border-primary text-primary hover:text-primary-foreground overflow-hidden">
                    <a href="https://paypal.me/belakiss" target="_blank" rel="noopener noreferrer">
                         <span className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
                        <PaypalIcon className="mr-2 h-5 w-5" />
                        Apoyar en PayPal
                    </a>
                </Button>
            </div>
        </section>
    );
}
