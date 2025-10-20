import React from 'react'

// this is the "main" page. When you get to the website you should get to this page.
// It will show the movies that we fetch from the API
// Removed unused variable 'apikey'
import { useEffect, useState } from 'react'
import Card from './components/Card.jsx'
import { Link } from 'react-router-dom'

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    // Do not expose the API key but add it to an env file instead.
    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    // Fetch the data in the useEffect hook with empty dependency array []

    // https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1

    // Do proper error handling, and use asyns/await or .then()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results) // save the movies to the state varable
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching movies:', error)
                setLoading(false)
            })

    }, [apiKey]);

    return (
        <>
            <h1 className="text-2xl font-bold m-4">Popular Movies</h1>
            {loading ? (
                <p>Loading movies...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {movies.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <Card movie={movie} />
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}

export default Movies