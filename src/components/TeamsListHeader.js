import React from "react";
import StyledTeamsListHeader from "./styles/TeamsListHeader.styled";

function TeamsListHeader() {
  return (
    <StyledTeamsListHeader>
      <p>Name</p>
      <p>Founded</p>
      <p>Address</p>
    </StyledTeamsListHeader>
  );
}

export default TeamsListHeader;
