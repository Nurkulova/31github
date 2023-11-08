import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

const App = () => {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />
        </div>
        <Home/>
        <Footer />
      </div>
    );
  }

export default App;
