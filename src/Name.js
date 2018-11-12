import React from "react";
import styled from "styled-components";
import posed from "react-pose";

const Header = styled.h1`
  font-size: 50px;
  font-family: ${props => props.theme.font.main};
`;
const AnimHeader = posed(Header)({
  enter: {
    scale: 1,
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
    scale: 10,
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

const Name = () => (
  <AnimHeader initialPose="exit" pose="enter">
    David
  </AnimHeader>
);

export default Name;
