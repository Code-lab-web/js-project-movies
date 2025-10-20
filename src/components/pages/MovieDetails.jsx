import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
                setMovieDetails(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
                setLoading(false);
            });
    }, [apiKey, movieId]);

    if (loading) {
        return <p>Loading movie details...</p>;
    }

    if (!movieDetails) {
        return <p>Movie not found.</p>;
    }

    const imageUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

    return (
        <div className="container mx-auto p-4">
            <Link to={"/"} className="text-blue-500 hover:underline">Back to Movies</Link>
            <div className="flex flex-col md:flex-row mt-4">
                <img src={imageUrl} alt={movieDetails.title} className="w-full md:w-1/3 rounded-lg shadow-md" />
                <div className="md:ml-4 mt-4 md:mt-0">
                    <h1 className="text-3xl font-bold">{movieDetails.title}</h1>
                    <p className="mt-2">{movieDetails.overview}</p>
                    <p className="mt-4"><strong>Release Date:</strong> {movieDetails.release_date}</p>
                    <p><strong>Rating:</strong> {movieDetails.vote_average}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
