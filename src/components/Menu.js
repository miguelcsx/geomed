import React from 'react';
import { Link } from 'react-router-dom';
import { handleGoBack } from '../lib/utils';

const Menu = ( {reloadComponent}) => {
    return (
        <div className="bg-gray-400 p-2 lg:p-5 flex justify-center">

            <button className="mx-4 w-6 h-6" onClick={handleGoBack}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 bi bi-arrow-left" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                Back
            </button>

            <Link to="/">
                <button className="mx-4 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 bi bi-house" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path
                            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                    </svg>
                    Home
                </button>
            </Link>

            <button id="restartButton" className="mx-4 w-6 h-6" onClick={reloadComponent} >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 bi bi-arrow-clockwise" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path
                        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
                Restart
            </button>


        </div>
    );
};

export default Menu;
