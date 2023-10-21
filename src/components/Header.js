// src/components/Header.js

import React from "react";

const Header = ({title, description}) => {
    return (
        <>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md text-center">
                {description}
            </p>
        </>
    );
}

export default Header;