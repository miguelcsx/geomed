// src/components/BackButton.js
import React from "react";
import { Link } from "react-router-dom";
import { handleGoBack } from "../lib/utils";

const BackButton = () => {
  return (

    <button
      className="bg-gray-300 px-4 py-2 rounded-lg text-gray-800 hover:bg-gray-400 absolute top-4 left-4"
      onClick={handleGoBack}>
      Back
    </button>

  );
};

export default BackButton;
