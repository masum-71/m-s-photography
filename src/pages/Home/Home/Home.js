import React from "react";
import useTitle from "../../../Hooks/UseTitle";
import Banner from "../Banner/Banner";
import Contact from "../Contect/Contact";
import RecentWork from "../RecentWork/RecentWork";
import HomeServices from "../Services/HomeServices";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <RecentWork></RecentWork>
      <Contact></Contact>
    </div>
  );
};

export default Home;
