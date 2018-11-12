import React from "react";
import styled from "styled-components";
import moment from "moment";
import posed from "react-pose";

const humanizeDuration = require("humanize-duration");

const P = styled.p`
  font-family: ${props => props.theme.font.alt};
  font-size: 25px;
  font-weight: bold;
`;

const AnimP = posed(P)({
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
    scale: 0.5,
    opacity: 0,
    y: 100,
    transition: {
      default: () => ({
        duration: 1000,
        ease: "easeInOut"
      })
    }
  }
});

const Photo = () => {
  const birth = moment("2018-11-01 07:51");
  const now = moment();
  const diff = now.diff(birth);

  const age = humanizeDuration(diff, {
    round: true,
    units: ["y", "mo", "w", "d", "h"],
    largest: 3,
    language: "es"
  });
  return (
    <AnimP initialPose="exit" pose="enter">
      {age}
    </AnimP>
  );
};

export default Photo;
