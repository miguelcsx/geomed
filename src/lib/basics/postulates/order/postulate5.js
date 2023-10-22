// src/lib/basics/postulates/order/postulate5.js

// src/basics/postulates/order/postulate3.js

import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Setup from '../../../setup';
import { updatePoint, calculateMiddlePoint } from '../../../utils';
import { animatePopup } from '../../../animations';

const Postulate5 = () => {

    const { svg, centerX, centerY } = Setup();

    useEffect(() => {
        // Define the initial coordinates of points
        let pointA = { x: centerX / 3, y: centerY };
        let pointB = { x: centerX * 1.5, y: centerY };
        let pointC = calculateMiddlePoint(pointA, pointB);
        let pointD = calculateMiddlePoint(pointA, pointC);


        function updatePoints() {
            // Update the position of the points and labels
            updatePoint(circleA, labelA, pointA);
            updatePoint(circleB, labelB, pointB);
            pointC = calculateMiddlePoint(pointA, pointB);
            updatePoint(circleC, labelC, pointC);

            pointD = calculateMiddlePoint(pointA, pointC);
            updatePoint(circleD, labelD, pointD);
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

        const circleD = svg.append("circle")
            .attr("cx", pointD.x)
            .attr("cy", pointD.y)
            .attr("r", 0)
            .attr("fill", "purple")
            .call(d3.drag()
                .on("start", () => { })
                .on("drag", (event) => {
                    pointD = { x: pointD.x, y: event.y };
                    const deltaY = pointD.y - pointA.y;
                    pointA = { x: pointA.x, y: pointA.y + deltaY };
                    pointB = { x: pointB.x, y: pointB.y + deltaY };
                    pointC = { x: pointC.x, y: pointC.y + deltaY };
                    updatePoints();
                })
                .on("end", () => { })
            )


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

        const labelD = svg
            .append("text")
            .text("D")
            .attr("x", pointD.x + 20)
            .attr("y", pointD.y - 20)
            .attr("font-size", "14px")
            .attr("fill", "purple")

        updatePoints();

        const circles = svg.selectAll("circle");

        circles.attr("r", 0);

        // Animation
        circleA
            .transition()
            .duration(1000)
            .delay(50)
            .attr("r", 10)
            .on("end", function () {
                // appear circleB
                circleB
                    .transition()
                    .duration(1000)
                    .delay(50)
                    .attr("r", 10)
                    .on("end", function (d, i) {
                        if (i == 0) {
                            circleC
                                .transition()
                                .duration(1000)
                                .attr("r", 10)
                                .on("end", function () {
                                    circleB
                                        .transition()
                                        .duration(1000)
                                        .delay(3000)
                                        .attr("r", 0)
                                        .on("end", function () {
                                            circleD
                                                .transition()
                                                .duration(1000)
                                                .attr("r", 10)
                                                .on("end", function () {
                                                    circleC
                                                        .transition()
                                                        .duration(1000)
                                                        .delay(3000)
                                                        .attr("r", 0)
                                                        .on("end", function () {
                                                            circleB
                                                                .transition()
                                                                .duration(1000)
                                                                .attr("r", 10)
                                                                .on("end", function () {
                                                                    circles
                                                                        .transition()
                                                                        .duration(1000)
                                                                        .delay(5000)
                                                                        .attr("r", 10);
                                                                })
                                                        })
                                                })
                                        })
                                })
                        }
                    })
            });

        // Add a click event to trigger the animation
        circles.on("click", function () {
            animatePopup(d3.select(this));
        });

    });

};

export default Postulate5;
