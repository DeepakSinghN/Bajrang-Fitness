import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';


const plans = [
    {
        name: "1 Month",
        price: "₹999",
        period: "/month",
        description: "Start your journey today.",
        highlighted: false,
        gradient: "from-gray-800 to-gray-900",
        features: ["Access to gym floor", "Standard equipment", "Locker room access"]
    },
    {
        name: "3 Months",
        price: "₹2499",
        period: "total",
        description: "Commit and see changes.",
        highlighted: true,
        gradient: "from-[#FFC107] to-[#FF3333]",
        features: ["Save ₹498", "Access to all zones", "Diet consultation", "Progress tracking"]
    },
    {
        name: "6 Months",
        price: "₹4499",
        period: "total",
        description: "Sore today, strong tomorrow.",
        highlighted: false,
        gradient: "from-gray-800 to-gray-900",
        features: ["Save ₹1495", "Unlimited group classes", "Advanced diet plan", "Free merchandise"]
    },
    {
        name: "12 Months",
        price: "₹7999",
        period: "total",
        description: "The ultimate transformation.",
        highlighted: false,
        gradient: "from-gray-800 to-gray-900",
        features: ["Save ₹3989", "1 PT session/month", "Custom nutrition plan", "Guest passes (2/mo)"]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-black relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-red/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-neon-red uppercase tracking-wider mb-2"
                    >
                        Sore Today, Strong Tomorrow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 font-body text-xl max-w-2xl mx-auto mt-4"
                    >
                        Choose the plan that fits your ambition. No hidden fees, just pure fitness.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            className={`relative rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${plan.highlighted
                                ? 'border-2 border-transparent bg-clip-border shadow-[0_0_40px_rgba(255,51,51,0.25)] z-10 before:absolute before:-inset-2 before:bg-gradient-to-b before:from-[#FFD700] before:to-[#FF3333] before:-z-10'
                                : 'bg-[#111] border border-gray-800 hover:border-gray-500'
                                }`}
                        >
                            {/* If highlighted, we need a dark inner background so text is readable */}
                            {plan.highlighted && (
                                <div className="absolute inset-0 bg-black/95 z-0" />
                            )}

                            <div className={`relative z-10 flex flex-col flex-grow p-8 ${plan.highlighted ? '' : ''}`}>
                                {plan.highlighted && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FFC107] to-[#FF3333] text-black text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-bl-lg">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className={`text-3xl font-heading font-black uppercase mb-1 ${plan.highlighted ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF3333]' : 'text-white'}`}>
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400 font-body text-sm mb-6 h-10">
                                    {plan.description}
                                </p>

                                <div className="mb-6 pb-6 border-b border-gray-800 flex-grow">
                                    <span className="text-5xl font-heading font-black text-white">{plan.price}</span>
                                    <span className="text-gray-500 font-body ml-2 uppercase text-sm font-bold tracking-widest">{plan.period}</span>
                                    {plan.features[0]?.includes('Save') && (
                                        <div className="mt-2 text-[#FFC107] font-body font-bold tracking-widest uppercase text-sm">
                                            {plan.features[0]}
                                        </div>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full py-4 rounded-lg font-heading font-bold uppercase tracking-widest transition-all ${plan.highlighted
                                        ? 'bg-gradient-to-r from-[#FFD700] to-[#FF3333] text-black shadow-lg shadow-neon-red/30'
                                        : 'bg-black text-white hover:bg-white hover:text-black border border-gray-700 hover:border-white'
                                        }`}
                                >
                                    Join Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
