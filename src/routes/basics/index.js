// src/routes/basics/index.js
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";

const Basics = () => {
    const images = {
        postulates: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    return (
        <>
            <BackButton/>
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
                <Header
                    title="Basics"
                    description="Explore fundamental concepts and build a strong foundation in geometry."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to="/basics/postulates/">
                        <Card name="Postulates" url={images.postulates} />
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Basics;