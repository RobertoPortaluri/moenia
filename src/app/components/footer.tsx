"use client";
import React from "react";
import { Typography, Container } from "@mui/material";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  background-color: #333; /* Colore grigio scuro */
  color: white; /* Testo bianco */
  padding: 20px 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  display: block;
`;

const SocialLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: right;
`;

const SocialLink = styled.li`
  display: inline-block;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Typography variant="body2">Moenia Ristorante - Otranto</Typography>
        <SocialLinksList>
          <SocialLink>
            <a target="_blank" href="https://www.instagram.com/moeniaotranto/">
              Instagram
            </a>
          </SocialLink>
          <SocialLink>
            <a target="_blank" href="https://www.facebook.com/moeniaotranto/">
              Facebook
            </a>
          </SocialLink>
          <SocialLink>
            <a
              target="_blank"
              href=" https://www.tripadvisor.it/Restaurant_Review-g652004-d17384726-Reviews-Moenia-Otranto_Province_of_Lecce_Puglia.html/"
            >
              Trip-Advisor
            </a>
          </SocialLink>
        </SocialLinksList>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
