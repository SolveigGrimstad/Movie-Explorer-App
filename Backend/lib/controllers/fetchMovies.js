const Movie_ids = require("./movie_ids.js");
const fetch = require("node-fetch");
const fs = require("fs");

//script for getting all the movies from the API to the database 

const API_KEY = "4f25cd6d"; 

let movie_list = [];

const fetchMovies = async (imdbID) => {
  await fetch(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${API_KEY}`)
    .then((resp) => resp)
    .then((resp) => resp.json())
    .then((response) => {
      if (response.Response === "False") {
      } else {
        const movie = {
          title: response.Title,
          year: response.Year,
          released: response.Released,
          duration: response.Runtime,
          genre: response.Genre,
          director: response.Director,
          actors: response.Actors,
          summary: response.Plot,
          language: response.Language,
          country: response.Country,
          imageUrl: response.Poster,
          rating: response.imdbRating,
        };
        movie_list.push(movie);
        console.log(movie);
      }
    })
    .catch(({ message }) => {
      console.log(message);
      return null;
    });
};

for (i = 0; i < Movie_ids.length; i++) {
  fetchMovies(Movie_ids[i]);
  console.log("larsi");
}

//write to a .csv - file so we can upload in MongoDB 
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: "outern.csv",
  header: [
    { id: "title", title: "Title" },
    { id: "year", title: "Year" },
    { id: "released", title: "Released" },
    { id: "duration", title: "Runtime" },
    { id: "genre", title: "Genre" },
    { id: "director", title: "Director" },
    { id: "actors", title: "Actors" },
    { id: "summary", title: "Plot" },
    { id: "language", title: "Language" },
    { id: "country", title: "Country" },
    { id: "imageUrl", title: "Poster" },
    { id: "rating", title: "Ratings" },
  ],
});

//timeout so it wont write until everything is ready 
setTimeout(
  () =>
    csvWriter.writeRecords(movie_list).then(() => {
      console.log("The CSV file was written successfully");
    }),
  10000
);
