import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">MovieFlix</Link>
                <nav>
                    <Link to="/" className="mr-4 hover:underline">Home</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
