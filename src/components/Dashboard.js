// src/components/Dashboard.js

import React, { useState, Suspense } from "react";
import Canvas from "./Canvas";
import Description from "./Description";
import Menu from "./Menu";
import Sidenav from "./Sidenav";

const Dashboard = ({ descriptions, currentSection, theorems, theoremComponents }) => {
    const [selectedTheorem, setSelectedTheorem] = useState('');
    // State to trigger a reload
    const [forceReload, setForceReload] = useState(false);

    const renderSelectedTheorem = () => {
        if (selectedTheorem && theoremComponents[selectedTheorem]) {
            const TheoremComponent = React.lazy(() => theoremComponents[selectedTheorem]());
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <TheoremComponent key={forceReload ? 'reload' : selectedTheorem} />
                </Suspense>
            );
        }
        return null;
    };

    const clearCanvas = () => {
        const canvas = document.getElementById('canvas');
        while (canvas.firstChild) {
            canvas.removeChild(canvas.firstChild);
        }
    };

    // Define la función reloadComponent
    const reloadComponent = () => {
        clearCanvas();
        setForceReload(!forceReload);
    };

    const handleTheoremSelect = (theoremID) => {
        clearCanvas();
        if (theoremID === selectedTheorem) {
            setForceReload(!forceReload); // Invierte el valor para forzar el reinicio
        } else {
            setSelectedTheorem(theoremID);
        }
    };


    console.log("Rendered:", selectedTheorem); // Add this line for debugging

    return (
        <div className="App">
            <div className="flex h-screen">
                <div className="flex-1 flex flex-col">
                    <Description descriptions={descriptions} theoremId={selectedTheorem} />
                    <Canvas />
                    {renderSelectedTheorem()}
                    <Menu reloadComponent={reloadComponent}/>
                </div>
                <Sidenav
                    type="postulate"
                    currentSection={currentSection}
                    theorems={theorems}
                    onTheoremSelect={handleTheoremSelect}
                />
            </div>
        </div>
    );
};

export default Dashboard;