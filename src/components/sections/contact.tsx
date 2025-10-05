"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { handleContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { MapPin, Smartphone, Mail, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido."),
  email: z.string().email("El email no es válido."),
  subject: z.string().min(2, "El asunto es requerido."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export default function ContactSection() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        const result = await handleContactForm(values);
        if (result.success) {
            toast({
                title: "¡Mensaje Enviado!",
                description: "Gracias por contactarme. Te responderé pronto.",
            });
            form.reset();
        } else {
            toast({
                title: "Error",
                description: result.message,
                variant: "destructive",
            });
        }
        setIsSubmitting(false);
    }
    
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-headline text-center mb-12">Contacto</h2>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="bg-card p-8 rounded-lg">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormControl><Input placeholder="Tu Nombre" {...field} className="bg-input" /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormControl><Input type="email" placeholder="Tu Email" {...field} className="bg-input" /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                 <FormField control={form.control} name="subject" render={({ field }) => (
                                    <FormItem>
                                        <FormControl><Input placeholder="Asunto" {...field} className="bg-input" /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                 <FormField control={form.control} name="message" render={({ field }) => (
                                    <FormItem>
                                        <FormControl><Textarea placeholder="Mensaje" {...field} className="bg-input min-h-[150px]" /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}/>
                                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg group relative overflow-hidden" disabled={isSubmitting}>
                                    <span className="absolute left-0 top-0 h-full w-0 bg-accent/70 transition-all duration-300 ease-in-out group-hover:w-full -z-10"></span>
                                    {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
                                    Enviar Mensaje
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="space-y-8">
                        <div className="aspect-[16/9] rounded-lg overflow-hidden">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107149.07172019748!2d-60.70119859341427!3d-32.9521895856417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b6539335d3d5d3%3A0x45ea3b3b2553c3e6!2sRosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="bg-card p-8 rounded-lg space-y-4">
                             <div className="flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-accent"/>
                                <span>Rosario, Santa Fe, Argentina</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Smartphone className="h-6 w-6 text-accent"/>
                                <span>+54 9 341 706 4508</span>
                            </div>
                             <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-accent"/>
                                <span>roxdev2023@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
