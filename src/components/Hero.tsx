import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{ backgroundImage: "url('/Hero.jpg')" }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col items-center md:items-start w-full pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-white uppercase tracking-tighter leading-tight mb-6 flex flex-col"
                    >
                        <span className="block">Awaken Your</span>
                        <span className="block text-neon-red">Inner Strength</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-gray-400 text-lg md:text-xl font-body mb-10 max-w-2xl mx-auto md:mx-0"
                    >
                        Join Bajrang Fitness. Elite equipment, expert trainers, and a community built on discipline, sweat, and sheer willpower.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a href="#pricing">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 51, 51, 0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-neon-red text-white font-bold font-heading uppercase tracking-widest text-lg px-8 py-4 rounded-sm transition-all shadow-[0_0_15px_rgba(255,51,51,0.4)]"
                            >
                                Join the Brotherhood
                            </motion.button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}
