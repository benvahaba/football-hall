import React from "react";
import TeamsListBody from "./TeamsListBody";
import TeamsListHeader from "./TeamsListHeader";
import StyledTeamsListContainer from "./styles/TeamsListContainer.styled";

function TeamsListContainer() {
  return (
    <StyledTeamsListContainer>
      <TeamsListHeader />
      <TeamsListBody />
    </StyledTeamsListContainer>
  );
}

export default TeamsListContainer;
