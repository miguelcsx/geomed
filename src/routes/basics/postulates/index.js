import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CollapseMenu from "../../../components/CollapseMenu";
import Cards from "../../../components/Cards";
import { documentTitle } from "../../../lib/utils";


const BasicPostulates = () => {

    documentTitle("Basic Postulates");

    const images = {
        order:
            "https://media.istockphoto.com/id/689964010/es/foto/categor%C3%ADa-de-geometr%C3%ADa.jpg?s=612x612&w=0&k=20&c=0Vsd96CaD1xBOfvwqSVlwmDMj6dZjKTL0DHgwHghz1M=",
        incidence:
            "https://cdn.pixabay.com/photo/2021/01/11/10/20/circuit-board-5907811_640.jpg",
    };

    const cardList = [
        {
            url: "/basics/postulates/order/",
            name: "Order",
            image: images.order
        },
        {
            url: "/basics/postulates/incidence/",
            name: "Incidence",
            image: images.incidence
        }
    ]

    return (
        <div className="flex flex-col h-screen">
            <CollapseMenu />
            <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
                <Header
                    title="Basic Postulates"
                    description="These fundamental axioms form the cornerstone of geometric understanding, guiding your exploration of shapes, lines, and the essence of spatial relationships."
                />
                <Cards cardData={cardList}/>
            </div>
            <Footer />
        </div>
    );
};

export default BasicPostulates;
