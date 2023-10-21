import React from 'react';

const Sidenav = ({ currentSection, postulates, onPostulateSelect, type }) => {
  return (
    <div className="w-1/4 max-h-screen bg-gray-200 overflow-y-auto px-4 pb-4">
      <h2 className="text-2xl font-medium mb-4 text-center sticky top-0 bg-gray-200 z-10 py-4">
        {currentSection}
      </h2>
      {postulates.map((postulateID) => (
        <button
          key={postulateID}
          onClick={() => onPostulateSelect(`postulate${postulateID}`)}
          className="block w-full py-2 my-2 border-b border-gray-300 hover:bg-gray-300"
        >
          {type} {postulateID}
        </button>
      ))}
    </div>
  );
};

export default Sidenav;
