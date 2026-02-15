import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="fixed w-full bg-black/90 flex h-14 justify-center items-center px-10 text-white z-50">
          <div className="w-1/4">Logo</div>
          <div className="w-3/4 flex justify-end gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/movies">Peliculas</Link>
            </li>
            <li>
              <Link href="/actors">Actores</Link>
            </li>
            <li className="bg-red-600 hover:bg-red-700 cursor-pointer px-2 py-1 rounded-lg">
              <Link href="http://localhost:8001/admin/login">Iniciar Sesión</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
