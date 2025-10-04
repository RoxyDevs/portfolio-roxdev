"use client";
import { useEffect, useRef, useState } from 'react';
import { Progress } from '@/components/ui/progress';

const technicalSkills = [
  { name: 'Python (FastAPI, Pandas, Pygame)', value: 90 },
  { name: 'HTML & CSS', value: 85 },
  { name: 'JavaScript', value: 75 },
  { name: 'Bases de Datos (SQL)', value: 80 },
];

const professionalSkills = [
  { name: 'Resolución de Problemas', value: 95 },
  { name: 'Trabajo en Equipo', value: 90 },
  { name: 'Aprendizaje Continuo', value: 100 },
  { name: 'Comunicación Asertiva', value: 85 },
];


const SkillBar = ({ name, value }: { name: string; value: number }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay start of animation slightly for better effect
          setTimeout(() => setProgress(value), 100);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value]);

  return (
    <div ref={ref} className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-foreground">{name}</span>
        <span className="text-sm font-bold text-accent">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2 [&>div]:bg-accent" style={{transition: 'width 2s ease-in-out'}} />
    </div>
  );
};


export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-headline text-center mb-16">Skills</h2>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                    <div>
                        <h3 className="text-3xl font-headline mb-8 text-center md:text-left">Technical Skills</h3>
                        {technicalSkills.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} value={skill.value} />
                        ))}
                    </div>
                    <div>
                        <h3 className="text-3xl font-headline mb-8 text-center md:text-left">Professional Skills</h3>
                        {professionalSkills.map((skill) => (
                            <SkillBar key={skill.name} name={skill.name} value={skill.value} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
