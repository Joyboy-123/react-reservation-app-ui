import React from "react";
import Featured from "../../Components/featured/Featured";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/propertylist/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse By Property</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
