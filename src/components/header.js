import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
       

        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <Link
            className="flex font-large items-center text-white mb-0 md:mb-0"
            to="/home"
          >
            <span className="ml-10 text-3xl font-serif hover:scale-110">
              Home
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center justify-center">
            <Link
              className="flex title-font font-large items-center text-white mb-0 md:mb-0"
              to="/bookmarks"
            >
              <span className="ml-10 text-3xl font-serif hover:scale-110">
                Bookmarks
              </span>
            </Link>
          </nav>
        </div>
       
      </header>
      
    </div>
    
  );
}

export default Header;
