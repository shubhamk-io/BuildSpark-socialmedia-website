import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden' >
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>
            </div>

            {/*-------- Starting content----------  */}
            <div className='z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center' >
                <div className='inline-flex items-center gap-2 border border-blue-400/30 bg-gray-800/50 px-5 py-2 mt-8 rounded-full o '>
                    <Sparkles className='w-4 h-4 text-blue-400' />
                    <span className='text-sm text-gray-300'>Figuring Out Media with Flexx</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    <span className="text-white">Elevate Your</span>
                    <br />
                    <span className="text-blue-400">Digital Presence</span>
                </h1>
                {/* ----------paragarpgh-------- */}
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    From social media mastery to crisis management and production excellence.
                    We transform brands into cultural movements.
                </p>

                <div className='flex sm:flex- items-center justify-center gap-4'>
                    <a href="#service"
                        className='group text-black font-semibold py-4 px-8 text-lg bg-blue-400 rounded-full hover:to-blue-300 transition-all  duration-300 hover:scale-105 flex items-center gap-2'>
                        Explore Services
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </a>

                    <a href="#contact"
                        className='border-2 border-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 '>
                        Book a Consultation
                    </a>
                </div>
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {[
                        { number: '500+', label: 'Creators Partnered' },
                        { number: '1M+', label: 'Engagement Boosted' },
                        { number: '98%', label: 'Success Rate' },
                        { number: '24/7', label: 'Support Available' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero