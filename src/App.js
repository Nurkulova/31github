import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Header/>
        <Footer/>
      </MainContainer>
    );
  }
}

export default App;


const MainContainer = styled('div')`
width: 1280px;
margin: 50px auto;
`