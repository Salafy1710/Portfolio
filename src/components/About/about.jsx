import { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="tentang"
      className="container mx-auto px-4 py-20 text-center"
    >
      <h2 className="text-3xl font-bold mb-12 text-black text-4xl">Tentang Saya</h2>

      <div
        className={`flex flex-col md:flex-row items-center justify-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="md:w-1/2 mb-8 md:mb-0 md:px-10">
          <p className="text-xl text-black-300 mb-4">
            Saya seorang pengembang berpengalaman dengan keahlian dalam{" "}
            <strong className="text-black"> teknologi Frontend dan Backend</strong> 
            . Keterampilan saya meliputi HTML, CSS, JavaScript, React, dan Node.js. Saya selalu bersemangat untuk belajar dan menerima tantangan baru.
          </p>

          <p className="text-xl text-black-300">
            Perjalanan saya di dunia teknologi dimulai dari rasa ingin tahu tentang cara kerja situs web,
            yang dengan cepat berubah menjadi passion. Saya mendapat kehormatan untuk mengerjakan berbagai proyek,
            dari situs pribadi kecil hingga aplikasi web skala besar. Saya percaya pada penulisan kode yang bersih,
            efisien, dan mudah dipelihara.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
