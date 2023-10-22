import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const creators = "Gabriel Aguilar • Emanuel Cabrera • Miguel Cárdenas • Tomás Henao"; // Replace with actual creators' names
    const githubRepoUrl = "https://github.com/miguelcsx/geomed"; // Replace with the actual GitHub repository URL

    return (
        <footer className="bg-slate-700 text-slate-200 py-4 text-center">
            <div className="container mx-auto">
                <p className="text-center md:flex md:justify-between">
                    <span className="block md:inline-block">Geomed &copy; {currentYear}</span>
                    <span className="block md:inline-block md:ml-4">{creators}</span>
                    <span className="block mt-4 md:mt-0 md:inline-block md:ml-4">Find us on <a href={githubRepoUrl} className="text-blue-500 hover:text-blue-200" target="_blank" rel="noopener noreferrer">GitHub</a></span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
