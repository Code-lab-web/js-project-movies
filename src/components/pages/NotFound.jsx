import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-4xl font-bold">404 - Not Found</h1>
            <p className="mt-4">The page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Go to Home</Link>
        </div>
    );
}

export default NotFound;
