import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import MyPhoto from "@/assets/shadab-photo - Copy.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Experiences", href: "Experiences" },
    { label: "Contact", href: "contact" },
    // { label: "Projects", href: "projects" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-[5000] flex justify-center">
      <nav
        className="flex items-center justify-between w-[90%] max-w-4xl px-6 py-3 
        border border-white/25 rounded-full backdrop-blur-md bg-[rgba(19,19,19,0.8)]
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
      >
        {/* Logo */}
        <div className="text-white font-semibold text-lg cursor-pointer">
          <ScrollLink to="home" smooth={true} duration={600} offset={-80}>
            <img
              src={MyPhoto}
              alt="Shadab.dev Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-white object-cover shadow-md"
            />
          </ScrollLink>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {items.map((item) => (
            <motion.li key={item.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.97 }}>
              <ScrollLink
                to={item.href}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="nav-active"
                className="nav-link"
              >
                <motion.div
                  animate={{
                    backgroundColor: "transparent",
                    color: "#ffffff",
                  }}
                  whileHover={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    boxShadow:
                      "0px 0px 10px rgba(255,255,255,0.25), 0px 0px 15px rgba(255,255,255,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="px-5 py-2 rounded-full cursor-pointer text-sm font-semibold tracking-wide"
                >
                  {item.label}
                </motion.div>
              </ScrollLink>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 w-[90%] max-w-4xl bg-[rgba(19,19,19,0.9)] border border-white/25 rounded-2xl
            backdrop-blur-md shadow-lg text-white py-6 flex flex-col items-center space-y-4 md:hidden"
          >
            {items.map((item) => (
              <ScrollLink
                key={item.href}
                to={item.href}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-2 text-lg font-medium rounded-md hover:bg-white hover:text-black transition-all"
              >
                {item.label}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
