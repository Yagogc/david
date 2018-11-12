import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 50px;
  font-family: ${props => props.theme.font.main};
`;

const Name = () => <Header>David</Header>;

export default Name;
