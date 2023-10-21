// Canvas.js
import React, { Component } from 'react';

class Canvas extends Component {
    render() {
        return (
            <svg
                id="canvas"
                className="flex-1 w-full h-auto border border-solid border-gray-300"
            ></svg>
        );
    }
}

export default Canvas;
