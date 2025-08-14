useEffect (() => {
    https://api.themovied.org/3/movie/popular
    .then((response) => response.json())
    .then((data) => set Movies(data.results)
.catch ((error => console.error('Error fetching movies', error));

)[]}
return
<div>Movies</div>
}