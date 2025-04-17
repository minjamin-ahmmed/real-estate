import React from "react";
import Banner from "./Components/Banner";
import Featuredwork from "./Components/Featuredwork";
import Journey from "./Components/Journey";
import Statistics from "./Components/Statistics";
import Explore from "./Components/Explore";
import Projects from "./Components/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <Featuredwork />
      <Projects />
      <Statistics />
      <Journey />
      <Explore />
    </div>
  );
};

export default Home;
