const Projects = () => {
  return (
    <section id="proyek" className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Proyek Saya</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Proyek Alpha */}
        <div className="bg-[#721919] rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
            alt="Proyek Alpha"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-3xl font-semibold mb-2 text-white">Proyek Alpha</h3>
            <p className="text-gray-300 text-xl">
              Sebuah platform e-commerce responsif yang dibuat dengan React dan Tailwind CSS.
              Fitur-fiturnya meliputi keranjang belanja, daftar produk, dan otentikasi pengguna.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-[#fca311] font-semibold hover:underline"
            >
              Lihat Proyek &rarr;
            </a>
          </div>
        </div>

        {/* Proyek Beta */}
        <div className="bg-[#721919] rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop"
            alt="Proyek Beta"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-3xl font-semibold mb-2 text-white">Proyek Beta</h3>
            <p className="text-gray-300 text-xl">
              Aplikasi pelacak kesehatan yang mengutamakan mobile, dirancang untuk pengalaman pengguna
              yang mulus. Dikembangkan menggunakan Node.js untuk API backend.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-[#fca311] font-semibold hover:underline"
            >
              Lihat Proyek &rarr;
            </a>
          </div>
        </div>

        {/* Proyek Gamma */}
        <div className="bg-[#721919] rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop"
            alt="Proyek Gamma"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-3xl font-semibold mb-2 text-white">Proyek Gamma</h3>
            <p className="text-gray-300 text-xl">
              Dasbor visualisasi data interaktif untuk sebuah perusahaan keuangan.
              Menggunakan D3.js untuk membuat bagan dan grafik yang dinamis dan informatif.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-[#fca311] font-semibold hover:underline"
            >
              Lihat Proyek &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
