import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="bg-transparent shadow-sm">
      <nav className="w-full bg-black px-6 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Judul */}
          <h1 className="text-2xl font-bold text-white">Portfolio Salafy</h1>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#tentang" className="hover:text-gray-300">Tentang</a>
            <a href="#keahlian" className="hover:text-gray-300">Keahlian</a>
            <a href="#proyek" className="hover:text-gray-300">Proyek</a>
            <a href="#kontak" className="hover:text-gray-300">Kontak</a>
          </div>

          {/* Tombol Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
            >
              {/* Icon Hamburger */}
              <svg
                className={`h-6 w-6 ${open ? "hidden" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              {/* Icon Close */}
              <svg
                className={`h-6 w-6 ${open ? "" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile dengan animasi */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black p-4 text-center shadow-md rounded-b-md">
            <a
              href="#tentang"
              className="block py-2 hover:bg-[#962525] rounded transition-colors duration-200 text-white"
              onClick={toggleMenu}
            >
              Tentang
            </a>
            <a
              href="#keahlian"
              className="block py-2 hover:bg-[#962525] rounded transition-colors duration-200 text-white"
              onClick={toggleMenu}
            >
              Keahlian
            </a>
            <a
              href="#proyek"
              className="block py-2 hover:bg-[#962525] rounded transition-colors duration-200 text-white"
              onClick={toggleMenu}
            >
              Proyek
            </a>
            <a
              href="#kontak"
              className="block py-2 hover:bg-[#962525] rounded transition-colors duration-200 text-white"
              onClick={toggleMenu}
            >
              Kontak
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
