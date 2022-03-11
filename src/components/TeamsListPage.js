import React from "react";
import StyledTeamsListPage from "./styles/TeamsListPage.styled";
import TeamsListHeader from "./TeamsListHeader";
import TeamsListBody from "./TeamsListBody";
import TeamRowContainer from "./TeamRowContainer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function TeamsListPage(props) {
  const teamsList = useSelector((state) => state.payload);
  const navigate = useNavigate();

  function onTeamChosenHandle(teamId) {
    navigate(`/teams/${teamId}`);
  }

  return (
    <StyledTeamsListPage>
      <TeamsListHeader />
      <TeamsListBody>
        {teamsList.map((teamFromList) => {
          return (
            <TeamRowContainer
              key={teamFromList.team.id}
              teamFromList={teamFromList}
              onTeamChosenHandle={onTeamChosenHandle}
            />
          );
        })}
      </TeamsListBody>
    </StyledTeamsListPage>
  );
}

export default TeamsListPage;
