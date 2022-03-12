import React from "react";
import styled from "styled-components";

const StyledPlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height: fit-content;
  box-shadow: 0.5rem 0.5rem 0.5rem black;
  gap: 1rem;
  padding: 0.5rem;
`;

function PlayerCard(props) {
  return <StyledPlayerCard>{props.children}</StyledPlayerCard>;
}

export default PlayerCard;
