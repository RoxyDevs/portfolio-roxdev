import { AiProjectInsight } from '@/components/sections/ai-project-insight';

export function AiSection() {
    return (
        <section id="ai-projects" className="py-20 bg-card">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-headline text-center mb-4">Proyectos con IA</h2>
                <p className="max-w-3xl mx-auto mb-12 text-lg text-foreground/80">
                    Exploro activamente el mundo de la Inteligencia Artificial, integrando agentes para potenciar proyectos. Selecciona uno de mis trabajos para ver un insight generado por IA sobre su enfoque y valor.
                </p>
                <AiProjectInsight />
            </div>
        </section>
    )
}
