export default function Loading() {
  return (
    <div className="bg-black min-h-screen">
      {/* HERO SKELETON */}
      <section className="relative h-[85vh] flex items-center px-10 bg-loading-primary">
        <div className="max-w-2xl w-full space-y-6">
          <div className="h-12 w-2/3 bg-loading-secondary rounded" />
          <div className="h-5 w-full bg-loading-secondary  rounded" />
          <div className="h-5 w-5/6 bg-loading-secondary rounded" />
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 bg-loading-secondary  rounded-lg" />
            <div className="h-12 w-40 bg-loading-secondary  rounded-lg" />
          </div>
        </div>
      </section>

      {/* SECCIÓN INFORMACIÓN */}
      <section className="px-10 py-20 text-center space-y-6">
        <div className="h-10 w-96 bg-loading-secondary rounded mx-auto" />
        <div className="h-5 w-2/3 bg-loading-secondary rounded mx-auto" />
        <div className="h-5 w-1/2 bg-loading-secondary rounded mx-auto" />
      </section>

      {/* PREVIEW PELÍCULAS */}
      <section className="px-10 pb-20">
        <div className="flex justify-between items-center mb-10">
          <div className="h-8 w-40 bg-loading-secondary rounded" />
          <div className="h-6 w-24 bg-loading-secondary rounded" />
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-72 bg-loading-secondary rounded-xl" />
              <div className="h-4 w-3/4 bg-loading-secondary rounded" />
              <div className="h-4 w-1/2 bg-loading-secondary rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-loading-secondary py-20 px-10">
        <div className="h-10 w-80 bg-loading-tertiary rounded mx-auto mb-10" />

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4 text-center">
              <div className="h-6 w-48 bg-loading-tertiary  rounded mx-auto" />
              <div className="h-4 w-full bg-loading-tertiary rounded" />
              <div className="h-4 w-4/5 bg-loading-tertiary rounded mx-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-loading-tertiary  py-6 text-center">
        <div className="h-4 w-40 bg-loading-tertiary rounded mx-auto" />
      </footer>
    </div>
  );
}