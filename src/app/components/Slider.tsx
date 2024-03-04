import React from "react";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

// Installa i componenti Swiper necessari
SwiperCore.use([Navigation, Pagination]);

// Definisci le immagini
const images = [
  "https://ristoexpert.com/restaurant/cover?id=289603&time=1622915590",
  "https://menu.sluurpy.it/immagini/locali_it/224716.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/1b/68/39/91/il-tonno-croccante.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/2b/61/10/86/nuova-gestione.jpg",
];

// Componente Slider
const Slider: React.FC = () => {
  return (
    <StyledSwiper
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true} // Imposta le immagini al centro
      slidesPerView={1} // Imposta il numero di immagini visibili contemporaneamente
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <StyledImage src={image} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

// Componente SwiperSlide con immagine centrata
const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    width: 800px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// Componente immagine
const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default Slider;
