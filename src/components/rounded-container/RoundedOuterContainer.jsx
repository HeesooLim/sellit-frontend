import React from "react";
import styled from "styled-components";

const RoundedDiv = styled.div`
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 0 1rem 0 #cdcdcd;
  margin: 1rem;

  @media only screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

const RoundedOuterContainer = (props) => {
  return <RoundedDiv>{props.children}</RoundedDiv>;
};

export default RoundedOuterContainer;
