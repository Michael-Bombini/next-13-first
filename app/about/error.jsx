"use client";

export default function error({ error, reset }) {
  return (
    <div>
      <div>{error.message}</div>
      <button onClick={() => reset()}></button>
    </div>
  );
}
