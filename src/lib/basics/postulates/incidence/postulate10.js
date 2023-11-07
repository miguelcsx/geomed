// src/lib/basics/postulates10.js

import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Setup from '../../../setup';
import { updatePoint, extendPoint } from '../../../utils';
import { animatePopup } from '../../../animations';

const Postulate10 = () => {
    const { svg, centerX, centerY } = Setup();

    useEffect(() => {

        // Define the initial coordinates of the points
        let pointA = { x: centerX / 3, y: centerY };
        let pointB = { x: centerX * 1.5, y: centerY };
        let line = {
            x1: pointA.x, y1: pointA.y,
            x2: pointB.x, y2: pointB.y
        };

        // Define the coordinates of a point outside the line
        let outsidePoint = { x: centerX / 2, y: centerY + 50 };

        function updateLine() {
            // Calculate the extended points for the line
            let extendPointA = {
                x: pointA.x - extendPoint(pointA, pointB, 50).x,
                y: pointA.y - extendPoint(pointA, pointB, 50).y
            };
            let extendPointB = {
                x: pointB.x + extendPoint(pointA, pointB, 50).x,
                y: pointB.y + extendPoint(pointA, pointB, 50).y
            };

            // Update the position of the line
            lineA
                .transition()
                .duration(2500)
                .attr("x1", extendPointA.x)
                .attr("y1", extendPointA.y)
                .attr("x2", extendPointB.x)
                .attr("y2", extendPointB.y);

            // Update the position of the point outside the door
            pointOutside
                .attr("cx", outsidePoint.x)
                .attr("cy", outsidePoint.y);
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
                .on("drag", () => { }) // Prevent the red point from moving
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

        // Add a point outside the door and enable dragging
        const pointOutside = svg.append("circle")
            .attr("cx", outsidePoint.x)
            .attr("cy", outsidePoint.y)
            .attr("r", 10)
            .attr("fill", "green")
            .call(d3.drag()
                .on("start", () => { })
                .on("drag", () => { }) // Prevent the green point from moving
                .on("end", () => { })
            );

        // Function to check if a point is on a line
        function isPointOnLine(x, y, lineStart, lineEnd) {
            const d1 = dist(x, y, lineStart.x, lineStart.y);
            const d2 = dist(x, y, lineEnd.x, lineEnd.y);
            const lineLength = dist(lineStart.x, lineStart.y, lineEnd.x, lineEnd.y);
            return d1 + d2 >= lineLength - 1 && d1 + d2 <= lineLength + 1;
        }

        // Function to calculate a new position outside the line
        function getPointOutsideLine(x, y, lineStart, lineEnd, distance) {
            const lineAngle = Math.atan2(lineEnd.y - lineStart.y, lineEnd.x - lineStart.x);
            const newX = x + Math.cos(lineAngle) * distance;
            const newY = y + Math.sin(lineAngle) * distance;
            return { x: newX, y: newY };
        }

        // Function to calculate the distance between two points
        function dist(x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        }

        // Labels for the points
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

        // Update the position of the initial line
        updateLine();

        const circles = svg.selectAll("circle");

        circles.attr("r", 0);

        // Transition to make the circles appear first
        circles
            .transition()
            .duration(20)
            .attr("r", 10);

        animatePopup(circleA);
        animatePopup(circleB);

        // Add a click event to trigger the point animations
        circles.on("click", function () {
            animatePopup(d3.select(this));
        });

    });

};

export default Postulate10;

