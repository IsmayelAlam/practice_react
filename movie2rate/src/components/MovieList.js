// import { BsFillStarFill } from "react-icons/bs";

export default function MovieList() {
  return (
    <div className="w-9/12 h-[calc(100%-4rem)] bg-slate-200 py-10 px-16 rounded-br-xl grid grid-cols-3 gap-5">
      <img
        src={movieData.Poster}
        alt={`${movieData.Poster} movie poster`}
        className="w-[300px] h-[450px] rounded shadow"
      />

      <div className="flex flex-col gap-2 w-fit justify-self-start -ml-12">
        <div className="flex items-end gap-3 justify-between">
          <h2
            className={`font-bold w-96 ${
              movieData.Title.length > 25 ? "truncate text-2xl" : "text-4xl"
            }`}
          >
            {movieData.Title}
          </h2>
          <span>{movieData.Year}</span>
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

      <div className="justify-self-end flex flex-col text-center justify-between">
        <div className="bg-indigo-500 rounded shadow p-5 h-fit text-white">
          <p>IMDb Rating: {movieData.imdbRating}</p>
          <p>IMDb votes: {movieData.imdbVotes}</p>
          <p>Box Office: {movieData.BoxOffice}</p>
        </div>
        <div className=" flex flex-col">
          <button className=" bg-violet-500 text-white px-5 py-2 m-2 rounded-full shadow-md ">
            + Add Bookmark
          </button>
          <a
            className=" bg-violet-500 text-white px-5 py-2 m-2 rounded-full shadow-md "
            href={`https://www.imdb.com/title/${movieData.imdbID}/videogallery/content_type-trailer/`}
            target="_blank"
            rel="noreferrer"
          >
            Watch trailer
          </a>
        </div>
      </div>

      <div className="bg-indigo-400 rounded shadow p-5 text-ellipsis overflow-hidden w-full h-64 col-span-3">
        <h3 className="font-bold text-white text-2xl">Plot</h3>
        <p className=" first-letter:text-2xl ">{movieData.Plot}</p>
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

console.log(movieData.Title.length);
