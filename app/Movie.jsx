import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Movie({ title, release, poster, id }) {
  const img = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release}</h2>
      <Link href={`/${id}`}>
        <Image src={img + poster} alt="" width={300} height={300} />
      </Link>
    </div>
  );
}
