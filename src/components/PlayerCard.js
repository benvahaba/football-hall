import React from "react";
import StyledPlayerCard from "./styles/PlayerCard.styled";

function PlayerCard(props) {
  return <StyledPlayerCard>{props.children}</StyledPlayerCard>;
}

export default PlayerCard;
