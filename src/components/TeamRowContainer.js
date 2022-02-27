import React from "react";
import StyledTeamRowContainer from "./styles/TeamRowContainer.styled";

function TeamRowContainer(props) {
  return <StyledTeamRowContainer>{props.children}</StyledTeamRowContainer>;
}

export default TeamRowContainer;
