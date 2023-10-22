import React, { useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const Description = ({ theoremId, descriptions }) => {
    useEffect(() => {
        // Ensure that the component has mounted before accessing DOM elements
        const baseNode = document.getElementById('geometryDescription');
        if (baseNode && theoremId) {
            const desc = String(descriptions[theoremId]);
            katex.render(desc, baseNode, {
                throwOnError: false,
            });
        }
    }, [theoremId, descriptions]);

    return (
        <h3 id="geometryDescription" className="text-base lg:text-xl font-semibold text-center flex items-center justify-center py-6 lg:py-12"></h3>
    );
};

export default Description;
