import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }

export default App;
