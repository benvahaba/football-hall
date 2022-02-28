import React from "react";
import StyledTeamsListContainer from "./styles/TeamsListContainer.styled";
import TeamsListHeader from "./TeamsListHeader";
import TeamsListBody from "./TeamsListBody";
import TeamRowContainer from "./TeamRowContainer";

function TeamsListContainer(props) {
  return (
    <StyledTeamsListContainer>
      <TeamsListHeader />
      <TeamsListBody>
        {props.teamsList.map((teamFromList) => {
          return (
            <TeamRowContainer
              key={teamFromList.team.id}
              teamFromList={teamFromList}
              onTeamChosenHandle={props.onTeamChosenHandle}
            />
          );
        })}
      </TeamsListBody>
    </StyledTeamsListContainer>
  );
}

export default TeamsListContainer;
