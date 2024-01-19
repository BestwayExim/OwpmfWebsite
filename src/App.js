import React, { useContext } from "react";
import "./App.css";
import MyHeader from "./components/header/Header";

import Mysidenav from "./components/sidenav/sidenave";
import { Sidenavcontext } from ".";
import CarouselBar from "./components/carouselview/Carousel";
import MyBanner from "./components/banner/Banner";
import HomePage from "./pages/homepage/home";

function App() {
  const { sidenav } = useContext(Sidenavcontext);
  return (
    <>
      <MyHeader />
      <CarouselBar />
      <MyBanner />
      <HomePage />
      <Mysidenav />
    </>
  );
}

export default App;
