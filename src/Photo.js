import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import photo from "./img/david.jpg";

const Img = styled.img`
  max-width: 400px;
  max-height: 400px;
  margin: 30px;
  border: 25px solid white;
  object-fit: cover;
  box-shadow: 0 12px 10px rgba(0, 0, 0, 0.2);
  transform: rotate(-9deg);
  width: 100%;
  height: 100%;

  @media (max-width: 720px) {
    max-width: 200px;
    max-height: 200px;
  }
`;
const AnimImg = posed(Img)({
  enter: {
    rotate: "352deg",
    opacity: 1,
    y: 0,
    transition: {
      default: () => ({
        duration: 1000,
        ease: "easeInOut"
      })
    }
  },
  exit: {
    rotate: "200deg",
    opacity: 0,
    y: -100,
    transition: {
      default: () => ({
        duration: 1000,
        ease: "easeInOut"
      })
    }
  }
});

const Photo = () => <AnimImg src={photo} initialPose="exit" pose="enter" />;

export default Photo;
