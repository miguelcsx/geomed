// postulate 11

import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Setup from '../../../setup';
import { updatePoint } from '../../../utils';
import { animatePopup } from '../../../animations';

const Postulate11 = () => {
    const { svg, centerX, centerY } = Setup();

    useEffect(() => {
        // Define the coordinates of the rectangle
        const rectWidth = 400; // Rectangle width
        const rectHeight = 200; // Rectangle height
        const rectX = centerX - rectWidth / 2; // X to center horizontally
        const rectY = centerY - rectHeight / 2; // Y to center vertically
        const rectXEnd = rectX + rectWidth;
        const rectYEnd = rectY + rectHeight;

        // Draw the rectangle with gray fill
        svg
            .append("rect")
            .attr("x", rectX)
            .attr("y", rectY)
            .attr("width", rectWidth)
            .attr("height", rectHeight)
            .attr("fill", "gray") // Change the fill color to gray
            .attr("stroke", "black");

        // Define the coordinates of the three points
        let pointA = { x: centerX - 50, y: centerY - 20 };
        let pointB = { x: centerX, y: centerY + 20 };
        let pointC = { x: centerX + 40, y: centerY - 30 };

        // Function to update the position of points and labels
        function updatePoints() {
            updatePoint(circleA, labelA, pointA);
            updatePoint(circleB, labelB, pointB);
            updatePoint(circleC, labelC, pointC);
        }

        // Create three circles to represent the points with drag functionality
        const circleA = svg.append("circle")
            .attr("cx", pointA.x)
            .attr("cy", pointA.y)
            .attr("r", 10)
            .attr("fill", "red")
            .call(d3.drag()
                .on("start", () => { })
                .on("drag", (event) => {
                    pointA = { x: Math.max(rectX, Math.min(rectXEnd, event.x)), y: Math.max(rectY, Math.min(rectYEnd, event.y)) };
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
                    pointB = { x: Math.max(rectX, Math.min(rectXEnd, event.x)), y: Math.max(rectY, Math.min(rectYEnd, event.y)) };
                    updatePoints();
                })
                .on("end", () => { })
            );

        const circleC = svg.append("circle")
            .attr("cx", pointC.x)
            .attr("cy", pointC.y)
            .attr("r", 10)
            .attr("fill", "green")
            .call(d3.drag()
                .on("start", () => { })
                .on("drag", (event) => {
                    pointC = { x: Math.max(rectX, Math.min(rectXEnd, event.x)), y: Math.max(rectY, Math.min(rectYEnd, event.y)) };
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

        const labelC = svg
            .append("text")
            .text("C")
            .attr("x", pointC.x + 20)
            .attr("y", pointC.y - 20)
            .attr("font-size", "14px")
            .attr("fill", "green");

        // Call the function to ensure that points and labels are initially displayed
        updatePoints();

        // Select the circles
        const circles = svg.selectAll("circle");

        // Set up the initial transition to hide the points and labels initially
        circles.attr("r", 0);

        // Add a transition to show the points and labels with a pop-up effect
        circles
            .transition()
            .delay(1000) // Delay in milliseconds before the points and labels appear
            .duration(1000) // Animation duration in milliseconds
            .attr("r", 10); // Original size

        // Add a click event to trigger the animation
        circles.on("click", function () {
            animatePopup(d3.select(this));
        });

    }, []); // The empty dependency array ensures that this effect runs only once
};

export default Postulate11;
