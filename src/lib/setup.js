// lib/setup.js

import * as d3 from 'd3';

const Setup = () => {
    const svg = d3.select("#canvas");

    let centerX, centerY;

    function updateCenter() {
        const width = +svg.node().clientWidth;
        const height = +svg.node().clientHeight;

        centerX = width / 2;
        centerY = height / 2;
    };

    updateCenter();

    window.addEventListener("resize", updateCenter);

    return { svg, centerX, centerY };
};

export default Setup;