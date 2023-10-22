// src/components/Header.js

import React from "react";

const Header = ({title, description}) => {
    return (
        <div className="text-center mt-20 md:mt-10">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md px-6 mb:px-auto">
                {description}
            </p>
        </div>
    );
}

export default Header;