"use client";

import { useState } from 'react';
import { generateAiProjectInsights } from '@/ai/flows/generate-ai-project-insights';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Wand2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const projects = [
    { name: 'API de Gestión de Contactos', description: 'Una API REST para gestionar contactos, construida con FastAPI, que demuestra habilidades de backend sólidas y diseño de API eficiente.' },
    { name: 'Juego de Memoria con Pygame', description: 'Un juego de memoria clásico desarrollado en Python con la librería Pygame, mostrando lógica de programación y desarrollo de interfaces gráficas.' },
    { name: 'Sistema de Gestión de Contactos', description: 'Un script de Python que utiliza la librería Pandas para gestionar contactos desde un archivo CSV, destacando habilidades en manipulación de datos.' },
];

export function AiProjectInsight() {
    const [selectedProject, setSelectedProject] = useState('');
    const [insight, setInsight] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleGenerateInsight = async () => {
        const project = projects.find(p => p.name === selectedProject);
        if (!project) {
            toast({
                title: 'Error',
                description: 'Por favor, selecciona un proyecto.',
                variant: 'destructive',
            });
            return;
        }

        setIsLoading(true);
        setInsight('');
        try {
            const result = await generateAiProjectInsights({ projectDescription: project.description });
            setInsight(result.insight);
        } catch (error) {
            console.error(error);
            toast({
                title: 'Error al generar insight',
                description: 'Hubo un problema al contactar a la IA. Por favor, intenta de nuevo.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Select value={selectedProject} onValueChange={setSelectedProject}>
                    <SelectTrigger className="w-full sm:w-[250px] flex-grow bg-background">
                        <SelectValue placeholder="Selecciona un proyecto" />
                    </SelectTrigger>
                    <SelectContent>
                        {projects.map(p => (
                            <SelectItem key={p.name} value={p.name}>{p.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button onClick={handleGenerateInsight} disabled={isLoading || !selectedProject} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                    Generar Insight de IA
                </Button>
            </div>

            {(isLoading || insight) && (
                 <Card className="text-left bg-background border-accent/50 shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-accent">
                            <Wand2 />
                            Insight Generado por IA
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <div className="space-y-3 p-4">
                                <div className="w-full h-4 bg-muted rounded animate-pulse" />
                                <div className="w-5/6 h-4 bg-muted rounded animate-pulse" />
                                <div className="w-3/4 h-4 bg-muted rounded animate-pulse" />
                            </div>
                        ) : (
                            <p className="text-foreground/90 leading-relaxed">{insight}</p>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
