import React from "react";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Colleges from "./components/Colleges";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./index.css";
import HomeBanner from "./components/HomeBanner";
import NavBar from "./components/Navbar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WhatsappButton from "./components/WhatsappButton";
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  return (
    <div className="app">
      <NavBar />
      <HomeBanner />
      <WhatsappButton />
      <Stats />
      <Services />
      <Colleges />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
