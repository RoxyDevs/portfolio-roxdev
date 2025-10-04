import { Button } from '@/components/ui/button';
import { Download, Code, Bot, BookOpen } from 'lucide-react';
import { PythonIcon } from '@/components/icons';

export default function AboutSection() {
    return (
        <section id="aboutme" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-headline mb-8">Sobre Mí</h2>
                    <p className="text-lg text-foreground/80 mb-6">
                        <span className="text-accent font-bold">Hola, soy Roxana Rolón.</span> Con 4 años de trayectoria en el mundo tecnológico, mi viaje comenzó en el desarrollo No-Code, donde aprendí a construir soluciones digitales eficientes y centradas en el usuario. Hoy, combino esa base estratégica con mi especialización como <strong className="font-bold text-foreground">Desarrolladora FullStack en Python</strong> para transformar ideas en aplicaciones robustas y escalables.
                    </p>
                    <p className="text-lg text-foreground/80">
                        Mi formación no se limita a Argentina; he complementado mis estudios con <strong className="font-bold text-foreground">certificaciones internacionales en Chile y Puerto Rico</strong>, lo que me ha dado una perspectiva más amplia del desarrollo tecnológico. Como freelancer, mi pasión es explorar activamente el mundo de la Inteligencia Artificial, integrando agentes de IA para potenciar proyectos y automatizar procesos. Mi objetivo es claro: innovar, aprender constantemente y contribuir a equipos que buscan construir el futuro de la tecnología.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
                    <div className="bg-card p-8 rounded-lg">
                        <h3 className="text-3xl font-headline mb-6">Datos Personales</h3>
                        <ul className="space-y-4">
                            <li><strong>Cumpleaños:</strong> 1ro de Diciembre</li>
                            <li><strong>Email:</strong> roxdev2023@gmail.com</li>
                            <li><strong>Ubicación:</strong> Rosario, Santa Fe, Argentina</li>
                            <li><strong>Cargo:</strong> <span className="bg-accent text-accent-foreground font-bold py-1 px-3 rounded-md text-sm">FREELANCE</span></li>
                        </ul>
                    </div>
                    <div className="bg-card p-8 rounded-lg">
                        <h3 className="text-3xl font-headline mb-6">Intereses</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex flex-col items-center justify-center w-24 h-24 bg-background rounded-lg p-2 transition-colors hover:bg-accent/10">
                                <Code className="h-8 w-8 text-accent mb-2"/>
                                <span className="text-sm font-semibold">CODING</span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-24 h-24 bg-background rounded-lg p-2 transition-colors hover:bg-accent/10">
                                <Bot className="h-8 w-8 text-accent mb-2"/>
                                <span className="text-sm font-semibold">IA & BOTS</span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-24 h-24 bg-background rounded-lg p-2 transition-colors hover:bg-accent/10">
                                <BookOpen className="h-8 w-8 text-accent mb-2"/>
                                <span className="text-sm font-semibold">LECTURA</span>
                            </div>
                            <div className="flex flex-col items-center justify-center w-24 h-24 bg-background rounded-lg p-2 transition-colors hover:bg-accent/10">
                                <PythonIcon className="h-8 w-8 mb-2"/>
                                <span className="text-sm font-semibold">PYTHON</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-16">
                    <Button asChild size="lg" className="group relative bg-transparent border-2 border-accent text-accent hover:text-accent-foreground overflow-hidden">
                        <a href="/CV-RoxanaRolon.pdf" download="CV_Roxana_Rolon.pdf">
                            <span className="absolute left-0 top-0 h-full w-0 bg-accent transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
                            <Download className="mr-2 h-5 w-5"/>
                            Descargar CV
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
