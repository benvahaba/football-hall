import React from "react";
import StyledFocusedTeamHeader from "./styles/FocusedTeamHeader.styled";
import StyledTeamLogo from "./styles/TeamLogo.styled";

function FocusedTeamHeader(props) {
  console.log("props", props);
  return (
    <StyledFocusedTeamHeader>
      <StyledTeamLogo src={props.logo} alt={props.name} />
      <p>{props.name}</p>
    </StyledFocusedTeamHeader>
  );
}

export default FocusedTeamHeader;
