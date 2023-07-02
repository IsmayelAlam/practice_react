export default function MovieList() {
  return (
    <div className="w-9/12 h-[calc(100%-4rem)] bg-slate-200 p-10 flex flex-wrap">
      <img
        src={movieData.Poster}
        alt={`${movieData.Poster} movie poster`}
        className="w-[300px] h-fit rounded shadow mr-5"
      />

      <div className="flex flex-col gap-2">
        <h2 className=" font-bold text-5xl">{movieData.Title}</h2>
        <p>Year: {movieData.Year}</p>
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

      <div>
        <p>IMDb Rating: {movieData.imdbRating}</p>
        <p>IMDb votes: {movieData.imdbVotes}</p>
        <p>Box Office: {movieData.BoxOffice}</p>
      </div>

      <div>
        <h3 className="font-bold">Plot</h3>
        <p>{movieData.Plot}</p>
      </div>
    </div>
  );
}

const movieData = {
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
