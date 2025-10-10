
"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';

// Component for a single "glitter" particle
const Glitter = ({ x, y, isFading }: { x: number; y: number; isFading: boolean }) => (
  <div
    className={cn(
      'absolute w-2 h-2 bg-accent rounded-full transition-opacity duration-1000 pointer-events-none',
      isFading ? 'opacity-0' : 'opacity-100'
    )}
    style={{ 
      left: `${x}px`, 
      top: `${y}px`, 
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 0 8px hsl(var(--accent)), 0 0 12px hsl(var(--accent))' 
    }}
  />
);

// Orange flower SVG component
const OrangeFlower = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    className={cn("w-6 h-6", className)}
    fill="hsl(var(--primary))"
  >
    <path d="M20,10 C15,0 25,0 20,10 Z" transform="rotate(0, 20, 20)" />
    <path d="M20,10 C15,0 25,0 20,10 Z" transform="rotate(60, 20, 20)" />
    <path d="M20,10 C15,0 25,0 20,10 Z" transform="rotate(120, 20, 20)" />
    <path d="M20,10 C15,0 25,0 20,10 Z" transform="rotate(180, 20, 20)" />
    <path d="M20,10 C15,0 25,0 20,10 Z" transform="rotate(240, 20, 20)" />
    <path d="M20,10 C15,0 25,0 20,10 Z" transform="rotate(300, 20, 20)" />
    <circle cx="20" cy="20" r="3" fill="hsl(var(--primary-foreground))" />
  </svg>
);


export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [glitters, setGlitters] = useState<{ x: number, y: number, id: number, isFading: boolean }[]>([]);
  const glitterCleanUpTimers = useRef<NodeJS.Timeout[]>([]);

  // Update cursor position
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);

    const newGlitter = { x: e.clientX, y: e.clientY, id: Date.now(), isFading: false };
    setGlitters(prev => [newGlitter, ...prev].slice(0, 20)); 

    const fadeTimer = setTimeout(() => {
        setGlitters(prev => prev.map(g => g.id === newGlitter.id ? {...g, isFading: true} : g));
    }, 100);

    const cleanUpTimer = setTimeout(() => {
        setGlitters(prev => prev.filter(g => g.id !== newGlitter.id));
    }, 1100);

    glitterCleanUpTimers.current.push(fadeTimer, cleanUpTimer);

  }, [isVisible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    if ((e.target instanceof HTMLElement) && e.target.closest('a, button')) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    if ((e.target instanceof HTMLElement) && e.target.closest('a, button')) {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.body.addEventListener('mouseleave', () => setIsVisible(false));
    document.body.addEventListener('mouseenter', () => setIsVisible(true));


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.removeEventListener('mouseleave', () => setIsVisible(false));
      document.body.removeEventListener('mouseenter', () => setIsVisible(true));
      // Clear all scheduled timers on component unmount
      glitterCleanUpTimers.current.forEach(timer => clearTimeout(timer));
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  return (
    <div className={cn("hidden md:block pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300", isVisible ? 'opacity-100' : 'opacity-0')}>
      {glitters.map(g => <Glitter key={g.id} x={g.x} y={g.y} isFading={g.isFading} />)}
      <div
        className="absolute transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <OrangeFlower className={cn('transition-transform duration-300', isHovering ? 'rotate-90' : 'rotate-0')} />
      </div>
    </div>
  );
}
