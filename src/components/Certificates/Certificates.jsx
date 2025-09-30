const Certificates = () => {
  return (
    <section id="sertifikat" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Sertifikat & Pencapaian</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Sertifikat 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/Skilvul.png"
              alt="Sertifikat Skilvul React Basic"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">React Basic</h3>
            <p className="text-gray-600">Skilvul - 2025</p>
          </div>

          {/* Sertifikat 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/Skilvul-JS.png"
              alt="Sertifikat Skilvul Javascript Basic"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Javascript Basic</h3>
            <p className="text-gray-600">Skilvul - 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
