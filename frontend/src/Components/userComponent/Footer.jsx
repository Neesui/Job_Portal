import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm">
                            We connect job seekers with their dream jobs and employers with the best talent. Explore opportunities and grow your career with us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/jobs" className="hover:text-gray-300">
                                    Browse Jobs
                                </a>
                            </li>
                            <li>
                                <a href="/companies" className="hover:text-gray-300">
                                    Companies
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-gray-300">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-gray-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/blog" className="hover:text-gray-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="hover:text-gray-300">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="/support" className="hover:text-gray-300">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">
                            Email: support@jobportal.com
                        </p>
                        <p className="text-sm">Phone: +1 (234) 567-890</p>
                        <p className="text-sm mt-4">
                            Address: 123 Job St, Career City, USA
                        </p>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                    © 2024 Job Portal. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
