import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Setup from '../../../setup';
import { updatePoint, extendPoint } from '../../../utils';
import { animatePopup } from '../../../animations';

const Postulate8 = () => {
    const { svg, centerX, centerY } = Setup();

    useEffect(() => {

        // Define the initial coordinates of points
        let pointA = { x: centerX / 3, y: centerY };
        let pointB = { x: centerX * 1.5, y: centerY };
        let line = {
            x1: pointA.x, y1: pointA.y,
            x2: pointB.x, y2: pointB.y
        };

        function updateLine() {
            let extendPointA = {
                x: pointA.x - extendPoint(pointA, pointB, 30).x,
                y: pointA.y - extendPoint(pointA, pointB, 30).y
            };
            let extendPointB = {
                x: pointB.x + extendPoint(pointA, pointB, 30).x,
                y: pointB.y + extendPoint(pointA, pointB, 30).y
            };

            lineA
                .transition()
                .duration(500)
                .attr("x1", extendPointA.x)
                .attr("y1", extendPointA.y)
                .attr("x2", extendPointB.x)
                .attr("y2", extendPointB.y);
        }

        const lineA = svg.append("line")
            .attr("x1", line.x1)
            .attr("y1", line.y1)
            .attr("x2", line.x2)
            .attr("y2", line.y2)
            .style("stroke", "black")
            .style("stroke-width", 5)
            .style("stroke-dasharray", "5");

        const circleA = svg.append("circle")
            .attr("cx", pointA.x)
            .attr("cy", pointA.y)
            .attr("r", 10)
            .attr("fill", "red")
            .call(d3.drag()
                .on("start", () => { })
                .on("drag", (event) => {
                    pointA = { x: event.x, y: event.y };
                    updatePoint(circleA, labelA, pointA);
                    updateLine();
                })
                .on("end", () => { })
            );

        const circleB = svg.append("circle")
            .attr("cx", pointB.x)
            .attr("cy", pointB.y)
            .attr("r", 10)
            .attr("fill", "blue")
            .call(d3.drag()
                .on("start", () => { })
                .on("drag", (event) => {
                    pointB = { x: event.x, y: event.y };
                    updatePoint(circleB, labelB, pointB);
                    updateLine();
                })
                .on("end", () => { })
            );

        // Add labels to the points
        const labelA = svg
            .append("text")
            .text("A")
            .attr("x", pointA.x + 20)
            .attr("y", pointA.y - 20)
            .attr("font-size", "14px")
            .attr("fill", "red");

        const labelB = svg
            .append("text")
            .text("B")
            .attr("x", pointB.x + 20)
            .attr("y", pointB.y - 20)
            .attr("font-size", "14px")
            .attr("fill", "blue");


        updateLine();

        const circles = svg.selectAll("circle");

        circles.attr("r", 0);

        // Transition to make the circles appear first
        circles
            .transition()
            .delay(1000)
            .duration(500)
            .attr("r", 10)



        circles.on("click", function () {
            animatePopup(d3.select(this));
        })

    });


};

export default Postulate8;
