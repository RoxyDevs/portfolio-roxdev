import { Button } from '@/components/ui/button';

export function TiktokSection() {
    const tiktokVideos = [
        {
            cite: "https://www.tiktok.com/@roxdev_/video/7377520115572542726",
            "data-video-id": "7377520115572542726",
        },
        {
            cite: "https://www.tiktok.com/@roxdev_/video/7423592862043884806",
            "data-video-id": "7423592862043884806",
        },
        {
            cite: "https://www.tiktok.com/@roxdev_/video/7422422701656132870",
            "data-video-id": "7422422701656132870",
        },
    ];

    return (
        <section id="tiktok" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-headline mb-4">Soy Creadora de Contenido</h2>
                    <p className="max-w-3xl mx-auto text-lg text-foreground/80">
                        Además de desarrollar, me apasiona compartir conocimiento y creatividad en TikTok. ¡Echa un vistazo a mis videos más populares!
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {tiktokVideos.map((video, index) => (
                        <blockquote
                            key={index}
                            className="tiktok-embed"
                            cite={video.cite}
                            data-video-id={video['data-video-id']}
                            style={{ maxWidth: '605px', minWidth: '325px', margin: '0 auto' }}
                        >
                            <section></section>
                        </blockquote>
                    ))}
                </div>

                <div className="text-center mt-12">
                     <Button asChild size="lg" className="group relative bg-primary hover:bg-primary/90 text-primary-foreground overflow-hidden">
                        <a href="https://www.tiktok.com/@roxdev_" target="_blank" rel="noopener noreferrer">
                            <span className="absolute left-0 top-0 h-full w-0 bg-primary/70 transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
                            Seguir en TikTok
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
