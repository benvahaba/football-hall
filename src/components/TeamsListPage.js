import React from "react";
import StyledTeamsListPage from "./styles/TeamsListPage.styled";
import TeamsListHeader from "./TeamsListHeader";
import TeamsListBody from "./TeamsListBody";
import TeamRowContainer from "./TeamRowContainer";

function TeamsListContainer(props) {
  return (
    <StyledTeamsListPage>
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
    </StyledTeamsListPage>
  );
}

export default TeamsListContainer;
