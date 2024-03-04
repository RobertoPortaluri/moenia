"use client";

import Footer from "./components/footer";
import styled from "styled-components";
import Navbar from "./components/navbar";
import Slider from "./components/Slider";

export default function Home() {
  const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
  `;

  return (
    <Main>
      <Navbar />
      <div>
        <Slider />
      </div>
      <div></div>
      <Footer />
    </Main>
  );
}
