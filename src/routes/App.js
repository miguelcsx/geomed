import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import { documentTitle } from '../lib/utils';

const App = () => {
  
  documentTitle();

  const images = {
    basics: "https://cdn.pixabay.com/photo/2016/07/11/12/16/mathematics-1509559_960_720.jpg",
    lines: "https://media.istockphoto.com/id/946220306/es/vector/negro-con-franjas-diagonales-vector-de-fondo-de-plantilla-acoplamiento-directo-diagonal-rayas.jpg?s=612x612&w=0&k=20&c=Ele3P2G_puPSGN1hpxmoyLq9bgI4agSC7oChocC5ftc=",
    triangles: "https://media.istockphoto.com/id/1126741764/es/vector/fondo-de-mosaico-negro-y-oro.jpg?s=612x612&w=0&k=20&c=1LGTuVLwdgvY6QDGsj4EMCl870XSoLGLW2p0uFtHQ4w=",
  };

  const cardList = [
    {
      url: "/basics/",
      name: "Basics",
      image: images.basics
    },
    {
      url: "/lines/",
      name: "Lines",
      image: images.lines
    },
    {
      url: "/triangles",
      name: "Triangles",
      image: images.triangles
    },
  ]

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center">

        <Header
          title="Geomed"
          description="Geomed is a geometry theorem visualizer that helps you understand the fundamental concepts of geometry through interactive visualizations."
        />

        <Cards cardData={cardList} />
      </div>
      <Footer />
    </div>
  );

}

export default App;
