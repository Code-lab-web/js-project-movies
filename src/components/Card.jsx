import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/movies/${movie.id}`}>
                <img src={imageUrl} alt={movie.title} className="w-full h-auto" />
                <div className="p-4">
                    <h3 className="text-lg font-bold">{movie.title}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Card;
