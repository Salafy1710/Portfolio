const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Apa kata orang tentang saya
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <div className="bg-[#721919] rounded-lg p-6">
          <p className="mt-4 text-white italic text-xl">
            "Salafy adalah developer yang brilian. Perhatiannya terhadap detail
            dan kemampuannya untuk memecahkan masalah kompleks benar-benar luar
            biasa. Dia menyelesaikan proyek kami lebih cepat dari jadwal!"
          </p>
          <p className="mt-4 font-semibold text-[#fca311] text-lg">- Jane Smith, CEO</p>
        </div>

        <div className="bg-[#721919] rounded-lg p-6">
          <p className="mt-4 text-white italic text-xl">
            "Saya sudah bekerja dengan banyak developer, tapi Salafy sangat
            menonjol. Dia tidak hanya terampil, tetapi juga komunikator yang
            luar biasa. Sangat direkomendasikan!"
          </p>
          <p className="mt-4 font-semibold text-[#fca311] text-lg">
            - Mark Dividdd, Project Manager
          </p>
        </div>

        <div className="bg-[#721919] rounded-lg p-6">
          <p className="mt-4 text-white italic text-xl">
            "Kualitas kode yang Salafy tulis sangat bagus. Dia profesional sejati
            yang selalu mengutamakan pengguna. Senang bisa berkolaborasi
            dengannya."
          </p>
          <p className="mt-4 font-semibold text-[#fca311] text-lg">
            - Emily Chen, Designer
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
