import React from "react";
import Header from "./components/Header";
import Exclusive from "./components/Exclusive";
import Content from "./components/Content";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ExploreCategories from "./components/ExploreCategories";
import HowItWorks from "./components/HowItWorks";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="max-w-6xl mx-auto font-['Work_Sans']">
      <Header />
      <Exclusive />
      <Content />
      <Products />
      <ExploreCategories />
      <HowItWorks />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
