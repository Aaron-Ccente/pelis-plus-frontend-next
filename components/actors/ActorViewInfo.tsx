import { Actor } from "@/types/Actors";
import Image from "next/image";

interface Props {
  data: Actor;
  close: () => void;
}

export default function MovieViewInfo({ data, close }: Props) {
  return (
    <div className="fixed bg-black/60 z-20 w-full min-h-screen top-0 left-0 ">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg max-w-120">
        <div className="relative min-h-96 w-full overflow-hidden">
          {data?.image_actor ? (
            <Image
              src={data.image_actor}
              alt={`Imagen del actor ${data.name}`}
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
            {data.name}
          </h2>

          <p className="text-sm text-gray-300 line-clamp-3 mb-3">
            {data.biography}
          </p>

          <p className="text-sm text-gray-400 mb-2">
            {new Date(data.date_of_birth).getFullYear()}
          </p>

        </div>
        <button
          type="button"
          onClick={close}
          className="absolute top-1 right-1 cursor-pointer px-3 py-2 rounded-lg bg-red-500 text-white"
        >
          Cerrar
        </button>
      </div>
    </div>
    </div>
  );
}
