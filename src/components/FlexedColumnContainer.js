import React from "react";
import styled from "styled-components";

const StyledFlexedColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

function FlexedColumnContainer(props) {
  return (
    <StyledFlexedColumnContainer>{props.children}</StyledFlexedColumnContainer>
  );
}

export default FlexedColumnContainer;
