import { Movie } from "@/types/Movie";
import Image from "next/image";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group">
      <div className="relative h-80 w-full overflow-hidden">
        {movie?.photo_url ? (
        <Image
            src={movie.photo_url}
            alt={movie.title}
            fill 
            className="object-cover group-hover:opacity-80 transition"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  );
}
