"use server";
import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
    // Here you would typically send an email, save to a database, etc.
    // For this demo, we'll just log it and simulate a success response.
    console.log("Received contact form submission:", values);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, you might have error conditions
    // if (error) {
    //   return { success: false, message: "An error occurred." };
    // }

    return { success: true, message: "Form submitted successfully." };
}
