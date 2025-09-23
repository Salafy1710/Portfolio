const Skills = () => {
  return (
    <section id="keahlian" className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold mb-12 text-black">Keahlian Saya</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Frontend */}
        <div className="bg-[#721919] p-6 rounded-lg text-center w-full md:w-1/3 lg:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-[#fca311] mx-auto mb-4"
          >
            <path d="M17.25 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15.75 4.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM11.25 4.5a.75.75 0 100-1.5.75.75 0 000 1.5zM13.5 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zM11.25 9a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM13.5 11.25a.75.75 0 100-1.5.75.75 0 000 1.5zM15.75 11.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM11.25 11.25a.75.75 0 100-1.5.75.75 0 000 1.5zM9 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM13.5 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15.75 13.5a.75.75 0 100-1.5.75.75 0 000 1.5zM11.25 15.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM13.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM7.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9 18a.75.75 0 100-1.5.75.75 0 000 1.5zM11.25 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM13.5 18a.75.75 0 100-1.5.75.75 0 000 1.5zM15.75 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM11.25 20.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
            <path
              fillRule="evenodd"
              d="M4.5 7.5a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3h-12a3 3 0 01-3-3v-12zM7.5 6a1.5 1.5 0 00-1.5 1.5v9A1.5 1.5 0 007.5 18h9A1.5 1.5 0 0018 16.5v-9A1.5 1.5 0 0016.5 6h-9z"
              clipRule="evenodd"
            />
          </svg>

          <h3 className="text-3xl font-semibold mb-4 text-white">Frontend</h3>
          <ul className="space-y-2 text-gray-300 text-xl">
            <li>HTML5 &amp; CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-[#721919] p-6 rounded-lg text-center w-full md:w-1/3 lg:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-[#fca311] mx-auto mb-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 3A.75.75 0 001.5 3.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM2.25 9A.75.75 0 001.5 9.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM2.25 15A.75.75 0 001.5 15.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM9.75 3A.75.75 0 009 3.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM9.75 9A.75.75 0 009 9.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM9.75 15A.75.75 0 009 15.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM17.25 3A.75.75 0 0016.5 3.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM17.25 9A.75.75 0 0016.5 9.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM17.25 15A.75.75 0 0016.5 15.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM2.25 21A.75.75 0 001.5 21.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM9.75 21A.75.75 0 009 21.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5zM17.25 21A.75.75 0 0016.5 21.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5z"
            />
          </svg>

          <h3 className="text-3xl font-semibold mb-4 text-white">Backend</h3>
          <ul className="space-y-2 text-gray-300 text-xl">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>PHP</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
