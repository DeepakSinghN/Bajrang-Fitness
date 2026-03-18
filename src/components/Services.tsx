import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Dumbbell, HeartPulse, Activity, Trophy } from 'lucide-react';

const services = [
    {
        title: "Strength Training",
        description: "Build raw power and muscle mass with our elite free weights, racks, and specialized strength machines.",
        icon: Dumbbell,
    },
    {
        title: "Cardio & Endurance",
        description: "Push your limits and boost your stamina with top-tier treadmills, rowers, and HIIT zones.",
        icon: HeartPulse,
    },
    {
        title: "Functional Fitness",
        description: "Master your bodyweight. Dynamic zones for kettlebells, battle ropes, and calisthenics.",
        icon: Activity,
    },
    {
        title: "Personal Training",
        description: "1-on-1 coaching with relentless professionals who will push you beyond your perceived limits.",
        icon: Trophy,
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider mb-4"
                        >
                            Our <span className="text-neon-red">Arsenal</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: 80 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="h-1 bg-neon-red mx-auto md:mx-0"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-lg mt-6 md:mt-0 font-body"
                    >
                        We provide everything you need to break records and redefine your limits. No gimmicks, just results.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-[#111] border border-gray-800 p-8 flex flex-col items-start hover:border-neon-red/50 hover:shadow-[0_0_30px_rgba(255,51,51,0.1)] transition-all group"
                            >
                                <div className="bg-black p-4 rounded-full mb-6 group-hover:bg-neon-red/10 transition-colors">
                                    <Icon size={36} className="text-neon-red" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-4 group-hover:text-neon-red transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 font-body leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    );
}
