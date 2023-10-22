// src/routes/basics/index.js
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CollapseMenu from "../../components/CollapseMenu";
import Cards from "../../components/Cards";

const Basics = () => {
    const images = {
        definitions: "https://images.unsplash.com/photo-1676302447092-14a103558511?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxtYXRoZW1hdGljc3xlbnwwfHwwfHx8MA%3D%3D",
        postulates: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    const cardList = [
        {
            url: "/basics/definitions/",
            name: "Definitions",
            image: images.definitions
        },
        {
            url: "/basics/postulates/",
            name: "Postulates",
            image: images.postulates
        },
    ]

    return (
        <div className="flex flex-col h-screen">
            <CollapseMenu />
            <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
                <Header
                    title="Basics"
                    description="Explore fundamental concepts and build a strong foundation in geometry."
                />
                <Cards cardData={cardList} />
            </div>
            <Footer />
        </div>
    );
};

export default Basics;