const movies = require("./data.js");
// console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);

  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}

//   `1. A list of directors of this data is ${getAllDirectors(movies)}`
// );

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) { }
// const howManyMovies2 = () => {}

// Arrow function
// const howManyMovies2 = (moviesArray) => {
//   // 1st nos creamos una vairable que filtremos en el moviesArray para conseguir un valor de "steven spielrberg"
//   const steven = moviesArray.filter(
//     (movieItem) => movieItem.director === "Steven Spielberg"
//   );
//   // 2dn vamos a generar una variable nueva para filtrar los generos de peliculas que corresponden al genero de drama que viene por defecto de la variable que tenemos arriba con el nombre de steven.
//   const dramaMovies = steven.filter((spielberg) =>
//     spielberg.genre.includes("Drama")
//   );
//   return dramaMovies;
// };

// Regular Function
function howManyMovies(moviesArray) {
  const steven = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const dramaMovies = steven.filter((movie) => movie.genre.includes("Drama"));
  return dramaMovies;
}

console.log(`2. List of drama movies:`);
console.log(howManyMovies(movies));

//Version 3
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter(
    (movieItem) =>
      movieItem.director === "Steven Spielberg" && movieItem.genre === "Drama"
  );
  return dramaMovies;
}

console.log(`2. List of drama movies:`);
console.log(howManyMovies(movies));

//Version 4 (la mejor)
function howManyMovies(moviesArray, director) {
  const steven = moviesArray.filter(
    (movies) => movie.director === director && movies.genre.includes("Drama")
  );
}

console.log(`2. List of drama movies:`);
console.log(howManyMovies(movies, "Steven Spielberg"));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//Version 1
function scoresAverage(moviesArray) {
  let totalSum = 0;

  const scores = scores.map((movie) => movie.score);
  for (let i = 0; i < moviesArray.length; i++) {
    totalSum = scores[i] + totalSum;
  }
  const accruedMovieScores = totalSum / moviesArray.length;
  return accruedMovieScores.toFixed(2);
}

console.log(`3. Average scores for all movies:`);
console.log(scoresAverage(movies));

//Version 2 - reduce()
function scoresAverage(moviesArray) {
  const scores = moviesArray.reduce((total, movie) => {
    return (total += movie.score);
  }, 0);
  const accruedMovieScores = scores / moviesArray.length;
  return accruedMovieScores.toFixed(2);
}

console.log(`3. Average scores for all movies using a reduce function:`);
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter((movie) => {
    movie.genre.includes("Drama");
  });
  const scores = drama.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  const totalDramaScores = scores / drama.lenght;
  return totalDramaScores.toFixed(2);
}

console.log(`4. Average scores for all Drama movies using a reduce function:`);
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//Version Nico + Jarko
function orderByYear(moviesArray) {
  let movieList = moviesArray;
  function compare(movie1, movie2) {
    return movie1.year - movie2.year;
  }
  const temporal = movieList.sort(compare);
  console.log(temporal[2]);
}
orderByYear(movies);

//Version 2
function orderByYear(moviesArray) {
  const ordenedList = moviesArray.sort((a, b) => a.year - b.year);
  return movie1.year - movie2.year;
}
console.log(`5. List of movies ordened by year ascending:`);
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
