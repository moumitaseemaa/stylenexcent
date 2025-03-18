import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Clients from "./components/clients/Clients";
import PixelGrade from "./components/pixelGradeWithDesign/PixelGrade";
import Pellentesque from "./components/pellentesques/Pellentesque";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Clients />
      <PixelGrade />
      <Pellentesque />
    </>
  );
};

export default App;
