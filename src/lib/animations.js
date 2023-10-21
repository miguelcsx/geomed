// src/lib/animations.js
import * as d3 from 'd3';

export function animatePopup(circle) {
    circle
        .transition()
        .duration(500)
        .attr("r", 15)
        .transition()
        .duration(500)
        .attr("r", 10);
};

export function loopPopup(circle) {
    circle
        .transition()
        .duration(500)
        .attr("r", 15)
        .transition()
        .duration(500)
        .attr("r", 10)
        .on("end", function () {
            loopPopup(d3.select(this));
        });
};