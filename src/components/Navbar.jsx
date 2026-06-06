export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      w-[95%]
      max-w-7xl
      z-50
      glass
      rounded-full
      px-8
      py-4
      "
    >
      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-black">
          <span className="gradient-text">Adrian.</span>
        </h1>

        <div className="hidden md:flex items-center gap-8 text-white">

          <a href="#" className="hover:text-[#52e3a5] transition">Home</a>
          <a href="#about" className="hover:text-[#52e3a5] transition">About</a>
          <a href="#projects" className="hover:text-[#52e3a5] transition">Projects</a>
          <a href="#skills" className="hover:text-[#52e3a5] transition">Skills</a>
          <a href="#certificate" className="hover:text-[#52e3a5] transition">Certificates</a>
          <a href="#contact" className="hover:text-[#52e3a5] transition">Contact</a>

        </div>

        {/* CV BUTTON */}
        <a
          href="/Hinayon-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-6
          py-3
          rounded-full
          bg-[#52e3a5]
          text-black
          font-bold
          hover:scale-105
          transition
          "
        >
          Download CV
        </a>

      </div>
    </nav>
  );
}