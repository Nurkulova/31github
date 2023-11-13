import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Experiense from "./components/experiense/Experiense";
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
        <Experiense/>
        <Services />
        <Portfolio/>
        <Testimonials/>
        <Contacts />
        <Footer />
      </div>
    );
  }

export default App;
