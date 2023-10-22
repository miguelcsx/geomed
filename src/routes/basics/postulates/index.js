import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import CollapseMenu from "../../../components/CollapseMenu";

const BasicPostulates = () => {
  const images = {
    order:
      "https://media.istockphoto.com/id/689964010/es/foto/categor%C3%ADa-de-geometr%C3%ADa.jpg?s=612x612&w=0&k=20&c=0Vsd96CaD1xBOfvwqSVlwmDMj6dZjKTL0DHgwHghz1M=",
    linking:
      "https://cdn.pixabay.com/photo/2021/01/11/10/20/circuit-board-5907811_640.jpg",
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <CollapseMenu />
      <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center">
        <Header
          title="Basic Postulates"
          description="These fundamental axioms form the cornerstone of geometric understanding, guiding your exploration of shapes, lines, and the essence of spatial relationships."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/basics/postulates/order">
            <Card name="Order" url={images.order} />
          </Link>
          <Link to="/basics/postulates/linking">
            <Card name="Linking" url={images.linking} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BasicPostulates;
