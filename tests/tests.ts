// Create .env file with:
// VITE_TMDB_API_KEY=906841aea0b8a72698aa6edfc03531dd

// Replace hardcoded URLs with:
const apiKey = import.meta.env.VITE_TMDB_API_KEY;
fetch(
  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-us&page=1`
);
fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    const imagesConfig = {
      base_url: "http://image.tmdb.org/t/p/",
      secure_base_url: "https://image.tmdb.org/t/p/",
      backdrop_sizes: ["w300", "w780", "w1280", "original"],
      logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
      poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
      profile_sizes: ["w45", "w185", "h632", "original"],
      still_sizes: ["w92", "w185", "w300", "original"],
    };
    console.log(imagesConfig);
  });
