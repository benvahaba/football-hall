import React from "react";
import StyledTeamRowContainer from "./styles/TeamRowContainer.styled";
import StyledTeamRowItem from "./styles/TeamRowItem.styled";

function TeamRowContainer(props) {
  return (
    <StyledTeamRowContainer
      onClick={() => {
        props.onTeamChosenHandle(props.teamFromList);
      }}
    >
      <>
        <StyledTeamRowItem>{props.teamFromList.team.name}</StyledTeamRowItem>
        <StyledTeamRowItem>{props.teamFromList.team.founded}</StyledTeamRowItem>
        <StyledTeamRowItem>
          {props.teamFromList.venue.address}
        </StyledTeamRowItem>
      </>
    </StyledTeamRowContainer>
  );
}

export default TeamRowContainer;
