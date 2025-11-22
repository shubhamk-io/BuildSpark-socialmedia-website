import { Target, Lightbulb, Zap } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                            About Flexx
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            We Don't Just Build Brands,
                            <span className="text-blue-400"> We Build Empires</span>
                        </h3>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                            Figuring Out Media with Flexx is your strategic partner in the digital landscape.
                            We've mastered the art of turning content into culture and creators into icons.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            With expertise spanning social media strategy, crisis management, content production,
                            and growth acceleration, we provide the complete toolkit for digital dominance.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                icon: Target,
                                title: 'Strategic Excellence',
                                description: 'Data-driven strategies that deliver measurable results and sustainable growth.',
                            },
                            {
                                icon: Lightbulb,
                                title: 'Creative Innovation',
                                description: 'Cutting-edge content and campaigns that capture attention and inspire action.',
                            },
                            {
                                icon: Zap,
                                title: 'Rapid Execution',
                                description: 'Fast turnarounds without compromising quality. We move at the speed of culture.',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Ready to Transform Your Digital Presence?
                    </h3>
                    <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
                        Join hundreds of creators and brands who trust Flexx to elevate their game
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-black text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                    >
                        Start Your Journey
                    </a>
                </div>
            </div>
        </section>
    );
}
