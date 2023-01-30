import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-gradient-to-r from-[#2E2283] to-[#5829AD]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            class="flex  font-large items-center text-white mb-0 md:mb-0"
            to="/home"
          >
            <span class=" ml-10 text-3xl font-serif  hover:text-blue">
              Home
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center  justify-center">
            <Link
              class="flex title-font font-large items-center text-white mb-0 md:mb-0"
              to="/bookmarks"
            >
              <span class=" ml-10 text-3xl font-serif ">Bookmarks</span>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default Header;
