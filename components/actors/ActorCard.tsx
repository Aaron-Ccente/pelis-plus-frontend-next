"use client";
import Image from "next/image";
import ActorViewInfo from "./ActorViewInfo";
import { useState } from "react";
import { Actor } from "@/types/Actors";

interface Props {
  actor: Actor;
}

export function ActorCard({ actor }: Props) {
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
          {actor?.image_actor ? (
            <Image
              src={actor.image_actor}
              alt={`imagen del actor ${actor.name}`}
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
            {actor.biography}
          </h2>

          <p className="text-sm text-gray-400 mb-2">
            {new Date(actor.date_of_birth).getFullYear()}
          </p>

        </div>
      </div>

      {/* Muestra información adicional de la pelicula si se quiere mas información */}
      {viewModal && <ActorViewInfo data={actor} close={ViewInfoMovie} />}
    </>
  );
}
