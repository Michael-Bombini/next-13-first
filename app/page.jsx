import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-blue-500 py-2 ">hi next 13</h1>
      <div className="grid gap-16 sm:grid-cols-1  md:grid-cols-3 justify-center items-center text-center">
        {res.results.map((movie) => (
          <Movie
            title={movie.title}
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            release={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}
