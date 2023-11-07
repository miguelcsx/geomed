// src/lib/basics/postulates/incidence/postulate17.js

import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import Setup from '../../../setup';
import { updatePoint, extendPoint } from '../../../utils';

const Postulate17 = () => {
    const { svg, centerX, centerY } = Setup();
    const [segmentLength, setSegmentLength] = useState(20); // Initial value, you can change it as needed

    useEffect(() => {
        // Define the initial coordinates of points A and B
        let pointA = { x: centerX / 3, y: centerY };
        let pointB = { x: centerX * 1.5, y: centerY };

        // Function to calculate the segment length
        function calculateSegmentLength() {
            return Math.sqrt((pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2);
        }

        // Function to update the position of the segment and label
        function updateSegment() {
            segment.attr('x1', pointA.x).attr('y1', pointA.y).attr('x2', pointB.x).attr('y2', pointB.y);

            const length = calculateSegmentLength();
            setSegmentLength(length); // Update the segment length
            labelLength.text(`m(AB) = ${length.toFixed(2)}`); // Update the label with the calculated length
        }

        // Draw the segment
        const segment = svg
            .append('line')
            .attr('x1', pointA.x)
            .attr('y1', pointA.y)
            .attr('x2', pointB.x)
            .attr('y2', pointB.y)
            .style('stroke', 'black')
            .style('stroke-width', 5);

        // Create circles to represent points A and B
        const circleA = svg
            .append('circle')
            .attr('cx', pointA.x)
            .attr('cy', pointA.y)
            .attr('r', 10)
            .attr('fill', 'red')
            .call(
                d3.drag()
                    .on('start', () => { })
                    .on('drag', (event) => {
                        pointA = { x: event.x, y: event.y };
                        updatePoint(circleA, labelA, pointA);
                        updateSegment();
                    })
                    .on('end', () => { })
            );

        const circleB = svg
            .append('circle')
            .attr('cx', pointB.x)
            .attr('cy', pointB.y)
            .attr('r', 10)
            .attr('fill', 'blue')
            .call(
                d3.drag()
                    .on('start', () => { })
                    .on('drag', (event) => {
                        pointB = { x: event.x, y: event.y };
                        updatePoint(circleB, labelB, pointB);
                        updateSegment();
                    })
                    .on('end', () => { })
            );

        // Add labels to points A and B
        const labelA = svg
            .append('text')
            .text('A')
            .attr('x', pointA.x + 20)
            .attr('y', pointA.y - 20)
            .attr('font-size', '14px')
            .attr('fill', 'red');

        const labelB = svg
            .append('text')
            .text('B')
            .attr('x', pointB.x + 20)
            .attr('y', pointB.y - 20)
            .attr('font-size', '14px')
            .attr('fill', 'blue');

        // Add the label for segment length
        const labelLength = svg
            .append('text')
            .text(`m(AB) = ${segmentLength.toFixed(2)}`) // Display the initial length
            .attr('x', centerX * 1.5) // Adjust the x position for top right
            .attr('y', centerY / 1.5) // Adjust the y position for top right
            .attr('font-size', '30px') // Make the font size smaller
            .attr('font-weight', 'bold') // Add bold style
            .attr('fill', 'black')
            .attr('text-anchor', 'end'); // Align text to the right

        // Call the function to ensure the segment is initially displayed
        updateSegment();
    }, []);

    return null;
};

export default Postulate17;


