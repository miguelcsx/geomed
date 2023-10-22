import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleGoBack } from "../lib/utils";

const CollapseMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="menu bg-slate-300 rounded-lg text-slate-800 absolute top-4 left-4">
        <button
          className={`menu-button px-4 py-2 rounded-lg hover:bg-slate-400 transform transition-transform ${menuOpen ? "rotate-0" : "rotate-180"}`}
          onClick={toggleMenu}
        >
          {menuOpen ? "✕" : "☰"} {/* Toggle between Hamburger and Close icons */}
        </button>
        {menuOpen && (
          <>
            <button
              className="back-arrow px-4 py-2 rounded-lg hover:bg-slate-400"
              onClick={handleGoBack}
            >
              ←
            </button>
            <Link to="/">
              <button className="home-link px-4 py-2 rounded-lg hover:bg-slate-400">
                ⌂
              </button>
            </Link>
          </>
        )}

      </div>
    </div>
  );
};

export default CollapseMenu;
