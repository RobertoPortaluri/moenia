"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import styled from "styled-components";
import Navbar from "./components/navbar";



export default function Home() {
const Main = styled.main`
width: 100vw;
height: 100vh;
`

  return (
    <Main>
     <Navbar />
        <Image
          className={styles.logo}
          src="/logo.jpg"
          alt="Next.js Logo"
          width={180}
          height={157}
          priority
        />
    
      <Footer />
    </Main>
  );
}
