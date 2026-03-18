import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider mb-6">
                            More Than Just A <span className="text-neon-red">Gym</span>
                        </h2>
                        <div className="w-20 h-1 bg-neon-red mb-8" />

                        <p className="text-gray-400 text-lg mb-6 leading-relaxed font-body">
                            At Bajrang Fitness, we believe that true strength is forged in the fires of discipline. We aren't here for casual workouts; we are here to build unbreakable bodies and minds.
                        </p>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-body">
                            Our state-of-the-art facility is equipped with elite gear, driven by expert trainers who have walked the path, and fueled by a community of relentless individuals who refuse to settle for mediocrity.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-neon-red text-white uppercase tracking-widest font-bold py-3 px-8 hover:bg-neon-red transition-colors"
                        >
                            Discover Our Story
                        </motion.button>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-64 rounded-sm overflow-hidden mt-8"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Gym equipment"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="h-80 rounded-sm overflow-hidden"
                        >
                            <video
                                src="/Video-2.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
