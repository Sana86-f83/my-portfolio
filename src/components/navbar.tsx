'use client'

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold cursor-pointer">MyWebsite</h1>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links for Desktop */}
        <ul className={`hidden md:flex space-x-6`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Links for Mobile */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-700 text-center space-y-4 p-4`}
      >
        <li>
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" onClick={toggleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
/* .header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  margin-top: 10px;
}
.header-rightdiv {
  width: 40%;
  padding: 12px;
}
.header-links {
  display: flex;
  justify-content: space-around;
}
.header-links li {
  list-style: none;
}
.navbar-li {
  text-decoration: none;
  color: #eeeeee;
  font-weight: bold;
  font-size: 22px;
}
.active {
  color: rgb(220, 95, 0);
  text-decoration: none;
  font-weight: bold;
  font-size: 25px;
}
.active:hover {
  color: rgb(238, 238, 238);
  text-decoration-line: underline;
  text-underline-offset: calc(6px);
  cursor: pointer;
}

.navbar-li:hover {
  color: rgb(238, 238, 238);
  text-underline-offset: calc(6px);
  text-decoration-line: underline;
  cursor: pointer;
}
.logo {
  font-size: 40px;
  font-weight: bold;
  margin-left: 20px;
}
.hambergerIcon {
  display:none;
}
.logo:hover {
  color: rgb(238, 238, 238);
  text-decoration-line: underline;
  text-underline-offset: calc(6px);

  cursor: pointer;
}
.mobile-links {
  display:none;
}
@media screen and (min-width: 100px) and (max-width: 750px) {
  .header {
    width: 100%;
    display:flex;
    
  }
  .header-rightdiv {
    width: 100%;
  }
  .header-links {
    display:none;
  }
  .logo {
    font-size: 30px;
    display: flex;
    font-weight: bold;

  }
  .hambergerIcon {
    display:inline-flex;
    margin-left: 40px;
    
  }
  /* .res-links {
    display: flex;
    text-align: center;
  } */
