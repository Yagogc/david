import React from "react";
import styled from "styled-components";
import moment from "moment";

const humanizeDuration = require("humanize-duration");

const P = styled.p`
  font-family: ${props => props.theme.font.alt};
  font-size: 25px;
  font-weight: bold;
`;

const Photo = () => {
  const birth = moment("2018-11-01 07:51");
  const now = moment();
  const diff = now.diff(birth);

  const age = humanizeDuration(diff, {
    round: true,
    units: ["y", "mo", "w", "d", "h"],
    largest: 3
  });
  return <P>{age}</P>;
};

export default Photo;
