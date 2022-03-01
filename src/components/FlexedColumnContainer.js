import React from "react";
import StyledFlexedColumnContainer from "./styles/FlexedColumnContainer.styled";

function FlexedColumnContainer(props) {
  return (
    <StyledFlexedColumnContainer>{props.children}</StyledFlexedColumnContainer>
  );
}

export default FlexedColumnContainer;
