import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-black pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 h-full flex flex-col items-start justify-start">
                        <a href="#" className="inline-block text-3xl font-heading font-bold text-neon-red tracking-wider uppercase mb-6">
                            BAJRANG<span className="text-white">FITNESS</span>
                        </a>
                        <p className="text-gray-400 font-body leading-relaxed mb-6">
                            Forging elite fitness through discipline, community, and sheer will. Join the brotherhood today.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-xl uppercase mb-6 tracking-widest">Navigation</h4>
                        <ul className="space-y-3 font-body">
                            <li><a href="#about" className="text-gray-400 hover:text-neon-red transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-neon-red transition-colors">Services</a></li>
                            <li><a href="#trainers" className="text-gray-400 hover:text-neon-red transition-colors">Trainers</a></li>
                            <li><a href="#pricing" className="text-gray-400 hover:text-neon-red transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-xl uppercase mb-6 tracking-widest">Connect</h4>
                        <ul className="space-y-4 font-body">
                            <li className="flex items-start">
                                <MapPin size={20} className="text-neon-red mr-3 shrink-0 mt-1" />
                                <span className="text-gray-400">Pilikothi Road, OPP primary school, Haldwani</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="text-neon-red mr-3 shrink-0" />
                                <span className="text-gray-400 flex flex-col">
                                    <span>+91 8445588806</span>
                                    <span>+91 7253008213</span>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="text-neon-red mr-3 shrink-0" />
                                <span className="text-gray-400">join@bajrangfitness.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-xl uppercase mb-6 tracking-widest">Hours</h4>
                        <ul className="space-y-4 font-body">
                            <li className="flex items-start">
                                <Clock size={20} className="text-neon-red mr-3 shrink-0 mt-1" />
                                <div>
                                    <span className="block text-white font-bold mb-1">Open 24/7</span>
                                    <span className="block text-gray-400 text-sm">Staffed Hours:</span>
                                    <span className="block text-gray-400 text-sm">Mon - Fri: 6 AM - 10 PM</span>
                                    <span className="block text-gray-400 text-sm">Sat - Sun: 8 AM - 8 PM</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-600 font-body text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Bajrang Fitness. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm font-body text-gray-600">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
