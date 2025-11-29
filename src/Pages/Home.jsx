import React from "react";
import Banner from "../components/Banner";
import PopularGames from "../components/HomeLayouts/PopularGames";
import Newsletter from '../components/HomeLayouts/Newsletter';
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("GameHub")
  return (
    <>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
