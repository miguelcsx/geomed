// src/basics/postulates/order/postulate3.js

import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Setup from '../../../setup';
import { updatePoint, calculateMiddlePoint } from '../../../utils';
import { animatePopup } from '../../../animations';

const Postulate2 = () => {

    const { svg, centerX, centerY } = Setup();

    useEffect(() => {
        // Define the initial coordinates of points
        let pointA = { x: centerX / 3, y: centerY };
        let pointB = { x: centerX * 1.5, y: centerY };
        let pointC = calculateMiddlePoint(pointA, pointB);

        function updatePoints() {
            // Update the position of the points and labels
            updatePoint(circleA, labelA, pointA);
            updatePoint(circleB, labelB, pointB);
            pointC = calculateMiddlePoint(pointA, pointB);
            updatePoint(circleC, labelC, pointC);
        };

        // Create two ciricles for representing points A and B with drag functionality
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
            )

        const circleC = svg.append("circle")
            .attr("cx", pointC.x)
            .attr("cy", pointC.y)
            .attr("r", 10)
            .attr("fill", "green")
            .call(d3.drag()
                .on("start", () => { })
                .on("drag", (event) => {
                    // Move pointC in the y-axis
                    pointC = { x: pointC.x, y: event.y }
                    // Update points A and B accordingly
                    const deltaY = pointC.y - pointA.y;
                    pointA = { x: pointA.x, y: pointA.y + deltaY };
                    pointB = { x: pointB.x, y: pointB.y + deltaY };
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


        updatePoints();

        const circles = svg.selectAll("circle");

        circles.attr("r", 0);

        circles
            .transition()
            .delay(1000)
            .duration(1000)
            .attr("r", 10)
            .on("end", () => {
                animatePopup(circleA);
                animatePopup(circleB);
                // Wait for 2 seconds and then call animatePopup
                setTimeout(() => {
                    animatePopup(circleC);
                }, 1000);

            })


        circles.on("click", function () {
            animatePopup(d3.select(this));
        })

    });

};

export default Postulate2;
