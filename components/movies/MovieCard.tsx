"use client";
import { Movie } from "@/types/Movie";
import Image from "next/image";
import MovieViewInfo from "./MovieViewInfo";
import { useState } from "react";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  const [viewModal, setViewModal] = useState<true | false>(false);

  const ViewInfoMovie = () => {
    setViewModal(!viewModal);
  };

  return (
    <>
      <div
        role="button"
        className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group cursor-pointer"
        onClick={ViewInfoMovie}
      >
        <div className="relative h-96 w-full overflow-hidden">
          {movie?.photo_url ? (
            <Image
              src={movie.photo_url}
              alt={movie.title}
              fill
              loading="eager"
              className="object-fill group-hover:opacity-80 transition"
            />
          ) : (
            <div>No hay imagen disponible</div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-white truncate">
            {movie.title}
          </h2>

          <p className="text-sm text-gray-400 mb-2">
            {new Date(movie.release_year).getFullYear()}
          </p>

          <p className="text-sm text-gray-300 line-clamp-3 mb-3">
            {movie.description}
          </p>

          {movie.trailer_url !== "0" && (
            <a
              href={movie.trailer_url}
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs px-4 py-2 rounded-md transition"
            >
              Ver tráiler
            </a>
          )}
        </div>
      </div>

      {/* Muestra información adicional de la pelicula si se quiere mas información */}
      {viewModal && <MovieViewInfo data={movie} close={ViewInfoMovie} />}
    </>
  );
}
