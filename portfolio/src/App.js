import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/contacts/Contacts";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
    return (
      <div>
        <Header />
        <Navbar />
        <About />
        <Experience/>
        <Services />
        <Portfolio/>
        <Testimonials/>
        <Contacts />
        <Footer />
      </div>
    );
  }

export default App;
