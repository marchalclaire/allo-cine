import React from "react";
import "./App.css";
import Navigation from "./components/Navigation.js";
import Hero from "./components/Hero.js";
import Movie from "./components/Movie.js";

const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <Movie></Movie>
    </>
  );
};

export default App;
