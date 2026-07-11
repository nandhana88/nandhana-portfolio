import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-500 cursor-pointer">
          Nandhana<span className="text-white"></span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="#"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition"
        >
          Resume
        </a>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-slate-900">
          <ul className="flex flex-col text-center py-5 gap-5">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenu(false)}
                  className="hover:text-blue-400"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="bg-blue-600 px-4 py-2 rounded-full inline-block"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;