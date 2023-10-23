import React from 'react';

const Sidenav = ({ currentSection, theorems, onTheoremSelect, type, title }) => {
  return (
    <div className="w-1/4 max-h-screen bg-slate-200 overflow-y-auto px-4 pb-4">
      <h2 className="text-xl lg:text-2xl font-medium mb-4 text-center sticky top-0 bg-slate-200 z-10 py-4">
        {currentSection}
      </h2>
      {theorems.map((theoremID) => (
        <button
          key={theoremID}
          onClick={() => onTheoremSelect(`${type}${theoremID}`)}
          className="block w-full py-2 my-2 border-b border-slate-300 hover:bg-slate-300"
        >
          {title ? title[theoremID] : `${type.charAt(0).toUpperCase() + type.slice(1)} ${theoremID}`}
        </button>
      ))}
    </div>
  );
};

export default Sidenav;
