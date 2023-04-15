(async function(){
    const response = await fetch("./data.json");
    const data = await response.json();

    const genre = document.getElementById("genreId");
    const year = document.getElementById("yearId");
    const languages = document.getElementById("languagesId");
    const ratings = document.getElementById("ratingsId");

    // filter movies based on user preferences
const recommendedMovies = data.filter(movie => {
    return movie.genre === userPreferences.genre && 
           movie.rating >= userPreferences.rating &&
           movie.releaseYear === userPreferences.releaseYear;
  });
  
  // display recommended movies
  recommendedMovies.forEach(movie => {
    console.log(movie.title);
  });









    console.log('working');
})()