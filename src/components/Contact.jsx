import { Mail, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_uz8yk7y",
            "template_e4q62h3",
            formData,
            "AWiUiRxjj4SHYmwLM"
        )
            .then(() => {
                alert("Message Sent Successfully ✅");
                setFormData({
                    name: '',
                    email: '',
                    service: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error("FULL ERROR:", error);
                alert(error.text || "Failed to send message");
            });
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                        Get In Touch
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let's Create Something <span className="text-blue-400">Legendary</span>
                    </h3>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Ready to take your brand to the next level? Reach out and let's start the conversation
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                                    Service Interested In
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                                >
                                    <option value="">Select a service</option>
                                    <option value="social">Social Media Services</option>
                                    <option value="crisis">Crisis Management</option>
                                    <option value="production">Content Production</option>
                                    <option value="growth">Growth Services</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-300 transition-all duration-300 hover:scale-[1.02]"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    <div className="space-y-8">

                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
                            <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>

                            <div className="space-y-6">

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Email Us</h5>
                                        <p className="text-gray-400">buildspark@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Call Us</h5>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-semibold mb-1">Live Chat</h5>
                                        <p className="text-gray-400">Available 24/7 for urgent matters</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-400/10 to-blue-500/10 border border-blue-400/30 rounded-2xl p-8">
                            <h4 className="text-xl font-bold text-white mb-3">Response Time</h4>
                            <p className="text-gray-300">
                                We typically respond within 24 hours during business days.
                                For urgent matters, please call us directly.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <footer className="mt-24 border-t border-gray-800 pt-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="text-2xl font-bold mb-4">
                        <span className="text-blue-400">FLEXX</span>
                        <span className="text-white"> MEDIA</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Figuring Out Media. Building Digital Empires.
                    </p>
                    <p className="text-gray-600 text-sm">
                        © 2024 Flexx Media. All rights reserved.
                    </p>
                </div>
            </footer>

        </section>
    );
}
