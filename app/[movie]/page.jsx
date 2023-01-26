import Image from "next/image";
import React from "react";

export default async function movieDetail({ params }) {
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  const img = "https://image.tmdb.org/t/p/original";
  return (
    <div className="text-3xl">
      <h1>{res.title}</h1>
      <h2>{res.release_date}</h2>
      <h3>{res.status}</h3>
      <Image src={img + res.backdrop_path} width={300} height={300} />
    </div>
  );
}
