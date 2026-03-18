import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Video on the Left */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(255,51,51,0.15)] group w-full bg-black flex justify-center order-2 lg:order-1"
                    >
                        <video
                            src="/Video-1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full max-h-[70vh] h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Text on the Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start order-1 lg:order-2"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-wider mb-6 font-semibold">
                            Inside Bajrang <span className="text-neon-red">Fitness</span>
                        </h2>
                        <div className="w-20 h-1 bg-neon-red mb-8" />
                        <p className="text-gray-400 font-body text-xl mb-6 leading-relaxed">
                            We are completely beginner friendly and always ready to help you push your limits.
                        </p>
                        <p className="text-gray-400 font-body text-lg leading-relaxed mb-10">
                            Whether you are just starting your fitness journey or looking to take it to the next level, our environment is built to support you every step of the way. No judgment, just pure progress.
                        </p>

                        <a href="#about">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-neon-red text-white uppercase tracking-widest font-bold py-3 px-8 hover:bg-neon-red transition-colors"
                            >
                                Learn More
                            </motion.button>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
