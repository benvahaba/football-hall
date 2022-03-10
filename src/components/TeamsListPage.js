import React from "react";
import StyledTeamsListPage from "./styles/TeamsListPage.styled";
import TeamsListHeader from "./TeamsListHeader";
import TeamsListBody from "./TeamsListBody";
import TeamRowContainer from "./TeamRowContainer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function TeamsListPage(props) {
  const teamsList = useSelector((state) => state.payload);

  useEffect(() => {
    console.log("teamsList", teamsList);
  }, [teamsList]);

  return (
    <StyledTeamsListPage>
      <TeamsListHeader />
      <TeamsListBody>
        {teamsList.map((teamFromList) => {
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

export default TeamsListPage;
