// scr/lib/utils.js

import { useEffect } from "react";

export function documentTitle(currentSection) {
    useEffect(() => {
        fetch('/manifest.json') // This path should resolve to public/manifest.json
            .then(response => response.json())
            .then(data => {
                const title = currentSection ? `${currentSection} - ${data.name}` : data.name;
                document.title = title;
            })
            .catch(error => {
                console.error('Failed to load manifest.json:', error);
            });
    }, [currentSection]);
};

export function handleGoBack() {
    window.history.back();
};

export function handleGoForward() {
    window.history.forward();
};

export function updatePoint(circle, pointLabel, coordinate) {
    circle.attr("cx", coordinate.x).attr("cy", coordinate.y);
    pointLabel.attr("x", coordinate.x + 20).attr("y", coordinate.y - 20);
};

export function calculateMiddlePoint(pA, pB) {
    const centerX = (pA.x + pB.x) / 2;
    const centerY = (pA.y + pB.y) / 2;
    return { x: centerX, y: centerY };
};

export function extendPoint(pA, pB, extra) {
    const deltaX = pB.x - pA.x;
    const deltaY = pB.y - pA.y;

    const length = Math.sqrt((deltaX ** 2) + (deltaY ** 2));

    let unitX = deltaX / length;
    let unitY = deltaY / length;

    unitX *= extra;
    unitY *= extra;

    return { x: unitX, y: unitY };
};