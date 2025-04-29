"use client";

import { useRef } from "react";
import { motion } from "./Motion";
import { useInView } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // In a real app, this would submit to your API
        console.log(values);
        // Show success state
        alert("Thank you for your message! We'll get back to you soon.");
        form.reset();
    }

    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5 text-teal-600" />,
            title: "Email Us",
            details: "info@greenearth.org",
            link: "mailto:info@greenearth.org"
        },
        {
            icon: <MapPin className="h-5 w-5 text-teal-600" />,
            title: "Visit Us",
            details: "123 Eco Street, Green City, 10001",
            link: "#"
        },
        {
            icon: <Phone className="h-5 w-5 text-teal-600" />,
            title: "Call Us",
            details: "(+1) 123-456-7890",
            link: "tel:+11234567890"
        },
        {
            icon: <Clock className="h-5 w-5 text-teal-600" />,
            title: "Open Hours",
            details: "Monday - Friday: 9:00 AM - 5:00 PM",
            link: "#"
        }
    ];

    return (
        <section
            id="contact"
            className="py-20 bg-background"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have questions about our projects or want to get involved?
                        We'd love to hear from you! Reach out using the form below.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Your Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="John Doe" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email Address</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="john@example.com" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <FormField
                                            control={form.control}
                                            name="subject"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Subject</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="How can we help?" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Your Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Tell us what you're looking for..."
                                                            className="min-h-[120px]"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-600/90">
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-4 flex items-start space-x-4">
                                        <div className="p-2 rounded-full bg-teal-600/10">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{item.title}</h3>
                                            <a
                                                href={item.link}
                                                className="text-muted-foreground hover:text-teal-600 transition-colors"
                                            >
                                                {item.details}
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="mt-6">
                            <CardContent className="p-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.935!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0zCsDQyJzQ2LjEiTiA3M8KwNTYnMDYuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="240"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Map"
                                />
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
