import React from 'react';

const Sidenav = ({ currentSection, theorems, onTheoremSelect, type }) => {
  return (
    <div className="w-1/4 max-h-screen bg-gray-200 overflow-y-auto px-4 pb-4">
      <h2 className="text-2xl font-medium mb-4 text-center sticky top-0 bg-gray-200 z-10 py-4">
        {currentSection}
      </h2>
      {theorems.map((theoremID) => (
        <button
          key={theoremID}
          onClick={() => onTheoremSelect(`${type}${theoremID}`)}
          className="block w-full py-2 my-2 border-b border-gray-300 hover:bg-gray-300"
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} {theoremID}
        </button>
      ))}
    </div>
  );
};

export default Sidenav;
