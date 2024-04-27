import React from "react";
import NavBar from "./Components/NavBar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Follow from "./Components/Follow";
import { useMyContext } from "./Context";
import Banners from "./Components/Banners";

const App = () => {
  return (
    <div>
      <NavBar />
      <Body />
      <Follow />
      <Footer />

      <Banners />
    </div>
  );
};

export default App;
