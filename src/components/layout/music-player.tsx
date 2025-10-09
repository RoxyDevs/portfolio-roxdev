"use client";

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Button } from '@/components/ui/button';
import { Music, Music2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function MusicPlayer() {
    const [hasWindow, setHasWindow] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={togglePlay}
                            className="bg-card/80 backdrop-blur-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full h-12 w-12"
                            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
                        >
                            {isPlaying ? <Music2 className="h-6 w-6 animate-pulse" /> : <Music className="h-6 w-6" />}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{isPlaying ? "Pausar música" : "Reproducir música"}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <div style={{ display: 'none' }}>
                {hasWindow && (
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=R7NvGItVlA8"
                        playing={isPlaying}
                        loop={true}
                        volume={0.5}
                        width="0"
                        height="0"
                    />
                )}
            </div>
        </div>
    );
}
