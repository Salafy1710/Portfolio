const Footer = () => {
  return (
    <footer id="kontak" className="bg-[#721919] py-8 text-center">
      <div className="container mx-auto px-4 text-white text-xl">
        <p>&copy; 2025 Salafy Abdulah Yusuf. Semua Hak Dilindungi Undang-Undang.</p>
        <div className="mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/salafy-abdulah-yusuf-463628377/"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
