const Section = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center md:justify-between text-center md:text-left">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Halo, Saya <br />
          <span className="text-[#fca311] text-6xl">Salafy Abdulah Yusuf</span>
        </h2>
        <p className="mt-4 text-Black-300 text-xl">
          Seorang pengembang web yang bersemangat, mengkhususkan diri dalam menciptakan pengalaman pengguna yang indah dan fungsional. 
          Saya suka mengubah ide menjadi kenyataan melalui kode.
        </p>
        <a
          href="#proyek"
          className="mt-8 inline-block bg-[#fca311] text-[#460E0E] font-semibold py-3 px-8 rounded-full hover:bg-[#ffb74d] transition-colors duration-300"
        >
        <p className="text-xl">Lihat Portfolio</p>
        </a>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Seseorang sedang coding di laptop"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Section;
