import MovieCard from "@/components/movies/MovieCard";
import InfoIcon from "@/icons/InfoIcon";
import MovieIcon from "@/icons/MovieIcon";
import StarIcon from "@/icons/StarIcon";
import { getMovies } from "@/services/movies.services";
import Link from "next/link";

export default async function Home() {
  const moviesResponse = await getMovies(1);

  // Solo mostramos 5 como preview
  const featuredMovies = moviesResponse.data.slice(0, 10);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* HERO */}
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center px-10"
        style={{
          backgroundImage:
            "url(https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl font-bold mb-6">PelisUNCP</h1>

          <p className="text-gray-300 text-lg mb-8">
            Tu plataforma universitaria para descubrir, explorar y disfrutar las
            mejores películas en un solo lugar.
          </p>

          <div className="flex gap-4">
            <Link
              href="/peliculas"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Explorar Cartelera
            </Link>

            <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition">
              Conocer más
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN INFORMACIÓN */}
      <section className="px-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">¿Qué es PelisUNCP?</h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          PelisUNCP es una plataforma pensada para estudiantes y amantes del
          cine. Permite explorar películas, consultar información detallada,
          calificar y mantener un registro de tus favoritas.
        </p>
      </section>

      {/* PREVIEW DE PELÍCULAS */}
      <section className="px-10 pb-20">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-3xl font-bold">Tendencias</h3>

          <Link
            href="/peliculas"
            className="text-red-500 hover:text-red-400 transition"
          >
            Ver todas →
          </Link>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* SECCIÓN BENEFICIOS */}
      <section className="bg-gray-900 py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-10">¿Por qué usar PelisUNCP?</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-text-primary">
          <div>
            <div className="flex items-center justify-center text-white gap-2 text-xl font-semibold mb-3">
              <MovieIcon />
              <p>Catálogo actualizado</p>
            </div>
            <p className="text-gray-400">
              Descubre películas recientes y clásicos del cine.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center text-white gap-2 text-xl font-semibold mb-3">
              <StarIcon />
              <p>Sistema de calificación</p>
            </div>
            <p className="text-gray-400">
              Valora tus películas favoritas y revisa opiniones.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center text-white gap-2 text-xl font-semibold mb-3">
              <InfoIcon />
              <span>Información detallada</span>
            </div>

            <p className="text-gray-400">
              Consulta reparto, sinopsis y más datos relevantes.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PelisUNCP
      </footer>
    </div>
  );
}
