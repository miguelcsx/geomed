import React, { useState, Suspense } from 'react';
import descriptions from '../../../lib/descriptions';
import Canvas from '../../../components/Canvas';
import Description from '../../../components/Description';
import Menu from '../../../components/Menu';
import Sidenav from '../../../components/Sidenav';

const postulates = [8, 9]; // Replace with your postulates
const currentSection = 'Postulates of Linking'; // Replace with your current section

// Create a mapping of postulate IDs to component import functions
const postulateComponents = {
    // postulate8: () => import('../../../lib/basics/postulates/linking/postulate8'),
    // postulate9: () => import('../../../lib/basics/postulates/linking/postulate9'),
    // Add more postulates as needed
};

const LinkingPostulates = () => {
    const [selectedPostulate, setSelectedPostulate] = useState(''); // Default to 'postulate1'
    const [forceReload, setForceReload] = useState(false); // State to trigger a reload

    const renderSelectedTheorem = () => {
        if (selectedPostulate && postulateComponents[selectedPostulate]) {
            const PostulateComponent = React.lazy(() => postulateComponents[selectedPostulate]());
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <PostulateComponent key={forceReload ? 'reload' : selectedPostulate} />
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

    console.log("Rendered Postulate:", selectedPostulate); // Add this line for debugging

    const handlePostulateSelect = (postulateID) => {
        if (postulateID === selectedPostulate) {
            // If the same postulate is selected, set forceReload to true
            setForceReload(true);
        } else {
            setForceReload(false);
        }
        clearCanvas();
        setSelectedPostulate(postulateID);
    };

    return (
        <div className="App">
            <div className="flex h-screen">
                <div className="flex-1 flex flex-col">
                    <Description descriptions={descriptions} theoremId={selectedPostulate} />
                    <Canvas />
                    {renderSelectedTheorem()}
                    <Menu />
                </div>
                <Sidenav
                type="Postulate"
                    currentSection={currentSection}
                    postulates={postulates}
                    onPostulateSelect={handlePostulateSelect}
                />
            </div>
        </div>
    );

}

export default LinkingPostulates;
