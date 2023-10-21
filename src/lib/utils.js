// scr/lib/utils.js

export function handleGoBack() {
    window.history.back();
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

