import LoadingIcon from "@/icons/LoadingIcon";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black px-10 py-12">
      <h1 className="text-3xl font-bold text-white mb-10">Cartelera</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative h-80 w-full flex items-center justify-center">
                <LoadingIcon className="w-20 h-20 text-zinc-600 animate-pulse" />
            </div>

            {/* Contenido */}
            <div className="p-4">
              <h2 className="text-lg text-center font-semibold text-white truncate">
                Cargando...
              </h2>
              <p className="text-sm text-gray-400 mb-2"></p>
              <p className="text-sm text-gray-300 line-clamp-3 mb-3"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
