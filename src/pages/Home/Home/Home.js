import React from "react";
import Banner from "../Banner/Banner";
import RecentWork from "../RecentWork/RecentWork";
import HomeServices from "../Services/HomeServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <RecentWork></RecentWork>
    </div>
  );
};

export default Home;
