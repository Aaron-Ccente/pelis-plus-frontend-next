import MovieCard from "@/components/movies/MovieCard";
import { getMovies } from "@/services/movies.services";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page ?? 1);
  const moviesResponse = await getMovies(page);

  return (
    <div className="min-h-screen bg-black px-10 py-12">
      
      <h1 className="text-3xl font-bold text-white mb-10">
        Cartelera
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {moviesResponse.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="text-center text-gray-400 mt-12">
        Página {moviesResponse.current_page} de{" "}
        {moviesResponse.last_page}
      </div>
    </div>
  );
}
