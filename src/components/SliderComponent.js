import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderComponent = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const SliderContainer = styled.div`
    position: relative;
    width: 100%;

    max-width: 700px; /* Adjust the maximum width as needed */
    margin: auto;
  `;

  const SliderContent = styled.div`
    display: flex;
    transition: transform 0.5s ease;
  `;

  const Slide = styled.div`
    flex: 0 0 auto;
    width: 100%;
    height: 600px; /* Adjust the height as needed */
    background-size: cover;
    display: none;
    &.active {
      display: block;
    }
  `;

  const PrevButton = styled.button`
    position: absolute;
    top: 50%;
    left: -20px; /* Adjust left position */
    transform: translateY(-50%);
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 10px;
    z-index: 0;
  `;

  const NextButton = styled.button`
    position: absolute;
    top: 50%;
    right: 145px; /* Adjust right position */
    transform: translateY(-50%);
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 10px;
    z-index: 0;
  `;

  return (
    <SliderContainer>
      {/* <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
      <NextButton onClick={nextSlide}>&#10095;</NextButton> */}
      <SliderContent>
        {images.map((image, index) => (
          <Slide
            key={index}
            className={index === currentSlide ? 'active' : ''}
            style={{
              backgroundImage: `url(${image})`,
              maxHeight: '400px',
              maxWidth: '450px',
            }}
          />
        ))}
      </SliderContent>
    </SliderContainer>
  );
};

export default SliderComponent;
