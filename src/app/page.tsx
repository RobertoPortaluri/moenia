"use client";

import Footer from "./components/footer";
import styled from "styled-components";
import Navbar from "./components/navbar";

export default function Home() {
  const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: aliceblue;
  `;

  return (
    <Main>
      <Navbar />

      <Footer />
    </Main>
  );
}
