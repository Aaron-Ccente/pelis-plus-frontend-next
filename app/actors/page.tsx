import { ActorCard } from '@/components/actors/ActorCard';
import { getActors } from '@/services/actors.services';

export default async function page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page ?? 1);
  const ActorsResponse = await getActors(page);

  return (
    <div className="min-h-screen bg-black px-10 py-12">
      
      <h1 className="text-3xl font-bold text-white mb-10">
        Cartelera
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {ActorsResponse.data.map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))}
      </div>

      <div className="text-center text-gray-400 mt-12">
        Página {ActorsResponse.current_page} de{" "}
        {ActorsResponse.last_page}
      </div>
    </div>
  );
}
