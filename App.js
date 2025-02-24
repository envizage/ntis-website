import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

function GovBanner() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-gray-100 text-gray-800 text-sm py-2 px-4 border-b border-gray-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">An official website of the United States government</span>
                    <span className="text-gray-500">Here's how you know</span>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600 hover:underline focus:outline-none">
                    {isOpen ? "Hide" : "Show"}
                </button>
            </div>
            {isOpen && (
                <div className="mt-2 bg-white p-3 shadow-md border border-gray-300 rounded-md">
                    <p className="text-gray-700 text-sm">The .gov means it’s official. Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re on a federal government site.</p>
                </div>
            )}
        </div>
    );
}

function Navigation() {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800 shadow-lg fixed w-full z-50 top-0 left-0">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                    <img className="w-14 h-14 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Seal_of_the_United_States_Department_of_Commerce.svg/263px-Seal_of_the_United_States_Department_of_Commerce.svg.png" alt="Department of Commerce Logo" />
                    <Link to="/" className="text-2xl font-bold tracking-wide text-white hover:text-blue-400 transition">
                        U.S. National Technical Information Service
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6 text-lg">
                    <Link to="/" className="text-gray-300 hover:text-blue-400 transition">Home</Link>
                    <div className="relative" onMouseEnter={() => setAboutDropdownOpen(true)} onMouseLeave={() => setAboutDropdownOpen(false)}>
                        <button className="text-gray-300 hover:text-blue-400 transition focus:outline-none">
                            About Us ▼
                        </button>
                        {aboutDropdownOpen && (
                            <div className="absolute mt-2 bg-gray-700 rounded-md shadow-lg w-48 z-50">
                                <Link to="/about" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">Our Mission</Link>
                                <Link to="/leadership" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">Leadership</Link>
                                <Link to="/advisory-board" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">Advisory Board</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

function Home() {
    return (
        <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to NTIS</h1>
            <p className="text-lg mt-4">Providing federal agencies with innovative data solutions.</p>
        </div>
    );
}

function About() {
    return (
        <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-blue-600">About NTIS</h1>
            <p className="text-lg mt-4">Our mission is to improve access to government data.</p>
        </div>
    );
}

function Leadership() {
    return (
        <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-blue-600">Leadership</h1>
            <p className="text-lg mt-4">Meet our leadership team dedicated to data innovation.</p>
        </div>
    );
}

function Contact() {
    return (
        <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
            <p className="text-lg mt-4">Reach out to us for inquiries and collaborations.</p>
        </div>
    );
}

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 mt-0 text-center">
            <div className="flex justify-center space-x-6">
                <a href="#" className="hover:text-blue-400">Disclaimer</a>
                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400">Terms of Service</a>
                <a href="#" className="hover:text-blue-400">Contact</a>
            </div>
            <p className="mt-4">&copy; {new Date().getFullYear()} U.S. National Technical Information Service. All Rights Reserved.</p>
        </footer>
    );
}

export default function App() {
    return (
        <Router>
            <GovBanner />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}
