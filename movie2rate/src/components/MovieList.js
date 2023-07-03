// import { BsFillStarFill } from "react-icons/bs";

export default function MovieList() {
  return (
    <div className="w-9/12 h-[calc(100%-4rem)] bg-slate-200 py-10 px-16 rounded-br-xl flex">
      <img
        src={movieData.Poster}
        alt={`${movieData.Poster} movie poster`}
        className="h-full rounded shadow"
      />

      <div className="flex flex-col justify-between">
        <div className=" flex items-start flex-row justify-between mx-5 w-full">
          <div className="flex flex-col gap-2 w-fit">
            <div className="w-full">
              <h2
                className={`font-bold w-96 inline-block ${
                  movieData.Title.length > 25 ? "truncate text-2xl" : "text-4xl"
                }`}
              >
                {movieData.Title}
              </h2>
              <span className=" text-end">{movieData.Year}</span>
            </div>

            <p>Rated: {movieData.Rated}</p>
            <p>Released on {movieData.Released}</p>
            <p>Total runtime {movieData.Runtime}</p>
            <p>{movieData.Genre}</p>
            <p>{movieData.Language}</p>

            <p>{movieData.Country}</p>
            <hr className="border-black" />
            <p>Director: {movieData.Director}</p>
            <p>Writer: {movieData.Writer}</p>
            <p>Actors: {movieData.Actors}</p>
            <p>Awards: {movieData.Awards}</p>
          </div>

          <div className="flex flex-col text-center justify-between h-full">
            <div className="bg-indigo-500 rounded shadow p-5 mb-5 h-fit text-white">
              <p>IMDb Rating: {movieData.imdbRating}</p>
              <p>IMDb votes: {movieData.imdbVotes}</p>
              <p>Box Office: {movieData.BoxOffice}</p>
            </div>

            <div>
              <button className="bg-violet-500 text-white py-3 font-bold rounded-full shadow-md block w-full mb-5">
                + Add Bookmark
              </button>
              <a
                className=" bg-violet-500 text-white py-3 font-bold rounded-full shadow-md block w-full"
                href={`https://www.imdb.com/title/${movieData.imdbID}/videogallery/content_type-trailer/`}
                target="_blank"
                rel="noreferrer"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </div>

        <div className="bg-indigo-400 rounded shadow p-5 mx-5 text-ellipsis overflow-hidden w-full max-h-96">
          <h3 className="font-bold text-2xl">Plot</h3>
          <p className="first-letter:text-2xl first-letter:text-white first-letter:font-bold">
            {movieData.Plot}
          </p>
        </div>
      </div>
    </div>
  );
}

let movieData = {
  Title: "Iron Man",
  Year: "2008",
  Rated: "PG-13",
  Released: "02 May 2008",
  Runtime: "126 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "Jon Favreau",
  Writer: "Mark Fergus, Hawk Ostby, Art Marcum",
  Actors: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
  Plot: "Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons contractor Howard Stark. When Tony Stark is assigned to give a weapons presentation to an Iraqi unit led by Lt. Col. James Rhodes, he's given a ride on enemy lines. That ride ends badly when Stark's Humvee that he's riding in is attacked by enemy combatants. He survives - barely - with a chest full of shrapnel and a car battery attached to his heart. In order to survive he comes up with a way to miniaturize the battery and figures out that the battery can power something else. Thus Iron Man is born. He uses the primitive device to escape from the cave in Iraq. Once back home, he then begins work on perfecting the Iron Man suit. But the man who was put in charge of Stark Industries has plans of his own to take over Tony's technology for other matters.",
  Language: "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
  Country: "United States, Canada",
  Awards: "Nominated for 2 Oscars. 22 wins & 73 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "7.9/10" },
    { Source: "Rotten Tomatoes", Value: "94%" },
    { Source: "Metacritic", Value: "79/100" },
  ],
  Metascore: "79",
  imdbRating: "7.9",
  imdbVotes: "1,082,676",
  imdbID: "tt0371746",
  Type: "movie",
  DVD: "30 Sep 2008",
  BoxOffice: "$319,034,126",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

// movieData = {
//   Title:
//     "Don't Be a Menace to South Central While Drinking your Juice in the Hood",
//   Year: "1996",
//   Rated: "R",
//   Released: "12 Jan 1996",
//   Runtime: "89 min",
//   Genre: "Comedy, Crime",
//   Director: "Paris Barclay",
//   Writer: "Shawn Wayans, Marlon Wayans, Phil Beauman",
//   Actors: "Shawn Wayans, Marlon Wayans, Keenen Ivory Wayans",
//   Plot: '"Don\'t Be a Menace to South Central While Drinking your Juice in the Hood" is a parody of several U.S. films about being in the \'Hood\', for instance "Boyz n the Hood", "South Central", "Menace II Society", "Higher Learning" and "Juice". We follow Ashtray as he returns to the place he grew up in and meet his father and his basket-case friends. Crazy stuff happens. For example, Ashtray is older than his father and his best friend Loc Dog\'s grandmother is a trigger-happy old lady who blames her eccentric-looking kid for not being tough enough.',
//   Language: "English, Spanish",
//   Country: "United States",
//   Awards: "1 nomination",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BY2NmM2M2MWItNjdlMC00ZWI3LTkwODUtZDNkYWZjYjgzZjY3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//   Ratings: [
//     { Source: "Internet Movie Database", Value: "6.5/10" },
//     { Source: "Rotten Tomatoes", Value: "32%" },
//     { Source: "Metacritic", Value: "53/100" },
//   ],
//   Metascore: "53",
//   imdbRating: "6.5",
//   imdbVotes: "58,888",
//   imdbID: "tt0116126",
//   Type: "movie",
//   DVD: "20 Sep 2005",
//   BoxOffice: "$20,109,115",
//   Production: "N/A",
//   Website: "N/A",
//   Response: "True",
// };

// movieData = {
//   Title: "The Lion King",
//   Year: "1994",
//   Rated: "G",
//   Released: "24 Jun 1994",
//   Runtime: "88 min",
//   Genre: "Animation, Adventure, Drama",
//   Director: "Roger Allers, Rob Minkoff",
//   Writer: "Irene Mecchi, Jonathan Roberts, Linda Woolverton",
//   Actors: "Matthew Broderick, Jeremy Irons, James Earl Jones",
//   Plot: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
//   Language: "English, Swahili, Xhosa, Zulu",
//   Country: "United States",
//   Awards: "Won 2 Oscars. 43 wins & 35 nominations total",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
//   Ratings: [
//     { Source: "Internet Movie Database", Value: "8.5/10" },
//     { Source: "Rotten Tomatoes", Value: "93%" },
//     { Source: "Metacritic", Value: "88/100" },
//   ],
//   Metascore: "88",
//   imdbRating: "8.5",
//   imdbVotes: "1,089,792",
//   imdbID: "tt0110357",
//   Type: "movie",
//   DVD: "04 Oct 2011",
//   BoxOffice: "$422,783,777",
//   Production: "N/A",
//   Website: "N/A",
//   Response: "True",
// };

// console.log(movieData.Title.length);
