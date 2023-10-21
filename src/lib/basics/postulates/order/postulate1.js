import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Setup from '../../../setup';
import { updatePoint } from '../../../utils';
import { animatePopup } from '../../../animations';

const Postulate1 = () => {

    const { svg, centerX, centerY } = Setup();

    useEffect(() => {

        // Define the initial coordinates of the two points
        let pointA = { x: centerX / 3, y: centerY };
        let pointB = { x: centerX * 1.5, y: centerY };

        // Function to update the position of the points and labels
        function updatePoints() {
            updatePoint(circleA, labelA, pointA);
            updatePoint(circleB, labelB, pointB);
        }

        // Create two circles to represent the points and labels with drag functionality
        const circleA = svg.append("circle")
            .attr("cx", pointA.x)
            .attr("cy", pointA.y)
            .attr("r", 10)
            .attr("fill", "red")
            .call(d3.drag()
                .on("start", () => { })
                .on("drag", (event) => {
                    pointA = { x: event.x, y: event.y };
                    updatePoints();
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
                    updatePoints();
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

        // Call the function to ensure that the points and labels are initially displayed
        updatePoints();

        // Select the circles
        const circles = svg.selectAll("circle");

        // Set up the initial transition to have the points and labels hidden initially
        circles.attr("r", 0);

        // Add a transition to show the points and labels with a pop-up effect
        circles
            .transition()
            .delay(1000) // Delay in milliseconds before the points and labels appear
            .duration(1000) // Duration of the animation in milliseconds
            .attr("r", 10); // Original size

        // Add a click event to trigger the animation
        circles.on("click", function () {
            animatePopup(d3.select(this));
        });

    }, []); // The empty dependency array ensures this effect runs only once
};

export default Postulate1;
