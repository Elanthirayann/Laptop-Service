import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import logo from "C:\\Users\\elant\\Downloads\\logo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side: Logo + Brand */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Fixify Hub Logo"
              className="h-30 w-24 object-contain"
            />
            <span className="text-3xl text-black-900 rubik-mono-one-regular">
              FIXIFY HUB
            </span>
          </div>

          {/* Right side: Nav links (Desktop) */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href} 
                smooth={true}
                duration={300}
                className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-150 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href} 
                smooth={true}
                duration={300}
                className="block px-3 py-2 rounded-md text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-150 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
