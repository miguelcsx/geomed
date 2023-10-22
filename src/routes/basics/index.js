// src/routes/basics/index.js
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CollapseMenu from "../../components/CollapseMenu";

const Basics = () => {
    const images = {
        definitions: "https://images.unsplash.com/photo-1676302447092-14a103558511?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxtYXRoZW1hdGljc3xlbnwwfHwwfHx8MA%3D%3D",
        postulates: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <CollapseMenu />
            <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
                <Header
                    title="Basics"
                    description="Explore fundamental concepts and build a strong foundation in geometry."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to="/basics/definitions/">
                        <Card name="Definitions" url={images.definitions} />
                    </Link>
                    <Link to="/basics/postulates/">
                        <Card name="Postulates" url={images.postulates} />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Basics;